type Props = { className?: string };

const STEPS = [
  { label: "Brief & Goals", sub: "Audit · Research", cx: 120, fill: "url(#pf-n0)", stroke: "rgba(255,92,26,0.45)", numColor: "#FF5C1A" },
  { label: "Direction", sub: "Strategy · Systems", cx: 360, fill: "url(#pf-n1)", stroke: "rgba(124,108,255,0.35)", numColor: "#9c8cff" },
  { label: "Design & Build", sub: "Sprints · Delivery", cx: 600, fill: "url(#pf-n2)", stroke: "rgba(0,212,255,0.3)", numColor: "#00D4FF" },
  { label: "Ship & Scale", sub: "Templates · Ops", cx: 840, fill: "url(#pf-n3)", stroke: "rgba(0,212,255,0.4)", numColor: "#00D4FF" },
] as const;

const ARROWS = [
  { x1: 158, x2: 322, tipColor: "#9c8cff" },
  { x1: 398, x2: 562, tipColor: "#00D4FF" },
  { x1: 638, x2: 802, tipColor: "#00D4FF" },
];

/** Horizontal engagement workflow — pairs with process copy. */
export function ProcessFlowDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 960 185" className="h-auto w-full text-white/90" role="img">
        <title>
          Engagement workflow: brief and goals, direction, design and build, ship and scale
        </title>
        <defs>
          <linearGradient id="pf-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5C1A" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#9c8cff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="pf-n0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5C1A" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FF5C1A" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="pf-n1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9c8cff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#9c8cff" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="pf-n2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="pf-n3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.08" />
          </linearGradient>
          <filter id="pf-glow">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background dashed track */}
        <line
          x1="120" y1="72" x2="840" y2="72"
          stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="5 5"
        />

        {/* Gradient connector line */}
        <line
          x1="120" y1="72" x2="840" y2="72"
          stroke="url(#pf-line)" strokeWidth="2" strokeLinecap="round" opacity="0.55"
          filter="url(#pf-glow)"
        />

        {/* Arrows */}
        {ARROWS.map((a) => (
          <g key={a.x1}>
            <polygon
              points={`${a.x2 - 8},66 ${a.x2 + 5},72 ${a.x2 - 8},78`}
              fill={a.tipColor}
              opacity="0.75"
            />
          </g>
        ))}

        {/* Step nodes */}
        {STEPS.map((s, i) => (
          <g key={s.label}>
            {/* Outer glow ring */}
            <circle cx={s.cx} cy="72" r="40" fill={s.fill} />
            {/* Circle border */}
            <circle cx={s.cx} cy="72" r="36" fill="none" stroke={s.stroke} strokeWidth="1.5" />
            {/* Inner accent ring */}
            <circle cx={s.cx} cy="72" r="28" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* Step number */}
            <text
              x={s.cx} y="79"
              textAnchor="middle"
              fill={s.numColor}
              fontSize="18"
              fontWeight="700"
              fontFamily="system-ui, sans-serif"
            >
              {i + 1}
            </text>
            {/* Step label */}
            <text
              x={s.cx} y="126"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {s.label}
            </text>
            {/* Sub label */}
            <text
              x={s.cx} y="144"
              textAnchor="middle"
              fill="rgba(255,255,255,0.42)"
              fontSize="10"
              fontFamily="system-ui, sans-serif"
            >
              {s.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
