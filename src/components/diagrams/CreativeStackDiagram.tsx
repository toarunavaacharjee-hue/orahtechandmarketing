type Props = { className?: string };

/** Visual stack of creative outputs — for services / home. */
export function CreativeStackDiagram({ className }: Props) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 480 280" className="mx-auto h-auto w-full max-w-md" role="img">
        <title>Creative outputs: brand, web, and campaign layers</title>
        <defs>
          <linearGradient id="cs-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF5C1A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#050A18" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="cs-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#050A18" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <g transform="translate(40,24) rotate(-8 200 100)">
          <rect width="400" height="72" rx="16" fill="url(#cs-a)" stroke="rgba(255,255,255,0.12)" />
          <text x="24" y="44" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui, sans-serif">
            Brand & guidelines
          </text>
          <text x="24" y="64" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="system-ui, sans-serif">
            Identity · templates · tone
          </text>
        </g>
        <g transform="translate(24,96)">
          <rect width="400" height="88" rx="16" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
          <text x="24" y="40" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui, sans-serif">
            Web & product UI
          </text>
          <text x="24" y="62" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="system-ui, sans-serif">
            Landing pages · design systems · handoff
          </text>
          <rect
            x="280"
            y="20"
            width="88"
            height="48"
            rx="10"
            fill="rgba(0,212,255,0.15)"
            stroke="rgba(0,212,255,0.35)"
          />
          <text
            x="324"
            y="50"
            textAnchor="middle"
            fill="#00D4FF"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            UI
          </text>
        </g>
        <g transform="translate(56,188) rotate(6 200 40)">
          <rect width="368" height="64" rx="16" fill="url(#cs-b)" stroke="rgba(255,255,255,0.12)" />
          <text x="20" y="38" fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui, sans-serif">
            Campaign & social kit
          </text>
          <text x="220" y="38" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">
            Reels · carousels · decks
          </text>
        </g>
      </svg>
    </figure>
  );
}
