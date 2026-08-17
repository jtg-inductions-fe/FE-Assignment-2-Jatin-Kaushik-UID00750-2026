import { useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { East } from '@mui/icons-material';

import {
    FormButton,
    FormFieldRow,
    FormPasswordField,
    FormTextField,
} from '@components/FormComponents';
import { ROUTES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { AuthFormLayout } from '@layouts';
import { clearAuthError } from '@store/slices/authSlice';
import { loginThunk } from '@store/thunks';

import { LOGIN_FIELD_NAMES } from './LoginForm.constants';
import { defaultLoginFormValues } from './LoginForm.constants';
import { loginSchema } from './LoginForm.schema';
import { LoginFormData } from './LoginForm.types';

/**
 * Component managing the user authentication log-in form flow
 */

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state) => state.auth);

    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const methods = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: defaultLoginFormValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    /**
     * Dispatches user credentials to verification store thunks and handles navigation loops.
     */

    const onSubmit = async (data: LoginFormData) => {
        try {
            await dispatch(
                loginThunk({ email: data.email, password: data.password }),
            ).unwrap();
            toast({ message: 'Login successful', type: 'success' });
            void navigate(ROUTES.DISCOVERY);
        } catch {}
    };

    return (
        <AuthFormLayout
            title="Welcome Back"
            subtitle="Log in to get your food hot and fast"
            error={error}
            footerText="New to Nosh?"
            footerLinkText="Create an account"
            footerLinkTo="/signup"
        >
            <FormProvider {...methods}>
                <form
                    onSubmit={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                    noValidate
                >
                    <FormFieldRow
                        label="Email"
                        htmlFor={LOGIN_FIELD_NAMES.EMAIL}
                    >
                        <FormTextField name={LOGIN_FIELD_NAMES.EMAIL} />
                    </FormFieldRow>

                    <FormFieldRow
                        label="Password"
                        htmlFor={LOGIN_FIELD_NAMES.PASSWORD}
                    >
                        <FormPasswordField name={LOGIN_FIELD_NAMES.PASSWORD} />
                    </FormFieldRow>

                    <FormFieldRow>
                        <FormButton
                            type="submit"
                            fullWidth
                            loading={isSubmitting}
                            variant="contained"
                            disabled={isSubmitting}
                            endIcon={<East />}
                        >
                            Log In
                        </FormButton>
                    </FormFieldRow>
                </form>
            </FormProvider>
        </AuthFormLayout>
    );
};
