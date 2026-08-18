import { useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Storefront, WrongLocation } from '@mui/icons-material';

import { ConfirmDialog } from '@components/ConfirmDialog';
import { EmptyListIndicator } from '@components/EmptyListIndicator';
import {
    RestaurantCustomerCard,
    RestaurantOwnerCard,
} from '@components/RestaurantCard';
import { RestaurantCardSkeleton } from '@components/RestaurantCardSkeleton';
import { RESTAURANT_VEG_TYPES, USER_ROLES } from '@constant';
import {
    useAppDispatch,
    useAppSelector,
    useConfirmDialog,
    useRestaurantQueries,
    useToast,
} from '@hooks';
import {
    deleteRestaurant,
    fetchAllRestaurants,
    fetchMyRestaurants,
} from '@store/thunks/restaurantsThunk';
import { routeBuilders } from '@utils';
import { checkIsRestaurantClosed } from '@utils';

import { StyledRestaurantCardsList } from './RestaurantList.styles';

/**
 * Grid list that handles fetching, filtering, and displaying restaurants.
 * Dynamically switches between consumer layouts and management control flows based on user role.
 */
export const RestaurantList = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const [selectedIdToDelete, setSelectedIdToDelete] = useState<string | null>(
        null,
    );

    const { currentUser } = useAppSelector((state) => state.auth);
    const { status, list } = useAppSelector((state) => state.restaurants);
    const { isOpen, config, openConfirmDialog, closeConfirmDialog } =
        useConfirmDialog();
    const { localSearch, vegType } = useRestaurantQueries();

    const filteredRestaurants = useMemo(
        () =>
            list.filter((restaurant) => {
                // Apply text query match across name or cuisines
                const matchesSearch =
                    !localSearch.trim() ||
                    restaurant.name
                        .toLowerCase()
                        .includes(localSearch.toLowerCase()) ||
                    restaurant.cuisines.some((cuisine) =>
                        cuisine
                            .toLowerCase()
                            .includes(localSearch.toLowerCase()),
                    );

                // Apply dietary preference match
                const matchesVeg =
                    vegType === RESTAURANT_VEG_TYPES.ALL ||
                    restaurant.vegType === vegType;

                return matchesSearch && matchesVeg;
            }),
        [list, localSearch, vegType],
    );

    useEffect(() => {
        if (currentUser?.role === USER_ROLES.OWNER && currentUser.id) {
            void dispatch(fetchMyRestaurants(currentUser.id));
        } else {
            void dispatch(fetchAllRestaurants());
        }
    }, [dispatch, currentUser]);

    if (status === 'loading') {
        return (
            <StyledRestaurantCardsList>
                <RestaurantCardSkeleton />
                <RestaurantCardSkeleton />
            </StyledRestaurantCardsList>
        );
    }

    if (filteredRestaurants.length === 0) {
        return currentUser?.role === USER_ROLES.OWNER ? (
            <EmptyListIndicator
                title="No Restaurant Found"
                description="You haven't listed any restaurants yet. Create your first restaurant listing to begin receiving orders."
                icon={<Storefront />}
            />
        ) : (
            <EmptyListIndicator
                title="No Restaurants Found Nearby"
                description="We couldn't find any restaurant delivering to your location right now. Try changing your address."
                icon={<WrongLocation />}
            />
        );
    }

    const handleEditClicked = async (restaurantId: string) => {
        await navigate(routeBuilders.restaurantEdit(restaurantId));
    };

    const handleDeleteClicked = (restaurantId: string) => {
        setSelectedIdToDelete(restaurantId);
        openConfirmDialog({
            title: 'Delete this restaurant?',
            message:
                'This will permanently remove the restaurant profile, menu configurations, and incoming orders. This action cannot be undone.',
        });
    };

    const handleDeleteCancel = () => {
        closeConfirmDialog();
        setSelectedIdToDelete(null);
        toast({ message: 'Deletion cancelled', type: 'info' });
    };

    const handleDeleteConfirm = async () => {
        if (!selectedIdToDelete) return;

        closeConfirmDialog();
        try {
            await dispatch(deleteRestaurant(selectedIdToDelete)).unwrap();
            toast({
                message: 'Restaurant removed successfully',
                type: 'success',
            });
        } catch {
            toast({
                message: 'Failed to remove restaurant',
                type: 'error',
            });
        } finally {
            setSelectedIdToDelete(null);
        }
    };

    return (
        <>
            <StyledRestaurantCardsList>
                {filteredRestaurants.map((restaurant) =>
                    currentUser?.role === USER_ROLES.OWNER ? (
                        <RestaurantOwnerCard
                            key={restaurant.id}
                            id={restaurant.id}
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            vegType={restaurant.vegType}
                            imageUrl={restaurant.imageUrl}
                            isClosed={checkIsRestaurantClosed(
                                restaurant.operatingHours,
                            )}
                            onEdit={() =>
                                void handleEditClicked(restaurant?.id)
                            }
                            onDelete={() => handleDeleteClicked(restaurant?.id)}
                        />
                    ) : (
                        <RestaurantCustomerCard
                            key={restaurant.id}
                            id={restaurant.id}
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                            vegType={restaurant.vegType}
                            imageUrl={restaurant.imageUrl}
                            isClosed={checkIsRestaurantClosed(
                                restaurant.operatingHours,
                            )}
                        />
                    ),
                )}
            </StyledRestaurantCardsList>

            <ConfirmDialog
                open={isOpen}
                title={config.title}
                message={config.message}
                handleCancel={handleDeleteCancel}
                handleConfirm={() => void handleDeleteConfirm()}
            />
        </>
    );
};
