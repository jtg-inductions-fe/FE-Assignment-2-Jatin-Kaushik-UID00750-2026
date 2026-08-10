import { useParams } from 'react-router-dom';

import { MenuFormContainer } from '@containers/MenuFormContainer/MenuFormContainer.container';

/** Page component for creating a new menu item. */
export const NewMenuItemPage = () => {
    const { restaurantId } = useParams<{
        restaurantId: string;
    }>();
    return <MenuFormContainer restaurantId={restaurantId} />;
};
