import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
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

import { loginSchema } from './LoginForm.schema';
import { LoginFormData } from './LoginForm.types';

/**
 * Component managing the user authentication log-in form flow
 */

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.auth);

    const isLoading = status === 'loading';
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    /**
     * Dispatches user credentials to verification store thunks and handles navigation loops.
     * @param data - Evaluated input values containing validated email and password strings
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
            onSubmit={(e) => {
                void handleSubmit(onSubmit)(e);
            }}
            footerText="New to Nosh?"
            footerLinkText="Create an account"
            footerLinkTo="/signup"
        >
            <FormFieldRow label="Email" htmlFor="email">
                <FormTextField<LoginFormData>
                    name="email"
                    control={control}
                    errors={errors}
                    isLoading={isLoading}
                />
            </FormFieldRow>

            <FormFieldRow label="Password" htmlFor="password">
                <FormPasswordField<LoginFormData>
                    name="password"
                    control={control}
                    errors={errors}
                    isLoading={isLoading}
                />
            </FormFieldRow>

            <FormFieldRow>
                <FormButton
                    type="submit"
                    fullWidth
                    loading={isLoading}
                    variant="contained"
                    disabled={isLoading}
                    endIcon={<East />}
                >
                    Log In
                </FormButton>
            </FormFieldRow>
        </AuthFormLayout>
    );
};
