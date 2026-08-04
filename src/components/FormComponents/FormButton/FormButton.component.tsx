import { ButtonProps } from '@mui/material/Button';

import { StyledFormButton } from './FormButton.styles';

/**
 * Custom button for forms with core Material UI Button parameters.
 * @param props - Core Material UI Button properties
 * @param props.children - Label or layout nodes printed inside the button
 */

export const FormButton = ({ children, ...props }: ButtonProps) => (
    <StyledFormButton {...props}>{children}</StyledFormButton>
);
