import { useParams, useSearchParams } from 'react-router-dom';

import { EditRestaurantForm } from '@containers/RestaurantForms';

/**
 * Page component for editing an existing restaurant.
 * Extracts the restaurant ID from the URL and forwards it to the form container.
 */
export const EditRestaurantPage = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const [searchParams] = useSearchParams();
    const parsedStep = parseInt(searchParams.get('step') || '0', 10);
    const currentStep = isNaN(parsedStep) || parsedStep < 0 ? 0 : parsedStep;
    return (
        <>
            <EditRestaurantForm
                restaurantId={restaurantId as string}
                initialStep={currentStep}
            />
        </>
    );
};
