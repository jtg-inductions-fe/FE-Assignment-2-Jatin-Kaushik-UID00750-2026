import { StyledStockField } from './StockField.styles';
import { StockFieldProps } from './StockField.types';

/**
 * Numeric input field for managing inventory stock values
 * Prevents negative values automatically.
 * @param stock - The stock quantity value
 * @param disabled - The Not active or disabled state boolean
 * @param onStockChange - onChange handler for changes in stock value
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
