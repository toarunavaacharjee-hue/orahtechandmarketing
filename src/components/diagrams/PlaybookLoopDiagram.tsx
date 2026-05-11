type Props = { className?: string };

/** Circular playbook loop for industry pages. */
export function PlaybookLoopDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-sm" role="img">
        <title>Industry playbook: discover, direct, design, deliver</title>
        <defs>
          <linearGradient id="pl-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5C1A" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
        <path
          d="M 40 120 A 120 120 0 1 1 280 120"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 52 118 A 108 108 0 1 1 268 118"
          fill="none"
          stroke="url(#pl-arc)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="12 10"
        />
        {[
          { x: 64, y: 52, label: "Discover" },
          { x: 160, y: 28, label: "Direct" },
          { x: 256, y: 52, label: "Design" },
          { x: 220, y: 150, label: "Deliver" },
        ].map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {n.label}
            </text>
          </g>
        ))}
        <text
          x="160"
          y="178"
          textAnchor="middle"
          fill="rgba(255,255,255,0.45)"
          fontSize="11"
          fontFamily="system-ui, sans-serif"
        >
          Industry-tailored loop
        </text>
      </svg>
    </figure>
  );
}
