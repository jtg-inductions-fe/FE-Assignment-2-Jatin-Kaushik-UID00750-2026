import {
    CounterController,
    CounterText,
    StyledCounterButton,
} from './CounterButton.styles';
import { CounterButtonProps } from './CounterButton.types';

/**
 * A stepper control component with increment and decrement buttons.
 */
export const CounterButton = ({
    value,
    onIncrement,
    onDecrement,
}: CounterButtonProps) => (
    <CounterController>
        <StyledCounterButton onClick={onDecrement}>-</StyledCounterButton>
        <CounterText>{value}</CounterText>
        <StyledCounterButton onClick={onIncrement}>+</StyledCounterButton>
    </CounterController>
);
