import { DiscoveryPageHeader } from '@containers/DiscoveryPageHeader';
import { RestaurantCardsList } from '@containers/RestaurantCardsList';

/**
 * Page component for searching and browsing restaurants.
 * Renders the filter controls header and the dynamic restaurant listings grid.
 */
export const DiscoveryPage = () => (
    <div>
        <DiscoveryPageHeader />
        <RestaurantCardsList />
    </div>
);
