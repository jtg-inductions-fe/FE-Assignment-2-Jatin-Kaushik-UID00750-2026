/** Properties for StockField component
 * Represents stock value and onStockChange handler
 */
export interface StockFieldProps {
    stock: number;
    disabled?: boolean;
    onStockChange?: (newStock: number) => void;
}
