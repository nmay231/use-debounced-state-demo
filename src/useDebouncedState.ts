import { useState } from "react";

export const useDebouncedState = <T = number>(
    _default: T,
    wait: number
): readonly [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState(_default);

    let id: any;
    return [
        state,

        // For now, let's ignore the complexity of relative changes when value = (oldvalue) => newValue
        (value) => {
            clearTimeout(id);
            id = setTimeout(() => setState(value), wait);
        },
    ];
};
