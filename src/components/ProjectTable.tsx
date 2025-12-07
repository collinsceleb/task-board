import { useContext } from "react";
import ProjectRow from "./ProjectRow";
import { ProjectContext } from "../context/project/ProjectContext";

export default function ProjectTable() {
  const { state } = useContext(ProjectContext);

  return (
    <>
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Project List</h3>
        <button className="px-4 py-2 bg-brand-blue text-white rounded-lg">
          Create New Project
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-brand-light-text text-sm border-b border-brand-border">
            <th className="p-4">Project Name</th>
            <th className="p-4">Status</th>
            <th className="p-4">Progress</th>
            <th className="p-4">Team</th>
            <th className="p-4">Due Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {state.projects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
