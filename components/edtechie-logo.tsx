interface EdTechieLogo {
  className?: string
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

export function EdTechieLogo({ className = "", size = "md", showTagline = true }: EdTechieLogo) {
  const sizes = {
    sm: { width: 120, height: 60, owlSize: 24, textSize: 16, corpSize: 8, taglineSize: 8 },
    md: { width: 200, height: 100, owlSize: 40, textSize: 28, corpSize: 12, taglineSize: 12 },
    lg: { width: 300, height: 150, owlSize: 60, textSize: 42, corpSize: 18, taglineSize: 16 },
  }

  const { width, height, owlSize, textSize, corpSize, taglineSize } = sizes[size]

  return (
    <div className={`inline-block ${className}`} style={{ width, height }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        {/* Owl with branch */}
        <g transform={`translate(${owlSize * 0.3}, ${owlSize * 0.2})`}>
          {/* Branch */}
          <line
            x1={-owlSize * 0.4}
            y1={owlSize * 0.1}
            x2={-owlSize * 0.1}
            y2={-owlSize * 0.2}
            stroke="#f59e0b"
            strokeWidth={owlSize * 0.08}
            strokeLinecap="round"
          />
          {/* Leaves */}
          <ellipse
            cx={-owlSize * 0.35}
            cy={-owlSize * 0.1}
            rx={owlSize * 0.08}
            ry={owlSize * 0.15}
            fill="#f59e0b"
            transform={`rotate(-30 ${-owlSize * 0.35} ${-owlSize * 0.1})`}
          />
          <ellipse
            cx={-owlSize * 0.2}
            cy={-owlSize * 0.25}
            rx={owlSize * 0.06}
            ry={owlSize * 0.12}
            fill="#f59e0b"
            transform={`rotate(-45 ${-owlSize * 0.2} ${-owlSize * 0.25})`}
          />

          {/* Owl body */}
          <ellipse cx={0} cy={owlSize * 0.3} rx={owlSize * 0.45} ry={owlSize * 0.55} fill="#f59e0b" />

          {/* Owl head */}
          <circle cx={0} cy={0} r={owlSize * 0.4} fill="#f59e0b" />

          {/* Eyes */}
          <circle cx={-owlSize * 0.15} cy={-owlSize * 0.05} r={owlSize * 0.12} fill="#1e293b" />
          <circle cx={owlSize * 0.15} cy={-owlSize * 0.05} r={owlSize * 0.12} fill="#1e293b" />
          <circle cx={-owlSize * 0.15} cy={-owlSize * 0.05} r={owlSize * 0.06} fill="#f59e0b" />
          <circle cx={owlSize * 0.15} cy={-owlSize * 0.05} r={owlSize * 0.06} fill="#f59e0b" />

          {/* Beak */}
          <polygon
            points={`0,${owlSize * 0.08} ${-owlSize * 0.04},${owlSize * 0.15} ${owlSize * 0.04},${owlSize * 0.15}`}
            fill="#1e293b"
          />

          {/* Wing detail */}
          <path
            d={`M ${-owlSize * 0.25} ${owlSize * 0.2} Q ${-owlSize * 0.4} ${owlSize * 0.4} ${-owlSize * 0.25} ${
              owlSize * 0.6
            }`}
            stroke="#1e293b"
            strokeWidth={owlSize * 0.04}
            fill="none"
          />

          {/* Feet */}
          <ellipse cx={-owlSize * 0.15} cy={owlSize * 0.8} rx={owlSize * 0.08} ry={owlSize * 0.06} fill="#f59e0b" />
          <ellipse cx={owlSize * 0.15} cy={owlSize * 0.8} rx={owlSize * 0.08} ry={owlSize * 0.06} fill="#f59e0b" />
        </g>

        {/* EdTechie Text */}
        <text
          x={owlSize * 1.2}
          y={owlSize * 1.1}
          fontSize={textSize}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#f59e0b"
        >
          Ed
        </text>
        <text
          x={owlSize * 1.2 + textSize * 1.2}
          y={owlSize * 1.1}
          fontSize={textSize}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#ffffff"
        >
          Techie
        </text>

        {/* CORP */}
        <text
          x={owlSize * 1.2 + textSize * 4.2}
          y={owlSize * 0.7}
          fontSize={corpSize}
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#ffffff"
        >
          CORP
        </text>

        {/* Tagline */}
        {showTagline && (
          <text
            x={owlSize * 1.2}
            y={owlSize * 1.1 + taglineSize * 1.8}
            fontSize={taglineSize}
            fontFamily="Arial, sans-serif"
            fontWeight="normal"
            fill="#ffffff"
          >
            E-Learning & Digital Training
          </text>
        )}
      </svg>
    </div>
  )
}

export function OwlIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {/* Branch */}
        <line
          x1={size * 0.1}
          y1={size * 0.3}
          x2={size * 0.35}
          y2={size * 0.1}
          stroke="#f59e0b"
          strokeWidth={size * 0.04}
          strokeLinecap="round"
        />
        {/* Leaves */}
        <ellipse
          cx={size * 0.15}
          cy={size * 0.2}
          rx={size * 0.04}
          ry={size * 0.08}
          fill="#f59e0b"
          transform={`rotate(-30 ${size * 0.15} ${size * 0.2})`}
        />
        <ellipse
          cx={size * 0.3}
          cy={size * 0.05}
          rx={size * 0.03}
          ry={size * 0.06}
          fill="#f59e0b"
          transform={`rotate(-45 ${size * 0.3} ${size * 0.05})`}
        />

        {/* Owl body */}
        <ellipse cx={size * 0.5} cy={size * 0.65} rx={size * 0.22} ry={size * 0.28} fill="#f59e0b" />

        {/* Owl head */}
        <circle cx={size * 0.5} cy={size * 0.4} r={size * 0.2} fill="#f59e0b" />

        {/* Eyes */}
        <circle cx={size * 0.42} cy={size * 0.37} r={size * 0.06} fill="#1e293b" />
        <circle cx={size * 0.58} cy={size * 0.37} r={size * 0.06} fill="#1e293b" />
        <circle cx={size * 0.42} cy={size * 0.37} r={size * 0.03} fill="#f59e0b" />
        <circle cx={size * 0.58} cy={size * 0.37} r={size * 0.03} fill="#f59e0b" />

        {/* Beak */}
        <polygon
          points={`${size * 0.5},${size * 0.44} ${size * 0.48},${size * 0.48} ${size * 0.52},${size * 0.48}`}
          fill="#1e293b"
        />

        {/* Wing detail */}
        <path
          d={`M ${size * 0.37} ${size * 0.55} Q ${size * 0.3} ${size * 0.65} ${size * 0.37} ${size * 0.75}`}
          stroke="#1e293b"
          strokeWidth={size * 0.02}
          fill="none"
        />

        {/* Feet */}
        <ellipse cx={size * 0.42} cy={size * 0.9} rx={size * 0.04} ry={size * 0.03} fill="#f59e0b" />
        <ellipse cx={size * 0.58} cy={size * 0.9} rx={size * 0.04} ry={size * 0.03} fill="#f59e0b" />
      </svg>
    </div>
  )
}
