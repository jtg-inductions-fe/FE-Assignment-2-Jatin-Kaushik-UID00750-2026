import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: theme.shape.borderRadius * 1.5,
}));

export const ImageContainer = styled(Box)({
    width: 80,
    height: 80,
    flexShrink: 0,
    borderRadius: 8,
    overflow: 'hidden',
});

export const ItemImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginInline: theme.spacing(3),
}));

export const ItemName = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    ...theme.mixins.lineClamp(1),
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(22),
    },
}));

export const ItemPrice = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5),
}));

export const ActionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'center',
    gap: theme.spacing(1),
    justifyContent: 'space-between',
    height: '100%',
}));
