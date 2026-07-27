import { useParams } from 'react-router-dom';

const RestaurantDetailsPage = () => {
    const params = useParams();
    return <div>RestaurantDetailsPage: {params.restaurantId}</div>;
};

export default RestaurantDetailsPage;
