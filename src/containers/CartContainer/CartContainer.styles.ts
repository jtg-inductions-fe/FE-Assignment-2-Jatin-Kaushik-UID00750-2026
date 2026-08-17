import { styled } from '@mui/material';

export const StyledCartContainer = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(4),
        gridTemplateColumns: '1fr 1.2fr',
    },
}));
