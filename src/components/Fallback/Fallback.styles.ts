import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FallbackPageWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
}));

export const FallbackStyledContainer = styled(Container)({
    textAlign: 'center',
});

export const LargeErrorCode = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(60),
    marginBottom: theme.spacing(2),
    opacity: 0.25,
    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(90),
    },
}));

export const FallbackHeader = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.5),
}));

export const FallbackDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(8),
}));
