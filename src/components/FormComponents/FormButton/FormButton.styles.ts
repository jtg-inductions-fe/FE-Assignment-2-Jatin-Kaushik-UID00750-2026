import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFormButton = styled(Button)<ButtonProps>(({ theme }) => ({
    minHeight: '5.2rem',
    fontSize: theme.typography.pxToRem(16),
}));
