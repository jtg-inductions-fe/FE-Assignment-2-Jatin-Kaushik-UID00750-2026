import { useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { East } from '@mui/icons-material';
import { Alert, Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import FormButton from '@components/FormButton/FormButton.component';
import FormPasswordField from '@components/FormPasswordField/FormPasswordField.component';
import FormTextField from '@components/FormTextField/FormTextField.component';
import { ROUTES } from '@constant';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { clearAuthError, loginThunk } from '@store/authSlice';

const loginSchema = yup
    .object({
        email: yup
            .string()
            .required('Email is required')
            .email('Enter a valid email address'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long'),
    })
    .required();

type LoginFormData = yup.InferType<typeof loginSchema>;

const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    maxWidth: '60rem',
    marginInline: 'auto',
}));

const FormPaper = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(10)} ${theme.spacing(8)}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
}));

const FieldContainer = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(2),
    width: '100%',
}));

const FormHeader = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
    textAlign: 'center',
}));

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
        <FormContainer>
            <FormPaper>
                <FormHeader>
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
                </FormHeader>

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
                    <FieldContainer>
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
                    </FieldContainer>

                    <FieldContainer>
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
                    </FieldContainer>
                    <FieldContainer>
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
                    </FieldContainer>
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
            </FormPaper>
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
        </FormContainer>
    );
};

export default LoginForm;
