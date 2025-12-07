import { createContext, type Dispatch } from "react";
import { InitialProjectState, type ProjectState, type ProjectAction } from "../../reducers/projectReducer";

export interface ProjectContextType {
    state: ProjectState;
    dispatch: Dispatch<ProjectAction>;
}

export const ProjectContext = createContext<ProjectContextType>({
    state: InitialProjectState,
    dispatch: () => null
});
