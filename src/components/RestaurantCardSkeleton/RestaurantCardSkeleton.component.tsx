import {
    StyledContent,
    StyledMediaSkeleton,
    StyledSkeletonCard,
    StyledTextSkeleton,
} from './RestaurantCardSkeleton.styles';

export const RestaurantCardSkeleton = () => (
    <StyledSkeletonCard>
        <StyledMediaSkeleton
            variant="rectangular"
            height={180}
            animation="wave"
        />

        <StyledContent>
            <StyledTextSkeleton
                variant="text"
                height={24}
                width="60%"
                animation="wave"
            />
            <StyledTextSkeleton
                variant="text"
                height={16}
                width="85%"
                animation="wave"
            />
        </StyledContent>
    </StyledSkeletonCard>
);
