import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const ItemsContainer = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(3),
}));
