import { Link as RouterLink } from 'react-router-dom';

import UiButton from '@components/UiButton/UiButton.component';

import {
    FallbackDescription,
    FallbackHeader,
    FallbackPageWrapper,
    FallbackStyledContainer,
    LargeErrorCode,
} from './Fallback.styles';
import { FallbackOptions } from './Fallback.types';

const Fallback = ({
    statusCode = 404,
    title = '',
    description = '',
    buttonName = '',
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

export default Fallback;
