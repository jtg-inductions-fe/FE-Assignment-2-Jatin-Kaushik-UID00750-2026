import { useNavigate, useParams } from 'react-router-dom';

import { RestaurantBanner } from '@components/RestaurantBanner';
import { UiButton } from '@components/UiButton';
import { CustomerMenuList } from '@containers/CustomerMenuList';
import { OwnerMenuList } from '@containers/OwnerMenuList';
import { useAppSelector } from '@hooks';
import { Restaurant } from '@types';
import { routeBuilders } from '@utils';

export const RestaurantDetailsPage = () => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const isOwner = currentUser?.role === 'owner';
    const params = useParams();
    const { list } = useAppSelector((state) => state.restaurants);
    const navigate = useNavigate();

    const restaurantData = list.find(
        (res) => res.id === params?.restaurantId,
    ) as Restaurant;
    const handleOnEdit = async () =>
        await navigate(routeBuilders.restaurantEdit(restaurantData?.id));

    return (
        <>
            <div>
                <RestaurantBanner
                    restaurant={restaurantData}
                    onEditHours={() => void handleOnEdit()}
                />
            </div>
            <div
                style={{
                    marginBlock: '2rem',
                }}
            >
                <UiButton variant="contained">Add Menu Item </UiButton>
            </div>
            {isOwner ? <OwnerMenuList /> : <CustomerMenuList />}
        </>
    );
};
