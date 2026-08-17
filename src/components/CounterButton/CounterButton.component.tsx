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
    disabled,
    onIncrement,
    onDecrement,
}: CounterButtonProps) => (
    <CounterController>
        <StyledCounterButton disabled={disabled} onClick={onDecrement}>
            -
        </StyledCounterButton>
        <CounterText>{value}</CounterText>
        <StyledCounterButton disabled={disabled} onClick={onIncrement}>
            +
        </StyledCounterButton>
    </CounterController>
);
