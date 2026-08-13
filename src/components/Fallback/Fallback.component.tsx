import { Link as RouterLink } from 'react-router-dom';

import { UiButton } from '@components/UiButton/UiButton.component';

import {
    FallbackDescription,
    FallbackHeader,
    FallbackPageWrapper,
    FallbackStyledContainer,
    LargeErrorCode,
} from './Fallback.styles';
import { FallbackOptions } from './Fallback.types';

/**
 * Generic layout template used to display HTTP errors, empty state screens, and crashes.
 * Supports rendering buttons as interactive navigation links or click action handlers.
 */

export const Fallback = ({
    statusCode,
    title,
    description,
    buttonName,
    buttonAction,
    ButtonIcon,
    isLink = false,
    href = '',
}: FallbackOptions) => (
    <FallbackPageWrapper>
        <FallbackStyledContainer maxWidth="sm">
            <LargeErrorCode variant="h1">{statusCode}</LargeErrorCode>

            <FallbackHeader variant="h4">{title}</FallbackHeader>

            <FallbackDescription variant="body2">
                {description}
            </FallbackDescription>

            <UiButton
                variant="outlined"
                color="primary"
                startIcon={ButtonIcon ? <ButtonIcon /> : undefined}
                onClick={buttonAction}
                component={isLink ? RouterLink : 'button'}
                {...(isLink ? { to: href } : {})}
            >
                {buttonName}
            </UiButton>
        </FallbackStyledContainer>
    </FallbackPageWrapper>
);
