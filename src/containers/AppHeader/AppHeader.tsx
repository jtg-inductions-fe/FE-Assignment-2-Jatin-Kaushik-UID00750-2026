import { Link as RouterLink } from 'react-router-dom';

import { CartBadge } from '@components/CartBadge/CartBadge.component';
import { ROUTES } from '@constant';
import { ProfileMenuContainer } from '@containers/ProfileMenuContainer/ProfileMenuContainer';

import {
    AppHeaderContainer,
    AppHeaderWrapper,
    HeaderActions,
    LogoBox,
} from './AppHeader.styles';

export const AppHeader = () => (
    <AppHeaderContainer component="header">
        <AppHeaderWrapper>
            <LogoBox component={RouterLink} to={ROUTES.DISCOVERY}>
                <img src="/logo.png" alt="Nosh logo" width={48} height={48} />
                Nosh
            </LogoBox>
            <HeaderActions>
                <CartBadge count={2} />
                <ProfileMenuContainer />
            </HeaderActions>
        </AppHeaderWrapper>
    </AppHeaderContainer>
);
