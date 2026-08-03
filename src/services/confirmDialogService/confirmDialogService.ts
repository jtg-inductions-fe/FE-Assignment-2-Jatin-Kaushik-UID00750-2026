let resolvePointer: ((value: boolean) => void) | null = null;

export const setConfirmResolve = (resolve: (value: boolean) => void) => {
    resolvePointer = resolve;
};

export const getConfirmResolve = () => resolvePointer;

export const clearConfirmResolve = () => {
    resolvePointer = null;
};
