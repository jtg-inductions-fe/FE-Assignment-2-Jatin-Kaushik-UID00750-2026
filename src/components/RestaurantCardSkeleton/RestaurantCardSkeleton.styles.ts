import { Card, CardContent, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSkeletonCard = styled(Card)(({ theme }) => ({
    maxWidth: '34.5rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[1],
}));

export const StyledMediaSkeleton = styled(Skeleton)({
    width: '100%',
});

export const StyledContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
}));

export const StyledTextSkeleton = styled(Skeleton)({
    width: '100%',
});
