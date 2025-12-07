import type { Project } from "../reducers/projectReducer";

interface ProjectRowProps {
    project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
    return (
        <>
            <tr className="border-b border-brand-border">
                <td className="p-4">{project.name}</td>

                <td className="p-4">
                    <span className="
          px-3 py-1 rounded text-sm
          bg-brand-light-blue text-brand-blue
        ">
                        {project.status}
                    </span>
                </td>

                <td className="p-4 w-64">
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{project.progress}%</span>
                        <div className="w-full h-2 bg-brand-border rounded">
                            <div
                                className="bg-brand-blue h-full rounded"
                                style={{ width: `${project.progress}%` }}
                            ></div>
                        </div>
                    </div>
                </td>

                <td className="p-4">
                    <div className="flex -space-x-2">
                        {project.team.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                        ))}
                    </div>
                </td>

                <td className="p-4">{project.dueDate}</td>

                <td className="p-4">
                    <button className="px-4 py-2 bg-brand-blue text-white rounded-lg">
                        View Board
                    </button>
                </td>
            </tr>
        </>
    );
}
