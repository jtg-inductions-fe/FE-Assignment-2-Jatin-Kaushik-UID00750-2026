import { Box, styled, Typography } from '@mui/material';

import { UiButton } from '@components/UiButton';

export const CounterController = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    overflow: 'hidden',
}));

export const StyledCounterButton = styled(UiButton)(({ theme }) => ({
    minWidth: '3.2rem',
    padding: theme.spacing(0.5, 1),
}));

export const CounterText = styled(Typography)(({ theme }) => ({
    minWidth: '3.2rem',
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
}));
