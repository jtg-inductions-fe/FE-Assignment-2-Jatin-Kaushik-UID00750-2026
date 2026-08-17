import { useEffect } from 'react';

import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { East } from '@mui/icons-material';

import {
    FormButton,
    FormFieldRow,
    FormPasswordField,
    FormTextField,
} from '@components/FormComponents';
import { RoleToggle } from '@components/RoleToggle';
import { ROUTES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { AuthFormLayout } from '@layouts';
import { clearAuthError } from '@store/slices/authSlice';
import { signupThunk } from '@store/thunks';

import { rolesConfig } from './SignupForm.config';
import {
    defaultSignupFormValues,
    SIGNUP_FIELD_NAMES,
} from './SignupForm.constants';
import { signupSchema } from './SignupForm.schema';
import { SignupFormData } from './SignupForm.types';

/**
 * Component managing the user account registration form flow.
 */

export const SignupForm = () => {
    const dispatch = useAppDispatch();
    const { error } = useAppSelector((state) => state.auth);
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const methods = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        defaultValues: defaultSignupFormValues,
    });

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    /**
     * Submits registration credentials to the auth store and handles post-signup navigation.
     */

    const onSubmit = async (data: SignupFormData) => {
        try {
            await dispatch(signupThunk(data)).unwrap();
            toast({
                message: 'Account created successfully! Please log in.',
                type: 'success',
            });
            void navigate(ROUTES.LOGIN);
        } catch {
            toast({
                message: 'Unexpected error occurred.',
                type: 'error',
            });
        }
    };

    return (
        <AuthFormLayout
            title="Create Account"
            subtitle="Join us to get fresh meals delivered to your doorstep"
            error={error}
            footerText="Already have an account?"
            footerLinkText="Log in"
            footerLinkTo="/login"
        >
            <FormProvider {...methods}>
                <form
                    onSubmit={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                    noValidate
                >
                    <FormFieldRow
                        label="Name"
                        htmlFor={SIGNUP_FIELD_NAMES.NAME}
                    >
                        <FormTextField name={SIGNUP_FIELD_NAMES.NAME} />
                    </FormFieldRow>

                    <FormFieldRow
                        label="Email"
                        htmlFor={SIGNUP_FIELD_NAMES.EMAIL}
                    >
                        <FormTextField name={SIGNUP_FIELD_NAMES.EMAIL} />
                    </FormFieldRow>

                    <FormFieldRow
                        label="Password"
                        htmlFor={SIGNUP_FIELD_NAMES.PASSWORD}
                    >
                        <FormPasswordField name={SIGNUP_FIELD_NAMES.PASSWORD} />
                    </FormFieldRow>

                    <FormFieldRow>
                        <Controller
                            name={SIGNUP_FIELD_NAMES.ROLE}
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <RoleToggle
                                    roles={rolesConfig}
                                    value={value}
                                    onChange={onChange}
                                    isLoading={isSubmitting}
                                />
                            )}
                        />
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
                            Sign up
                        </FormButton>
                    </FormFieldRow>
                </form>
            </FormProvider>
        </AuthFormLayout>
    );
};
