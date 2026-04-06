interface BrowserMockupProps {
  url?: string;
  className?: string;
}

export default function BrowserMockup({
  url = "www.votre-site.fr",
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border-dark bg-navy-light shadow-xl ${className}`}
      role="img"
      aria-label="Apercu d un site web dans un navigateur"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border-dark bg-navy px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-navy-medium px-3 py-1 text-xs text-text-light">
          {url}
        </div>
      </div>

      {/* Mini site content */}
      <div className="p-4">
        <MockNav />
        <MockHero />
        <MockCards />
      </div>
    </div>
  );
}

function MockNav() {
  return (
    <div className="mb-4 flex items-center justify-between rounded-lg bg-navy/60 px-3 py-2">
      <div className="h-2 w-12 rounded bg-gold/60" />
      <div className="flex gap-2">
        <div className="h-1.5 w-8 rounded bg-text-light/30" />
        <div className="h-1.5 w-8 rounded bg-text-light/30" />
        <div className="h-1.5 w-8 rounded bg-text-light/30" />
      </div>
    </div>
  );
}

function MockHero() {
  return (
    <div className="mb-4 rounded-lg bg-gradient-to-r from-navy-medium to-navy p-4">
      <div className="mb-2 h-2.5 w-3/4 rounded bg-white/20" />
      <div className="mb-3 h-2 w-1/2 rounded bg-text-light/20" />
      <div className="h-5 w-16 rounded bg-gold/70" />
    </div>
  );
}

function MockCards() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg bg-navy/40 p-2">
          <div className="mb-2 h-6 rounded bg-navy-medium" />
          <div className="mb-1 h-1.5 w-full rounded bg-text-light/20" />
          <div className="h-1.5 w-2/3 rounded bg-text-light/15" />
        </div>
      ))}
    </div>
  );
}
