import { TextFieldProps } from '@mui/material';

import { StyledTextField } from './FormTextField.styles';

const FormTextField = ({ children, ...props }: TextFieldProps) => (
    <StyledTextField {...props}>{children}</StyledTextField>
);

export default FormTextField;
