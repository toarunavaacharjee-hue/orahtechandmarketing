type Props = { className?: string };

/** What happens after someone submits — for contact / audit pages. */
export function ContactJourneyDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 360 320" className="mx-auto h-auto w-full max-w-[280px]" role="img">
        <title>After you reach out: triage, plan, kickoff</title>
        <defs>
          <linearGradient id="cj-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5C1A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <line x1="180" y1="36" x2="180" y2="280" stroke="url(#cj-stroke)" strokeWidth="3" strokeLinecap="round" />

        {[
          { y: 36, t: "Day 0", d: "Form in" },
          { y: 118, t: "24h", d: "Triage + reply" },
          { y: 200, t: "2–5d", d: "Plan / scope" },
          { y: 282, t: "Next", d: "Kickoff call" },
        ].map((step, i) => (
          <g key={step.t}>
            <circle
              cx="180"
              cy={step.y}
              r={i === 0 ? 10 : 8}
              fill={i === 0 ? "#FF5C1A" : "#0A0F2C"}
              stroke="#00D4FF"
              strokeWidth="2"
            />
            <rect
              x="32"
              y={step.y - 22}
              width="116"
              height="44"
              rx="12"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.1)"
            />
            <text
              x="90"
              y={step.y - 4}
              textAnchor="middle"
              fill="rgba(255,255,255,0.85)"
              fontSize="11"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {step.t}
            </text>
            <text
              x="90"
              y={step.y + 12}
              textAnchor="middle"
              fill="rgba(255,255,255,0.45)"
              fontSize="10"
              fontFamily="system-ui, sans-serif"
            >
              {step.d}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
