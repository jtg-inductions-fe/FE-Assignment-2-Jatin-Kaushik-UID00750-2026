import { Box, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';

export const StyledRoleContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    width: '100%',
}));

export const StyledRoleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: theme.spacing(2),
}));

export const StyledRoleToggle = styled(ToggleButton)(({ theme }) => ({
    textTransform: 'none',
    fontSize: '1.6rem',
    borderColor: theme.palette.divider,
    color: theme.palette.primary.main,
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    gap: theme.spacing(2),

    '&.MuiToggleButtonGroup-lastButton': {
        borderLeft: `1px solid ${theme.palette.divider}`,
    },
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    },
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));
