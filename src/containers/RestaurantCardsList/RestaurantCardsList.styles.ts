import { styled } from '@mui/material';

export const StyledRestaurantCardsList = styled('section')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: theme.spacing(4),
    width: '100%',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(10),
    },
}));
