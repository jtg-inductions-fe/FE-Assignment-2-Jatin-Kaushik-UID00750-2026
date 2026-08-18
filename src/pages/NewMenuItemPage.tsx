import { useParams } from 'react-router-dom';

import { MenuItemFormContainer } from '@containers/MenuItemForm';

/** Page component for creating a new menu item. */
export const NewMenuItemPage = () => {
    const { restaurantId } = useParams<{
        restaurantId: string;
    }>();
    return <MenuItemFormContainer restaurantId={restaurantId} />;
};
