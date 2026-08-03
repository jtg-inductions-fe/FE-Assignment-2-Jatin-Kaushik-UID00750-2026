import React, { useState } from 'react';

import { Logout } from '@mui/icons-material';
import { IconButton, ListItemIcon, Tooltip } from '@mui/material';

import {
    StyledAvatar,
    StyledEmail,
    StyledMenu,
    StyledMenuHeader,
    StyledMenuItem,
    StyledName,
} from './ProfileMenu.styles';
import { ProfileMenuProps } from './ProfileMenu.types';

/**
 * Interactive user profile avatar and menu showing user details and logout action.
 * @param props - Component custom properties
 * @param props.userDisplayName - Active user profile username text
 * @param props.userEmail - Active user profile email text
 * @param props.onLogoutClick - Function to trigger logout action
 */

export const ProfileMenu = ({
    userDisplayName,
    userEmail,
    onLogoutClick,
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
            <Tooltip title="Account settings">
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

                <StyledMenuItem onClick={handleLogoutAction}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="error" />
                    </ListItemIcon>
                    Logout
                </StyledMenuItem>
            </StyledMenu>
        </>
    );
};
