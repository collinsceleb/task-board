import { createContext, type Dispatch } from "react";
import { InitialUIState, type UIAction, type UIState } from "../../reducers/uiReducer";

interface UIContextType {
    state: UIState;
    dispatch: Dispatch<UIAction>;
}

export const UIContext = createContext<UIContextType>({
    state: InitialUIState,
    dispatch: () => null
})