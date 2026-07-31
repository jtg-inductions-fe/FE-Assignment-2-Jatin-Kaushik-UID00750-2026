import { Link as RouterLink } from 'react-router-dom';

import { Alert, Box, Link, Typography } from '@mui/material';

import {
    AuthFormContainer,
    AuthFormHeader,
    AuthFormPaper,
} from './AuthFormLayout.styles';
import { AuthFormLayoutProps } from './AuthFormLayout.types';

export const AuthFormLayout = ({
    title,
    subtitle,
    error,
    onSubmit,
    footerText,
    footerLinkText,
    footerLinkTo,
    children,
}: AuthFormLayoutProps) => (
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
                    {title}
                </Typography>
                <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                    marginBlock="1rem"
                >
                    {subtitle}
                </Typography>
            </AuthFormHeader>

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" width="100%" onSubmit={onSubmit} noValidate>
                {children}
            </Box>

            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
                marginBlock="1rem"
            >
                {footerText}{' '}
                <Link component={RouterLink} to={footerLinkTo}>
                    {footerLinkText}
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
