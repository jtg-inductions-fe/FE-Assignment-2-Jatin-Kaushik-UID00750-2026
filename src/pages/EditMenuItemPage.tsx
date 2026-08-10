import { useParams } from 'react-router-dom';

import { MenuFormContainer } from '@containers/MenuFormContainer/MenuFormContainer.container';

/** Page component for editing a menu item. */
export const EditMenuItemPage = () => {
    const { restaurantId, menuItemId } = useParams<{
        restaurantId: string;
        menuItemId: string;
    }>();
    return (
        <MenuFormContainer
            restaurantId={restaurantId}
            menuItemId={menuItemId}
        />
    );
};
