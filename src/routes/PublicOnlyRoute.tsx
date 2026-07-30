import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';
import { useAppSelector } from '@hooks';

export const PublicOnlyRoute = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />;
};
