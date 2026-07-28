import { useParams } from 'react-router-dom';

export const EditRestaurantPage = () => {
    const params = useParams();
    return <div>EditRestaurantPage: {params.restaurantId}</div>;
};
