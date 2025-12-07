import { useReducer } from "react";
import { InitialProjectState, projectReducer } from "../../reducers/projectReducer";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(projectReducer, InitialProjectState)
    return (
        <ProjectContext.Provider value={{ state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    )
}
