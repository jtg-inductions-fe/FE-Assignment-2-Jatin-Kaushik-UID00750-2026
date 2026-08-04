import { PageHeader } from '@components/PageHeader/PageHeader.component';
import { UiButton } from '@components/UiButton/UiButton.component';
import { DiscoveryPageHeader } from '@containers/DiscoveryPageHeader/DiscoveryPageHeader';
import { RestaurantCardsList } from '@containers/RestaurantCardsList/RestaurantCardsList';

export const DiscoveryPage = () => (
    <div>
        <DiscoveryPageHeader />
        <PageHeader
            title="Discover Restaurants"
            subline="Discover restaurants near you"
            action={<UiButton variant="contained">Add new Restaurant</UiButton>}
        />
        <RestaurantCardsList />
    </div>
);
