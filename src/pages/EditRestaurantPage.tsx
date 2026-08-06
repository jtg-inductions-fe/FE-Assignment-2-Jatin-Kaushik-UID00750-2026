import { useParams } from 'react-router-dom';

import { RestaurantFormContainer } from '@containers/RestaurantFormContainer';

/**
 * Page component for editing an existing restaurant.
 * Extracts the restaurant ID from the URL and forwards it to the form container.
 */
export const EditRestaurantPage = () => {
    const params = useParams();
    return (
        <>
            <RestaurantFormContainer
                restaurantId={params.restaurantId as string}
            />
        </>
    );
};
