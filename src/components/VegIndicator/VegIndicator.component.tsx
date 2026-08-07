import { VegType } from '@types';

import { StyledVegIndicator } from './VegIndicator.styles';

/**
 * An icon for representing veg or non-veg type
 * @param vegType - Defines veg or non-veg
 */
export const VegIndicator = ({ vegType }: { vegType: VegType }) => (
    <StyledVegIndicator vegType={vegType} />
);
