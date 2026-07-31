import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { East, Fastfood, Storefront } from '@mui/icons-material';
import { Alert, Box, Link, Typography } from '@mui/material';

import FormButton from '@components/FormButton/FormButton.component';
import FormPasswordField from '@components/FormPasswordField/FormPasswordField.component';
import FormTextField from '@components/FormTextField/FormTextField.component';
import RoleToggle from '@components/RoleToggle/RoleToggle.component';
import { RoleOptions } from '@components/RoleToggle/RoleToggle.types';
import { ROUTES, USER_ROLES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { clearAuthError } from '@store/slices/authSlice';
import { signupThunk } from '@store/thunks';

import {
    AuthFieldContainer,
    AuthFormContainer,
    AuthFormHeader,
    AuthFormPaper,
} from './authForm.styles';
import { SignupFormData } from './authForm.types';
import { signupSchema } from './authSchemas';

const rolesConfig: Array<RoleOptions> = [
    {
        value: USER_ROLES.CUSTOMER,
        label: 'Customer',
        icon: Fastfood,
    },
    {
        value: USER_ROLES.OWNER,
        label: 'Owner',
        icon: Storefront,
    },
];

const SignupForm = () => {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.auth);

    const isLoading = status === 'loading';
    const toast = useToast();
    const navigate = useNavigate();

    // Clear backend authentication errors when the component unmounts
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
            role: 'customer',
        },
    });

    const onSubmit = async (data: SignupFormData) => {
        try {
            await dispatch(
                signupThunk({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    role: data.role,
                }),
            ).unwrap();
            toast({
                message: 'Account created successfully! Please log in.',
                type: 'success',
            });
            await navigate(ROUTES.LOGIN);
        } catch {}
    };

    return (
        <AuthFormContainer>
            <AuthFormPaper>
                <AuthFormHeader>
                    <Box>
                        <img
                            src="/logo.png"
                            alt="Nosh logo"
                            width={80}
                            height={80}
                        />
                    </Box>
                    <Typography component="h1" variant="h2">
                        Create Account
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        color="textSecondary"
                        marginBlock="1rem"
                    >
                        Join us to get fresh meals delivered to your doorstep
                    </Typography>
                </AuthFormHeader>

                {/* Error Alert */}
                {error && <Alert severity="error">{error}</Alert>}

                <Box
                    component="form"
                    width="100%"
                    onSubmit={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                    noValidate
                >
                    <AuthFieldContainer>
                        <Typography component="label">Name</Typography>
                        {/* Name Input */}
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <FormTextField
                                    {...field}
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="name"
                                    disabled={isLoading}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                    </AuthFieldContainer>

                    <AuthFieldContainer>
                        <Typography component="label">Email</Typography>
                        {/* Email Input */}
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <FormTextField
                                    {...field}
                                    margin="dense"
                                    required
                                    fullWidth
                                    id="email"
                                    autoComplete="email"
                                    disabled={isLoading}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </AuthFieldContainer>

                    <AuthFieldContainer>
                        <Typography component="label">Password</Typography>

                        {/* Password Input */}
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <FormPasswordField
                                    {...field}
                                    id="password"
                                    disabled={isLoading}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            )}
                        />
                    </AuthFieldContainer>

                    <AuthFieldContainer>
                        {/* Role Input */}
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
                    </AuthFieldContainer>

                    <AuthFieldContainer>
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
                    </AuthFieldContainer>
                </Box>
                <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                    marginBlock="1rem"
                >
                    Already have an account?{' '}
                    <Link component={RouterLink} to="/login">
                        Log in
                    </Link>
                </Typography>
            </AuthFormPaper>
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
                textAlign="center"
            >
                By continuing, you agree to our{' '}
                <Link href="/">Terms of Service</Link> and{' '}
                <Link href="/">Privacy Policy</Link>
            </Typography>
        </AuthFormContainer>
    );
};

export default SignupForm;
