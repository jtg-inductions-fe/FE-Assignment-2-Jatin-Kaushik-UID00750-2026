import { Backdrop, Box, styled, Typography } from '@mui/material';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
}));

export const ContentWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const AnimatedTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(4),
    animation: 'pulse 1.5s ease-in-out infinite',
    '@keyframes pulse': {
        '0%, 100%': { opacity: 0.6 },
        '50%': { opacity: 1 },
    },
}));
