import { Box, styled } from '@mui/material';

import { VEG_TYPES } from '@constant';
import { VegType } from '@types';

export const StyledVegIndicator = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'vegType',
})<{ vegType: VegType }>(({ theme, vegType }) => ({
    width: 16,
    height: 16,
    border: `2px solid ${vegType === VEG_TYPES.VEG ? theme.palette.success.main : theme.palette.error.main}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginBottom: theme.spacing(0.5),
    '&::after': {
        content: '""',
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor:
            vegType === VEG_TYPES.VEG
                ? theme.palette.success.main
                : theme.palette.error.main,
    },
}));
