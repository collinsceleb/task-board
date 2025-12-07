export interface Project {
    id: number;
    name: string;
    description: string;
    status: string;
    progress: number;
    team: string[];
    dueDate: string;
}

export interface ProjectState {
    projects: Project[];
}

export const InitialProjectState: ProjectState = {
    projects: [
        {
            id: 1,
            name: "Project 1",
            description: "Description 1",
            status: "In Progress",
            progress: 80,
            team: [
                "/avatar1.png",
                "/avatar2.png",
                "/avatar3.png"
            ],
            dueDate: "2023-01-01",
        }
    ]
};

export type ProjectAction =
    | { type: "ADD_PROJECT"; payload: Project };

export const projectReducer = (state: ProjectState, action: ProjectAction): ProjectState => {
    switch (action.type) {
        case "ADD_PROJECT":
            return { ...state, projects: [...state.projects, action.payload] };
        default:
            return state;
    }
};
