import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { RestaurantBanner } from '@components/RestaurantBanner';
import { CustomerMenuList } from '@containers/CustomerMenuList';
import { OwnerMenuList } from '@containers/OwnerMenuList';
import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchMenuByRestaurant } from '@store/thunks/menuThunk';
import {
    fetchAllRestaurants,
    fetchMyRestaurants,
} from '@store/thunks/restaurantsThunk';
import { Restaurant } from '@types';
import { checkIsRestaurantClosed, routeBuilders } from '@utils';

/** Container component for displaying restaurant details and menu items.
 * @param restaurantId - Reference ID of the restaurant to fetch and display details for.
 */
export const RestaurantDetails = ({
    restaurantId,
}: {
    restaurantId: string;
}) => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const isOwner = currentUser?.role === 'owner';
    const dispatch = useAppDispatch();

    const { list, status } = useAppSelector((state) => state.restaurants);
    const navigate = useNavigate();

    const restaurantData = list.find(
        (res) => res.id === restaurantId,
    ) as Restaurant;

    useEffect(() => {
        if (isOwner && currentUser.id) {
            void dispatch(fetchMyRestaurants(currentUser.id))
                .unwrap()
                .then((restaurants) => {
                    const found = restaurants.find(
                        (r) => r.id === restaurantId,
                    );
                    if (!found) {
                        void navigate('/404', { replace: true });
                    }
                    void dispatch(fetchMenuByRestaurant(restaurantId));
                })
                .catch(() => {
                    void navigate('/404', { replace: true });
                });
        } else {
            void dispatch(fetchAllRestaurants())
                .unwrap()
                .then((restaurants) => {
                    const found = restaurants.find(
                        (r) => r.id === restaurantId,
                    );
                    if (!found) {
                        void navigate('/404', { replace: true });
                    }
                    void dispatch(fetchMenuByRestaurant(restaurantId));
                })
                .catch(() => {
                    void navigate('/404', { replace: true });
                });
        }
    }, [dispatch, currentUser, isOwner, navigate, restaurantId]);

    /** Handler for navigating to the edit restaurant page. */
    const handleOnEdit = async () => {
        if (!restaurantId) return;
        await navigate(routeBuilders.restaurantEdit(restaurantId) + '?step=2');
    };

    if (status === 'loading' || !restaurantData) {
        return <FullScreenLoader message="Loading Restaurant Details..." />;
    }

    return (
        <>
            <div>
                <RestaurantBanner
                    restaurant={restaurantData}
                    isClosed={checkIsRestaurantClosed(
                        restaurantData.operatingHours,
                    )}
                    {...(isOwner && {
                        onEditHours: () => void handleOnEdit(),
                    })}
                />
            </div>
            <div></div>
            {isOwner ? (
                <OwnerMenuList restaurantId={restaurantId} />
            ) : (
                <CustomerMenuList
                    isClosed={checkIsRestaurantClosed(
                        restaurantData.operatingHours,
                    )}
                />
            )}
        </>
    );
};
