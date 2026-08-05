import { useParams } from 'react-router-dom';

import { RestaurantFormContainer } from '@containers/RestaurantFormContainer/RestaurantFormContainer';

export const EditRestaurantPage = () => {
    const params = useParams();
    return (
        <>
            <div>EditRestaurantPage: {params.restaurantId}</div>
            <RestaurantFormContainer
                restaurantId={params.restaurantId as string}
            />
        </>
    );
};
