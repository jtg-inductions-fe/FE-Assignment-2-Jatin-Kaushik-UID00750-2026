import { Link as RouterLink } from 'react-router-dom';

import { PageHeader } from '@components/PageHeader/PageHeader.component';
import { UiButton } from '@components/UiButton/UiButton.component';
import { ROUTES } from '@constant';
import { DiscoveryPageHeader } from '@containers/DiscoveryPageHeader/DiscoveryPageHeader';
import { RestaurantCardsList } from '@containers/RestaurantCardsList/RestaurantCardsList';

export const DiscoveryPage = () => (
    <div>
        <DiscoveryPageHeader />
        <PageHeader
            title="Discover Restaurants"
            subline="Discover restaurants near you"
            action={
                <UiButton
                    variant="contained"
                    component={RouterLink}
                    to={ROUTES.RESTAURANT_NEW}
                >
                    Add new Restaurant
                </UiButton>
            }
        />
        <RestaurantCardsList />
    </div>
);
