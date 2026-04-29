import type { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

export default function SummaryCard({
  label,
  value,
  icon: Icon,
  color,
}: SummaryCardProps) {
  return (
    <div className="flex items-center gap-4 bg-dash-surface border border-dash-border rounded-xl p-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-semibold text-dash-text-main">{value}</p>
        <p className="text-sm text-dash-text-muted">{label}</p>
      </div>
    </div>
  );
}
