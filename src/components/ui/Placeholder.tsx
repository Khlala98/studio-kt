import { type LucideIcon } from "lucide-react";

interface PlaceholderProps {
  icon: LucideIcon;
  label?: string;
  className?: string;
}

export default function Placeholder({
  icon: Icon,
  label,
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-navy-light to-navy-medium p-8 ${className}`}
      aria-label={label ?? "Image placeholder"}
    >
      <Icon className="h-10 w-10 text-gold/50" strokeWidth={1.5} />
      {label && (
        <span className="text-sm text-text-light">{label}</span>
      )}
    </div>
  );
}
