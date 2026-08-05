import { Typography } from '@mui/material';

import {
    IconWrapper,
    IndicatorContainer,
    TextWrapper,
} from './EmptyListIndicator.styles';
import { EmptyListIndicatorProps } from './EmptyListIndicator.types';

/**
 * A visual indicator shown when a list layout has no data
 *
 * @param props - The component properties
 * @param props.title - The main bold heading text
 * @param props.description - Additional detail or instructions for the user
 * @param props.icon - An optional graphic element displayed above the text
 */

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
