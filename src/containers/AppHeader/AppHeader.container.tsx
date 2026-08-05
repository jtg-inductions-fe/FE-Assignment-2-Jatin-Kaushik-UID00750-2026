import { Link as RouterLink } from 'react-router-dom';

import { CartBadge } from '@components/CartBadge';
import { ROUTES } from '@constant';
import { ProfileMenuContainer } from '@containers/ProfileMenuContainer';

import {
    AppHeaderContainer,
    AppHeaderWrapper,
    HeaderActions,
    LogoBox,
} from './AppHeader.styles';

/**
 * The top global navigation bar displayed across all application views
 * It consist of the core brand logo layout on the left and container utilities on the right
 */
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
