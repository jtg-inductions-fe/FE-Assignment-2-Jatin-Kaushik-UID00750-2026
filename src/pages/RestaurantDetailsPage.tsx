import { useParams } from 'react-router-dom';

export const RestaurantDetailsPage = () => {
    const params = useParams();
    return <div>RestaurantDetailsPage: {params.restaurantId}</div>;
};
