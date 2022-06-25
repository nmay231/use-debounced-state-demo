import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useDebouncedState } from "./useDebouncedState";

let renders1 = 0;
const DebouncedValue = () => {
    const [_state, setState] = useState("default");
    const [state] = useDebouncedValue(_state, 500);

    return (
        <>
            <label htmlFor="debounced-value">
                Controlled input (useDebouncedValue)
            </label>
            <input
                id="debounced-value"
                value={_state}
                onChange={(e) => setState(e.target.value)}
            />
            <p>Value: {state || "[empty string]"}</p>
            <p>Number of renders: {++renders1}</p>
        </>
    );
};

let renders2 = 0;
const DebouncedState = () => {
    const [state, setState] = useDebouncedState("default", 500);

    return (
        <>
            <label htmlFor="debounced-state">
                Uncontrolled input (useDebouncedState)
            </label>
            <input
                id="debounced-state"
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
            />
            <p>Value: {state || "[empty string]"}</p>
            <p>Number of renders: {++renders2}</p>
        </>
    );
};

export const App = () => {
    return (
        <div className="App">
            <div
                style={{
                    display: "grid",
                    width: "100vw",
                    height: "100vh",
                    padding: "30px",
                }}
            >
                <div style={{ gridArea: "1 / 1 / span 1 / span 1" }}>
                    <DebouncedValue />
                </div>
                <div style={{ gridArea: "1 / 2 / span 1 / span 1" }}>
                    <DebouncedState />
                </div>
            </div>
        </div>
    );
};
