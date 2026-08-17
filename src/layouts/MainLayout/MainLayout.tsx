import { Outlet } from 'react-router-dom';

import { AppHeader } from '@containers/AppHeader';

import { AppContainer } from './MainLayout.styles';

export const MainLayout = () => (
    <div>
        <AppHeader />
        <AppContainer component="main">
            <Outlet />
        </AppContainer>
    </div>
);
