import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { UiButton } from '@components/UiButton';

export const SummaryContainer = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    gap: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius * 1.5,
}));

export const Row = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const TotalDivider = styled('hr')(({ theme }) => ({
    border: 'none',
    borderTop: `1px dashed ${theme.palette.divider}`,
    margin: theme.spacing(2, 0),
}));

export const CheckoutButton = styled(UiButton)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));
