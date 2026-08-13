import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { ButtonProps } from '@mui/material/Button';

import { StyledButton } from './UiButton.styles';

/**
 * Reusable generic button component.Forwards standard Material UI button properties down onto custom-styled base elements.
 */

export const UiButton = ({
    children,
    ...props
}: ButtonProps & Partial<RouterLinkProps>) => (
    <StyledButton {...props}>{children}</StyledButton>
);
