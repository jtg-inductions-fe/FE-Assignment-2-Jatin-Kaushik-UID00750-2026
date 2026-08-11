import { ComponentType } from 'react';

import { SvgIconProps } from '@mui/material';

/** Configurations for profile menu items */
export interface MenuItemConfig {
    /** Name of the profile menu item */
    itemName: string;
    /** Route for the profile menu item */
    itemRoute: string;
    /** Icon for the profile menu item */
    itemIcon: ComponentType<SvgIconProps>;
}

/** Properties for ProfileMenu component */
export interface ProfileMenuProps {
    /** Active user profile username text */
    userDisplayName: string;
    /** Active user profile email text */
    userEmail: string;
    /** Function to trigger logout action */
    onLogoutClick: () => void | Promise<void>;
    /** Configurations for profile menu items */
    menuItemConfig: Array<MenuItemConfig>;
}
