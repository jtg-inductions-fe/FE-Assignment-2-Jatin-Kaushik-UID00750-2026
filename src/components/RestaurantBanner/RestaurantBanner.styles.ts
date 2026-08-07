import { Box, Chip, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BannerContainer = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
}));

export const HeroImageWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '18rem',
    [theme.breakpoints.up('md')]: {
        height: '25rem',
    },
}));

export const BannerImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
});

export const FloatChip = styled(Chip)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    zIndex: 2,
    backgroundColor: theme.palette.background.paper,
    fontWeight: theme.typography.fontWeightBold,
    boxShadow: theme.shadows[1],
}));

export const DetailsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const HeaderRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
}));

export const TitleContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
});

export const MetadataGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),

    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1.5fr 1fr',
        gap: theme.spacing(6),
    },
}));

export const InfoColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

export const ScheduleHeaderBlock = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
}));

export const ScheduleList = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

export const ScheduleItem = styled('li')<{ $isClosed: boolean }>(
    ({ theme, $isClosed }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(0.5, 0),
        color: $isClosed
            ? theme.palette.text.disabled
            : theme.palette.text.primary,
    }),
);

export const ClosedText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
}));
