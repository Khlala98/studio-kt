interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <span
      className={`mb-4 inline-block rounded-full bg-gold-dim px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold ${className}`}
    >
      {text}
    </span>
  );
}
