import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { ButtonProps } from '@mui/material/Button';

import { StyledButton } from './UiButton.styles';

/**
 * Reusable generic button component.Forwards standard Material UI button properties down onto custom-styled base elements.
 * @param props - Custom button properties extending Material UI ButtonProps & React Router link props
 * @param props.children - Layout elements or label texts to print inside the button frame
 */

export const UiButton = ({
    children,
    ...props
}: ButtonProps & RouterLinkProps) => (
    <StyledButton {...props}>{children}</StyledButton>
);
