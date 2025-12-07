import { useReducer } from "react";
import { InitialUIState } from "../../reducers/uiReducer";
import { uiReducer } from "../../reducers/uiReducer";
import { UIContext } from "./UIContext";


export const UIProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(uiReducer, InitialUIState)
    return (
        <UIContext.Provider value={{ state, dispatch }}>
            {children}
        </UIContext.Provider>
    )
}
