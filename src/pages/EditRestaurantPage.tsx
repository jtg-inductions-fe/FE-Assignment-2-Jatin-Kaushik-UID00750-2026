import { useParams, useSearchParams } from 'react-router-dom';

import { RestaurantFormContainer } from '@containers/RestaurantFormContainer';

/**
 * Page component for editing an existing restaurant.
 * Extracts the restaurant ID from the URL and forwards it to the form container.
 */
export const EditRestaurantPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const [searchParams] = useSearchParams();
    const currentStep = parseInt(searchParams.get('step') || '0', 10);
    return (
        <>
            <RestaurantFormContainer
                restaurantId={restaurantId}
                initialStep={currentStep}
            />
        </>
    );
};
