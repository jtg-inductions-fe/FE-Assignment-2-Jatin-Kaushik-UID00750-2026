import { CircularProgress } from '@mui/material';

import {
    AnimatedTypography,
    ContentWrapper,
    StyledBackdrop,
} from './FullScreenLoader.styles';
import { FullScreenLoaderProps } from './FullScreenLoader.types';

/**
 * Fullscreen overlay loader component with an animated spinner and optional text.
 * @param props - Component properties
 * @param props.open - Controls visibility of the backdrop loader
 * @param props.message - Optional text displayed below the loading spinner
 */

export const FullScreenLoader = ({
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
