import {
    CounterController,
    CounterText,
    StyledCounterButton,
} from './CounterButton.styles';
import { CounterButtonProps } from './CounterButton.types';

/**
 * A stepper control component with increment and decrement buttons.
 * @param value - the field input value
 * @param onIncrement - Increment button onClick handler
 * @param onDecrement - Decerement button onClick handler
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
