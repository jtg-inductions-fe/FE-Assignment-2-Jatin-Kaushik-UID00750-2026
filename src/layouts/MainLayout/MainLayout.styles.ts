import { Box, BoxProps, styled } from '@mui/material';

export const AppContainer = styled(Box)<BoxProps>(({ theme }) => ({
    paddingInline: theme.spacing(4),
    maxWidth: '120rem',
    marginInline: 'auto',
}));
