import { CircularProgress } from '@mui/material';

import {
    AnimatedTypography,
    ContentWrapper,
    StyledBackdrop,
} from './FullScreenLoader.styles';
import { FullScreenLoaderProps } from './FullScreenLoader.types';

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
