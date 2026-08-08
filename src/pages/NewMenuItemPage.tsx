import { useParams } from 'react-router-dom';

import { MenuFormContainer } from '@containers/MenuFormContainer/MenuFormContainer.container';

export const NewMenuItemPage = () => {
    const { restaurantId } = useParams<{
        restaurantId: string;
    }>();
    return <MenuFormContainer restaurantId={restaurantId} />;
};
