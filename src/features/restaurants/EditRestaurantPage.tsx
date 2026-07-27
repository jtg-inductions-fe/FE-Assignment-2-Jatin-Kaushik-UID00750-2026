import { useParams } from 'react-router-dom';

const EditRestaurantPage = () => {
    const params = useParams();
    return <div>EditRestaurantPage: {params.restaurantId}</div>;
};

export default EditRestaurantPage;
