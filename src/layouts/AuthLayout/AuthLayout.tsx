import { Outlet } from 'react-router-dom';

import { AuthContainer } from './AuthLayout.styles';

export const AuthLayout = () => (
    <main>
        <AuthContainer>
            <Outlet />
        </AuthContainer>
    </main>
);
