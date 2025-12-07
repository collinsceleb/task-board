export interface UIState {
    isCreateProjectModalOpen: boolean;
    searchQuery: string;
}

export const InitialUIState: UIState = {
    isCreateProjectModalOpen: false,
    searchQuery: "",
}

export type UIAction =
    | { type: "OPEN_MODAL" }
    | { type: "CLOSE_MODAL" }
    | { type: "SET_SEARCH_QUERY"; payload: string };

export const uiReducer = (state: UIState = InitialUIState, action: UIAction): UIState => {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, isCreateProjectModalOpen: true };
        case "CLOSE_MODAL":
            return { ...state, isCreateProjectModalOpen: false };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
};