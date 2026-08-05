import { Storefront } from '@mui/icons-material';

import { EmptyListIndicator } from '@components/EmptyListIndicator';
import { RestaurantCard } from '@components/RestaurantCard';
import { RestaurantCardSkeleton } from '@components/RestaurantCardSkeleton';

import { StyledRestaurantCardsList } from './RestaurantCardsList.styles';

export const RestaurantCardsList = () => {
    const isLoading = false;
    const restaurantLength = 0;

    if (isLoading)
        return (
            <StyledRestaurantCardsList>
                <RestaurantCardSkeleton />
                <RestaurantCardSkeleton />
            </StyledRestaurantCardsList>
        );

    if (restaurantLength === 0)
        return (
            <EmptyListIndicator
                title="No Restaurant Found"
                description="You haven't listed any restaurants yet. Create your first restaurant listing to begin receiving orders."
                icon={<Storefront />}
            />
        );

    return (
        <StyledRestaurantCardsList>
            <RestaurantCard
                name="Example Restaurant"
                id="Res123"
                cuisines={['Italian', 'Mexican']}
                vegType="both"
                showQuickActions={true}
                imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/28/e2331a6d-2ef4-4288-9680-6dab02fa84ab_image1962fb60b6f11146b4abd683d63f265a2c.JPG"
                isClosed={false}
            />
            <RestaurantCard
                name="Example Restaurant"
                id="Res123"
                cuisines={[
                    'Italian',
                    'Mexican',
                    'North Indian',
                    'South Indian',
                ]}
                vegType="non-veg"
                showQuickActions={true}
                imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/28/e2331a6d-2ef4-4288-9680-6dab02fa84ab_image1962fb60b6f11146b4abd683d63f265a2c.JPG"
                isClosed={true}
            />
            <RestaurantCard
                name="Example Restaurant"
                id="Res123"
                cuisines={['Italian', 'Mexican']}
                vegType="both"
                imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/28/e2331a6d-2ef4-4288-9680-6dab02fa84ab_image1962fb60b6f11146b4abd683d63f265a2c.JPG"
                isClosed={false}
            />
            <RestaurantCard
                name="Example Restaurant"
                id="Res123"
                cuisines={['Italian', 'Mexican']}
                vegType="veg"
                imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/28/e2331a6d-2ef4-4288-9680-6dab02fa84ab_image1962fb60b6f11146b4abd683d63f265a2c.JPG"
                isClosed={true}
            />
        </StyledRestaurantCardsList>
    );
};
