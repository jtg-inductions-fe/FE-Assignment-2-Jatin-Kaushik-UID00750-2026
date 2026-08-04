import { ComponentType } from 'react';

import { SvgIconProps } from '@mui/material';

export interface MenuItemConfig {
    itemName: string;
    itemRoute: string;
    itemIcon: ComponentType<SvgIconProps>;
}

export interface ProfileMenuProps {
    userDisplayName: string;
    userEmail: string;
    onLogoutClick: () => void | Promise<void>;
    menuItemConfig: Array<MenuItemConfig>;
}
