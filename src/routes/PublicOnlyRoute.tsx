import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constant';

import FullScreenLoader from './FullScreenLoader';
import { useMockAuth } from '../mocks/hooks/useMockAuth';

const PublicOnlyRoute = () => {
    // Replace with actual Redux state selector later
    const { isAuthenticated, status } = useMockAuth();

    if (status === 'loading') return <FullScreenLoader message="Loading..." />;

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DISCOVERY} replace />;
    }

    return <Outlet />; // Renders Login / Signup page
};

export default PublicOnlyRoute;
