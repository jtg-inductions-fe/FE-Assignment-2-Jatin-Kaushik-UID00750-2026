import { ButtonProps } from '@mui/material/Button';

import { StyledFormButton } from './FormButton.styles';

const FormButton = ({ children, ...props }: ButtonProps) => (
    <StyledFormButton {...props}>{children}</StyledFormButton>
);

export default FormButton;
