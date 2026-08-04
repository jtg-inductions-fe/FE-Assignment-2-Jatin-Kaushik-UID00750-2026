import { Link as RouterLink } from 'react-router-dom';

import {
    Card,
    CardActions,
    CardMedia,
    CardMediaProps,
    Chip,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    maxWidth: '34.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: theme.transitions.create(['filter', 'box-shadow', 'transform']),
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[4],
    },
}));

export const CardActionLink = styled(RouterLink)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,

    '&:focus-visible': {
        outlineOffset: '-2px',
    },
});

export const ImageContainer = styled('div')<{ $isClosed: boolean }>(
    ({ $isClosed }) => ({
        position: 'relative',
        overflow: 'hidden',
        ...($isClosed && {
            '& img': {
                filter: 'grayscale(100%)',
                opacity: 0.6,
            },
        }),
    }),
);

export const StyledCardMedia = styled(CardMedia)<
    CardMediaProps & { alt?: string }
>(() => ({
    height: '19.4rem',
}));

export const StatusChip = styled(Chip)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
}));

export const DietChip = styled(Chip)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 2,
    backgroundColor: theme.palette.background.paper,
    fontWeight: theme.typography.fontWeightMedium,
}));

export const CuisinesTypography = styled(Typography)(({ theme }) => ({
    ...theme.mixins.lineClamp(1),
}));

/** Separate container layer ensuring buttons receive mouse down inputs cleanly */
export const InteractiveActionsZone = styled(CardActions)({
    position: 'relative',
    zIndex: 3,
    justifyContent: 'flex-end',
});
