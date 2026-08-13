import { ButtonProps } from '@mui/material/Button';

import { StyledFormButton } from './FormButton.styles';

/**
 * Custom button for forms with core Material UI Button parameters.
 */

export const FormButton = ({ children, ...props }: ButtonProps) => (
    <StyledFormButton {...props}>{children}</StyledFormButton>
);
