
interface SummaryCardProps {
    count: number;
    label: string;
    color: 'blue' | 'green' | 'red';
}

export default function SummaryCard({ count, label, color }: SummaryCardProps) {
    const bg = {
        blue: "bg-brand-light-blue text-brand-blue",
        green: "bg-brand-light-green text-green-600",
        red: "bg-brand-light-red text-red-600"
    }[color];

    return (
        <div className={`p-4 rounded-lg shadow-sm border border-brand-border ${bg}`}>
            <h2 className="text-3xl font-bold">{count}</h2>
            <p className="text-sm mt-1">{label}</p>
        </div>
    );
}
