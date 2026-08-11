import { StyledStockField } from './StockField.styles';
import { StockFieldProps } from './StockField.types';

/**
 * Numeric input field for managing inventory stock values
 * Prevents negative values automatically.
 */

export const StockField = ({
    stock,
    disabled = false,
    onStockChange,
}: StockFieldProps) => (
    <StyledStockField
        label="Stock"
        type="number"
        disabled={disabled}
        size="small"
        value={stock}
        onChange={(e) =>
            onStockChange?.(Math.max(0, parseInt(e.target.value) || 0))
        }
    />
);
