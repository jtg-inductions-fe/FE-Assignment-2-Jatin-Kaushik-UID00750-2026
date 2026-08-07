import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'isAvailable',
})<{ isAvailable: boolean }>(({ theme, isAvailable }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    opacity: isAvailable ? 1 : 0.6,
    backgroundColor: theme.palette.background.paper,
    maxWidth: '50rem',
    width: '100%',
    border: `1px solid ${theme.palette.divider}`,
}));

export const InfoSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingRight: theme.spacing(2),
}));

export const ImageSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    position: 'relative',
}));

export const ItemName = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const ItemPrice = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
}));

export const ItemDescription = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
    color: theme.palette.text.disabled,
    fontSize: theme.typography.pxToRem(12),
    ...theme.mixins.lineClamp(2),
    [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.pxToRem(14),
    },
}));

export const ItemImage = styled('img', {
    shouldForwardProp: (prop) => prop !== 'isAvailable',
})<{ isAvailable: boolean }>(({ theme, isAvailable }) => ({
    width: 120,
    height: 120,
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    backgroundColor: theme.palette.grey[100],
    filter: isAvailable ? 'none' : 'grayscale(100%)',
}));

export const ChildrenWrapper = styled(Box)(() => ({
    position: 'absolute',
    bottom: -2,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
}));

export const ActionsWrapper = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
}));
