import {
    StyledContent,
    StyledMediaSkeleton,
    StyledSkeletonCard,
    StyledTextSkeleton,
} from './RestaurantCardSkeleton.styles';

/**
 * A placeholder loading card for the RestaurantCard component
 * It uses animated wave patterns to show users that data is currently fetching or loading.
 */
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
