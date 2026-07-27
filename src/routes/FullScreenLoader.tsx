import {
    Backdrop,
    Box,
    CircularProgress,
    styled,
    Typography,
} from '@mui/material';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.drawer + 1, // Layers above standard sidebars and headers
    backgroundColor: theme.palette.background.default, // Elegant backdrop overlay dimming
    display: 'flex',
    flexDirection: 'column',
}));

const ContentWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const AnimatedTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(4),
    animation: 'pulse 1.5s ease-in-out infinite',
    '@keyframes pulse': {
        '0%, 100%': { opacity: 0.6 },
        '50%': { opacity: 1 },
    },
}));

interface FullScreenLoaderProps {
    open?: boolean;
    message?: string;
}

const FullScreenLoader = ({
    open = true,
    message = 'Loading...',
}: FullScreenLoaderProps) => (
    <StyledBackdrop open={open}>
        <ContentWrapper>
            <CircularProgress color="primary" size={50} thickness={4} />
            {message && (
                <AnimatedTypography variant="h6">{message}</AnimatedTypography>
            )}
        </ContentWrapper>
    </StyledBackdrop>
);
export default FullScreenLoader;
