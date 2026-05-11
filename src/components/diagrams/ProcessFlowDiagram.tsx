type Props = { className?: string };

/** Horizontal engagement workflow — pairs with process copy. */
export function ProcessFlowDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 920 200" className="h-auto w-full text-white/90" role="img">
        <title>
          Engagement workflow: brief and goals, direction and systems, design and build, ship and scale
        </title>
        <defs>
          <linearGradient id="pf-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5C1A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.85" />
          </linearGradient>
          <filter id="pf-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="24"
          y="56"
          width="872"
          height="88"
          rx="20"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.1)"
        />
        <path
          d="M 208 100 L 252 100 M 428 100 L 472 100 M 648 100 L 692 100"
          stroke="url(#pf-line)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter="url(#pf-glow)"
        />
        <polygon points="244,94 264,100 244,106" fill="#00D4FF" opacity="0.9" />
        <polygon points="464,94 484,100 464,106" fill="#00D4FF" opacity="0.9" />
        <polygon points="684,94 704,100 684,106" fill="#FF5C1A" opacity="0.9" />

        {[
          { x: 48, label: "Brief & goals", sub: "Audit" },
          { x: 268, label: "Direction", sub: "Systems" },
          { x: 488, label: "Design & build", sub: "Sprints" },
          { x: 708, label: "Ship & scale", sub: "Templates" },
        ].map((n, i) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y="72"
              width="160"
              height="56"
              rx="14"
              fill={i === 0 ? "rgba(255,92,26,0.12)" : "rgba(0,212,255,0.08)"}
              stroke="rgba(255,255,255,0.14)"
            />
            <text
              x={n.x + 80}
              y="98"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="13"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {n.label}
            </text>
            <text
              x={n.x + 80}
              y="116"
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="11"
              fontFamily="system-ui, sans-serif"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
