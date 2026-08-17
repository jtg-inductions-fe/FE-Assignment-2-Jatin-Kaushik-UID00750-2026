import { Box, BoxProps, styled } from '@mui/material';

export const StyledDiscoveryPageHeader = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
}));
