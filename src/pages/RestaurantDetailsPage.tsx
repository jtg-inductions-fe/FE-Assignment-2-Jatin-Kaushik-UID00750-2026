import { useParams } from 'react-router-dom';

import { RestaurantDetails } from '@containers/RestaurantDetails';

/** Page component for displaying restaurant details and menu items. */
export const RestaurantDetailsPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    return <RestaurantDetails restaurantId={restaurantId as string} />;
};
