import { useParams } from 'react-router-dom';

import { RestaurantFormContainer } from '@containers/RestaurantFormContainer';

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
