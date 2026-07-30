import { Outlet } from 'react-router-dom';

import { Box, styled } from '@mui/material';

const AuthContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100dvh',
    padding: '1.6rem',
}));

export const AuthLayout = () => (
    <main>
        <AuthContainer>
            <Outlet />
        </AuthContainer>
    </main>
);
