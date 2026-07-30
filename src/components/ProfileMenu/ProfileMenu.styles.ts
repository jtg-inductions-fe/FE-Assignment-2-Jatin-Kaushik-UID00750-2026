import { Box, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material';

export const StyledUserHeader = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    minWidth: '22rem',
    outline: 'none',
}));

export const StyledName = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: '1.6rem',
    color: 'text.primary',
    lineHeight: 1.2,
}));

export const StyledEmail = styled(Typography)(() => ({
    fontSize: '1.4rem',
    color: 'text.secondary',
    wordBreak: 'break-all',
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    fontSize: '1.5rem',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.error,
        color: theme.palette.error.main,
    },
}));
