import { Navigate, Outlet, useLocation } from 'react-router-dom';

import FullScreenLoader from '@components/FullScreenLoader/FullScreenLoader.component';
import { ROUTES } from '@constant';
import { useAppSelector } from '@hooks';

export const ProtectedRoute = () => {
    const { isAuthenticated, status } = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
