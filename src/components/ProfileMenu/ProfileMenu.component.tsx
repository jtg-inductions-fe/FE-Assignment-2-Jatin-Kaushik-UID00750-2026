import React, { useState } from 'react';

import { Logout } from '@mui/icons-material';
import { Avatar, IconButton, ListItemIcon, Menu, Tooltip } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@hooks';
import { logout } from '@store/authSlice';

import {
    StyledEmail,
    StyledMenuItem,
    StyledName,
    StyledUserHeader,
} from './ProfileMenu.styles';

const ProfileMenu = () => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector((state) => state.auth);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        handleCloseMenu();
        dispatch(logout());
    };

    // Safe fallbacks to prevent runtime crashes if state syncs slowly
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
                    <Avatar
                        alt={userDisplayName}
                        sx={{
                            width: 40,
                            height: 40,
                            fontWeight: 600,
                            fontSize: '1.6rem',
                            backgroundColor: '#ffd700',
                        }}
                    >
                        {avatarLetter}
                    </Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="profile-menu"
                open={isMenuOpen}
                onClose={handleCloseMenu}
                onClick={handleCloseMenu}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            borderRadius: '12px',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                            mt: 1.5,
                            '&::before': {
                                // Small indicator arrow pointing to avatar button
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zindex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* 1. Header Segment displaying User Credentials */}
                <StyledUserHeader>
                    <StyledName variant="body1">{userDisplayName}</StyledName>
                    <StyledEmail variant="body2">{userEmail}</StyledEmail>
                </StyledUserHeader>

                {/* 2. Action Segment displaying Logout Button */}
                <StyledMenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <Logout fontSize="small" color="inherit" />
                    </ListItemIcon>
                    Logout
                </StyledMenuItem>
            </Menu>
        </>
    );
};

export default ProfileMenu;
