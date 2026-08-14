import { BoxProps } from '@mui/material';

import { VegType } from '@types';

import { StyledVegIndicator } from './VegTypeIndicator.styles';

/**
 * An icon for representing veg or non-veg type
 */
export const VegIndicator = ({
    vegType,
    ...props
}: {
    vegType: VegType;
    props?: BoxProps;
}) => <StyledVegIndicator vegType={vegType} {...props} />;
