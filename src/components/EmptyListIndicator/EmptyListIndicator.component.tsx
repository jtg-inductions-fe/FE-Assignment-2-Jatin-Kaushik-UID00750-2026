import { Typography } from '@mui/material';

import {
    IconWrapper,
    IndicatorContainer,
    TextWrapper,
} from './EmptyListIndicator.styles';
import { EmptyListIndicatorProps } from './EmptyListIndicator.types';

export const EmptyListIndicator = ({
    title,
    description,
    icon,
}: EmptyListIndicatorProps) => (
    <IndicatorContainer role="region" aria-label="Empty layout notice status">
        {icon && <IconWrapper>{icon}</IconWrapper>}

        <TextWrapper>
            <Typography
                variant="h5"
                color="text.primary"
                component="h2"
                gutterBottom
            >
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {description}
            </Typography>
        </TextWrapper>
    </IndicatorContainer>
);
