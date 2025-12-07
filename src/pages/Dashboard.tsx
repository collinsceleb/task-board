import SummaryCard from "../components/SummaryCard";
import ProjectTable from "../components/ProjectTable";

export default function Dashboard() {
  return (
    <div className="py-8 px-6 bg-brand-bg min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Project Overview Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard count={12} label="Active Projects" color="blue" />
        <SummaryCard count={5} label="Completed This Month" color="green" />
        <SummaryCard count={3} label="Projects Due Soon" color="red" />
      </div>

      <ProjectTable />
    </div>
  );
}
