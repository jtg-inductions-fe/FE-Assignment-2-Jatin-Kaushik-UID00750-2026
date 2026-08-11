import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { RestaurantBanner } from '@components/RestaurantBanner';
import { CustomerMenuList } from '@containers/CustomerMenuList';
import { OwnerMenuList } from '@containers/OwnerMenuList';
import { useAppDispatch, useAppSelector } from '@hooks';
import { fetchMenuByRestaurant } from '@store/thunks/menuThunk';
import { fetchRestaurantById } from '@store/thunks/restaurantsThunk';
import { checkIsRestaurantClosed, routeBuilders } from '@utils';

/** Container component for displaying restaurant details and menu items.
 */
export const RestaurantDetails = ({
    restaurantId,
}: {
    restaurantId: string;
}) => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const isOwner = currentUser?.role === 'owner';
    const dispatch = useAppDispatch();

    const { selectedRestaurant, status } = useAppSelector(
        (state) => state.restaurants,
    );
    const navigate = useNavigate();

    useEffect(() => {
        void dispatch(fetchRestaurantById(restaurantId))
            .unwrap()
            .then((restaurant) => {
                if (!restaurant) {
                    void navigate('/404', { replace: true });
                }
                void dispatch(fetchMenuByRestaurant(restaurantId));
            })
            .catch(() => {
                void navigate('/404', { replace: true });
            });
    }, [dispatch, navigate, restaurantId]);

    /** Handler for navigating to the edit restaurant page. */
    const handleOnEdit = async () => {
        if (!restaurantId) return;
        await navigate(routeBuilders.restaurantEdit(restaurantId) + '?step=2');
    };

    if (status === 'loading' || !selectedRestaurant) {
        return <FullScreenLoader message="Loading Restaurant Details..." />;
    }

    return (
        <>
            <div>
                <RestaurantBanner
                    restaurant={selectedRestaurant}
                    isClosed={checkIsRestaurantClosed(
                        selectedRestaurant.operatingHours,
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
                        selectedRestaurant.operatingHours,
                    )}
                />
            )}
        </>
    );
};
