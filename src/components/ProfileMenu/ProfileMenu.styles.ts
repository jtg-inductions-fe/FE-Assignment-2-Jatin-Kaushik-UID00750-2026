import { LinkProps as RouterLinkProps } from 'react-router-dom';

import {
    alpha,
    Avatar,
    Menu,
    MenuItem,
    MenuItemProps,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material';

export const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        elevation: 0,
        overflow: 'visible',
        borderRadius: '12px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        marginTop: theme.spacing(1.5),
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            backgroundColor: theme.palette.background.paper,
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
}));

export const StyledMenuHeader = styled(MenuItem)(({ theme }) => ({
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    minWidth: '22rem',
    outline: 'none',
}));

export const StyledName = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    color: 'text.primary',
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(18),
    },
}));

export const StyledEmail = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(14),
    color: 'text.secondary',
    wordBreak: 'break-all',
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(16),
    },
}));

export const StyledMenuItem = styled(MenuItem)<
    MenuItemProps & Partial<RouterLinkProps>
>(({ theme }) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    transition: 'all 0.2s ease-in-out',
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.pxToRem(16),
    },
}));

export const StyledCriticalMenuItem = styled(StyledMenuItem)(({ theme }) => ({
    color: theme.palette.error.main,
    '&:hover': {
        backgroundColor: alpha(theme.palette.error.main, 0.1),
    },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
}));
