import { styled, Typography } from '@mui/material';

export const OutOfStockBadge = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightBold,
    textWrap: 'nowrap',
    textTransform: 'uppercase',
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.common.white,
}));
