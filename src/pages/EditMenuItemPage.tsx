import { useParams } from 'react-router-dom';

import { MenuItemFormContainer } from '@containers/MenuItemFormContainer';

/** Page component for editing a menu item. */
export const EditMenuItemPage = () => {
    const { restaurantId, menuItemId } = useParams<{
        restaurantId: string;
        menuItemId: string;
    }>();
    return (
        <MenuItemFormContainer
            restaurantId={restaurantId}
            menuItemId={menuItemId}
        />
    );
};
