import React, { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Logout } from '@mui/icons-material';
import { Divider, IconButton, ListItemIcon, Tooltip } from '@mui/material';

import {
    StyledAvatar,
    StyledCriticalMenuItem,
    StyledEmail,
    StyledMenu,
    StyledMenuHeader,
    StyledMenuItem,
    StyledName,
} from './ProfileMenu.styles';
import { ProfileMenuProps } from './ProfileMenu.types';

/**
 * Interactive user profile avatar and menu showing user details and logout action.
 */

export const ProfileMenu = ({
    userDisplayName,
    userEmail,
    onLogoutClick,
    menuItemConfig,
}: ProfileMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutAction = () => {
        handleCloseMenu();
        void onLogoutClick();
    };

    const avatarLetter = userDisplayName.charAt(0).toUpperCase();

    return (
        <>
            <Tooltip title="Profile">
                <IconButton
                    onClick={handleOpenMenu}
                    size="small"
                    aria-controls={isMenuOpen ? 'profile-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                >
                    <StyledAvatar alt={userDisplayName}>
                        {avatarLetter}
                    </StyledAvatar>
                </IconButton>
            </Tooltip>

            <StyledMenu
                anchorEl={anchorEl}
                id="profile-menu"
                open={isMenuOpen}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <StyledMenuHeader>
                    <StyledName>{userDisplayName}</StyledName>
                    <StyledEmail>{userEmail}</StyledEmail>
                </StyledMenuHeader>

                {menuItemConfig.map((item) => (
                    <StyledMenuItem
                        key={item.itemName}
                        component={RouterLink}
                        to={item.itemRoute}
                    >
                        <ListItemIcon>
                            <item.itemIcon fontSize="small" />
                        </ListItemIcon>
                        {item.itemName}
                    </StyledMenuItem>
                ))}
                <Divider />
                <StyledCriticalMenuItem onClick={handleLogoutAction}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="error" />
                    </ListItemIcon>
                    Logout
                </StyledCriticalMenuItem>
            </StyledMenu>
        </>
    );
};
