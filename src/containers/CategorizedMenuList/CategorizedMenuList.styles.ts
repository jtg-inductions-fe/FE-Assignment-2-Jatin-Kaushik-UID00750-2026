import {
    Box,
    BoxProps,
    Divider,
    Stack,
    Typography,
    TypographyProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    gap: theme.spacing(5),
    marginBlock: theme.spacing(5),
}));

export const CategorySection = styled(Box)<BoxProps>(() => ({
    width: '100%',
}));

export const CategoryTitle = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(0.5),
        color: theme.palette.text.primary,
        textTransform: 'capitalize',
    }),
);

export const ItemCountText = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

export const SectionDivider = styled(Divider)(() => ({
    marginBottom: '1.5rem',
    borderBottomWidth: 2,
}));

export const CardsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: theme.spacing(3),
}));

export const CardItemFrame = styled(Box)(({ theme }) => ({
    width: '100%',

    [theme.breakpoints.up('md')]: {
        width: `calc((100% - ${theme.spacing(3)}) / 2)`,
    },
}));
