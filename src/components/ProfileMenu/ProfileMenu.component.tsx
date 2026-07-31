import React, { useState } from 'react';

import { Logout } from '@mui/icons-material';
import { IconButton, ListItemIcon, Tooltip } from '@mui/material';

import { useAppDispatch, useAppSelector, useConfirm, useToast } from '@hooks';
import { logout } from '@store/slices/authSlice';

import {
    StyledAvatar,
    StyledEmail,
    StyledMenu,
    StyledMenuHeader,
    StyledMenuItem,
    StyledName,
} from './ProfileMenu.styles';

const ProfileMenu = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const confirm = useConfirm();
    const toast = useToast();

    const isMenuOpen = Boolean(anchorEl);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = async () => {
        handleCloseMenu();
        const isConfirmed = await confirm({
            title: 'Are you sure you want to log out?',
            message:
                'You will need to sign in again with your credentials to access your account.',
        });

        if (!isConfirmed) {
            toast({ message: 'Stayed signed in', type: 'info' });
            return;
        }

        try {
            dispatch(logout());
            toast({ message: 'Successfully signed out', type: 'success' });
        } catch {
            toast({ message: 'Log out failed', type: 'error' });
        }
    };

    const userDisplayName = currentUser?.name || 'User';
    const userEmail = currentUser?.email || '';
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

                <StyledMenuItem onClick={() => void handleLogoutClick()}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="error" />
                    </ListItemIcon>
                    Logout
                </StyledMenuItem>
            </StyledMenu>
        </>
    );
};

export default ProfileMenu;
