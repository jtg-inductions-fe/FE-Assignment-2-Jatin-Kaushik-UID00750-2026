import { Accordion, Box, Chip, Stepper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ORDER_STATUS } from '@constant';
import { OrderStatus } from '@types';

interface StatusIndicatorProps {
    ownerState: {
        status: OrderStatus;
    };
}

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
}));

export const SummaryContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(4),
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1.5fr 1fr 1.5fr 1fr',
    },
}));

export const DetailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    width: '100%',
}));

export const GridSection = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
    },
}));

export const InnerInfoBlock = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
}));

export const ItemRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `1px dashed ${theme.palette.divider}`,
    '&:last-child': {
        borderBottom: 'none',
        marginBottom: 0,
        paddingBottom: 0,
    },
}));

export const FinancialRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBlock: theme.spacing(1),
}));

export const ActionPanel = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    marginTop: theme.spacing(1),
    flexWrap: 'wrap',
}));

export const StatusChip = styled(Chip)<StatusIndicatorProps>(({
    theme,
    ownerState,
}) => {
    const mapping: Record<OrderStatus, { text: string }> = {
        [ORDER_STATUS.PENDING]: {
            text: theme.palette.warning.main,
        },
        [ORDER_STATUS.ACCEPTED]: {
            text: theme.palette.success.main,
        },
        [ORDER_STATUS.PREPARING]: {
            text: theme.palette.warning.main,
        },
        [ORDER_STATUS.OUT_FOR_DELIVERY]: {
            text: theme.palette.info.main,
        },
        [ORDER_STATUS.DELIVERED]: {
            text: theme.palette.success.dark,
        },
        [ORDER_STATUS.REJECTED]: {
            text: theme.palette.error.main,
        },
    };
    const colors = mapping[ownerState.status] || mapping.pending;
    return {
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'uppercase',
        color: colors.text,
        borderColor: colors.text,
    };
});

export const ResponsiveStyledStepper = styled(Stepper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(8),

    '& .MuiStepConnector-line': {
        borderTopWidth: 0,
    },

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 0,

        '& .MuiStepConnector-line': {
            borderLeftWidth: 0,
            borderTopWidth: 1,
        },
    },
}));
