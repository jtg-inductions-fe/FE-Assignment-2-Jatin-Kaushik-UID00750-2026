import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { East, Fastfood, Storefront } from '@mui/icons-material';

import FormButton from '@components/FormComponents/FormButton/FormButton.component';
import { FormFieldRow } from '@components/FormComponents/FormFieldRow/FormFieldRow.component';
import FormPasswordField from '@components/FormComponents/FormPasswordField/FormPasswordField.component';
import FormTextField from '@components/FormComponents/FormTextField/FormTextField.component';
import RoleToggle from '@components/RoleToggle/RoleToggle.component';
import { RoleOptions } from '@components/RoleToggle/RoleToggle.types';
import { ASYNC_STATUS, ROUTES, USER_ROLES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { AuthFormLayout } from '@layouts';
import { clearAuthError } from '@store/slices/authSlice';
import { signupThunk } from '@store/thunks';

import { signupSchema } from './SignupForm.schema';
import { SignupFormData } from './SignupForm.types';

const rolesConfig: Array<RoleOptions> = [
    { value: USER_ROLES.CUSTOMER, label: 'Customer', icon: Fastfood },
    { value: USER_ROLES.OWNER, label: 'Owner', icon: Storefront },
];

const SignupForm = () => {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.auth);
    const isLoading = status === ASYNC_STATUS.LOADING;
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAuthError());
    }, [dispatch]);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            role: USER_ROLES.CUSTOMER,
        },
    });

    const onSubmit = async (data: SignupFormData) => {
        try {
            await dispatch(signupThunk(data)).unwrap();
            toast({
                message: 'Account created successfully! Please log in.',
                type: 'success',
            });
            void navigate(ROUTES.LOGIN);
        } catch {}
    };

    return (
        <AuthFormLayout
            title="Create Account"
            subtitle="Join us to get fresh meals delivered to your doorstep"
            error={error}
            onSubmit={(e) => void handleSubmit(onSubmit)(e)}
            footerText="Already have an account?"
            footerLinkText="Log in"
            footerLinkTo="/login"
        >
            <FormFieldRow label="Name" htmlFor="name">
                <FormTextField<SignupFormData>
                    name="name"
                    control={control}
                    errors={errors}
                    isLoading={isLoading}
                />
            </FormFieldRow>

            <FormFieldRow label="Email" htmlFor="email">
                <FormTextField<SignupFormData>
                    name="email"
                    control={control}
                    errors={errors}
                    isLoading={isLoading}
                />
            </FormFieldRow>

            <FormFieldRow label="Password" htmlFor="password">
                <FormPasswordField<SignupFormData>
                    name="password"
                    control={control}
                    errors={errors}
                    isLoading={isLoading}
                />
            </FormFieldRow>

            <FormFieldRow>
                <Controller
                    name="role"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <RoleToggle
                            roles={rolesConfig}
                            value={value}
                            onChange={onChange}
                            isLoading={isLoading}
                        />
                    )}
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
                    Sign up
                </FormButton>
            </FormFieldRow>
        </AuthFormLayout>
    );
};

export default SignupForm;
