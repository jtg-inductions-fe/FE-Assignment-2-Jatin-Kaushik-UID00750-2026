/** Properties of CounterButton for stepper control */
export interface CounterButtonProps {
    value: number;
    disabled?: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
}
