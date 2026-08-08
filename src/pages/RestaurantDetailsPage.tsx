import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { RestaurantBanner } from '@components/RestaurantBanner';
import { CustomerMenuList } from '@containers/CustomerMenuList';
import { OwnerMenuList } from '@containers/OwnerMenuList';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
    fetchAllRestaurants,
    fetchMyRestaurants,
} from '@store/thunks/restaurantsThunk';
import { Restaurant } from '@types';
import { routeBuilders } from '@utils';

export const RestaurantDetailsPage = () => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const isOwner = currentUser?.role === 'owner';
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const dispatch = useAppDispatch();

    const { list, status } = useAppSelector((state) => state.restaurants);
    const navigate = useNavigate();

    const restaurantData = list.find(
        (res) => res.id === restaurantId,
    ) as Restaurant;

    useEffect(() => {
        if (list.length !== 0) {
            return;
        }
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
                })
                .catch(() => {
                    void navigate('/404', { replace: true });
                });
        }
    }, [dispatch, currentUser, isOwner, list, navigate, restaurantId]);

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
                    {...(isOwner && {
                        onEditHours: () => void handleOnEdit(),
                    })}
                />
            </div>
            <div></div>
            {isOwner ? (
                <OwnerMenuList restaurantId={restaurantId as string} />
            ) : (
                <CustomerMenuList />
            )}
        </>
    );
};
