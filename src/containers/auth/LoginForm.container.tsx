import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { East } from '@mui/icons-material';
import { Alert, Box, Link, Typography } from '@mui/material';

import FormButton from '@components/FormButton/FormButton.component';
import FormPasswordField from '@components/FormPasswordField/FormPasswordField.component';
import FormTextField from '@components/FormTextField/FormTextField.component';
import { ROUTES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { clearAuthError } from '@store/slices/authSlice';
import { loginThunk } from '@store/thunks';

import {
    AuthFieldContainer,
    AuthFormContainer,
    AuthFormHeader,
    AuthFormPaper,
} from './authForm.styles';
import { LoginFormData } from './authForm.types';
import { loginSchema } from './authSchemas';

const LoginForm = () => {
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
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            await dispatch(
                loginThunk({ email: data.email, password: data.password }),
            ).unwrap();
            toast({ message: 'Login successful', type: 'success' });
            await navigate(ROUTES.DISCOVERY);
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
                        Welcome Back
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        color="textSecondary"
                        marginBlock="1rem"
                    >
                        Log in to get your food hot and fast
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
                    </AuthFieldContainer>
                </Box>
                <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                    marginBlock="1rem"
                >
                    New to Nosh?{' '}
                    <Link component={RouterLink} to="/signup">
                        Create an account
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

export default LoginForm;
