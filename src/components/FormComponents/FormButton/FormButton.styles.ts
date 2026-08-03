import { styled } from '@mui/material/styles';

import { UiButton } from '@components/UiButton/UiButton.component';

export const StyledFormButton = styled(UiButton)(({ theme }) => ({
    minHeight: '5.2rem',
    fontSize: theme.typography.pxToRem(16),
}));
