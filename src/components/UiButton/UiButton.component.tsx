import { ButtonProps } from '@mui/material/Button';

import { StyledButton } from './UiButton.styles';

const UiButton = ({ children, ...props }: ButtonProps) => (
    <StyledButton {...props}>{children}</StyledButton>
);

export default UiButton;
