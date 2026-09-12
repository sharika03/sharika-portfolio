type GradientMeshProps = {
  className?: string;
};

/**
 * Animated gradient mesh. Blob offsets read --py, which the hero updates on
 * scroll to produce parallax without re-rendering React.
 */
export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="animate-mesh-drift absolute -top-40 -left-24 h-[34rem] w-[34rem] rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.30) 0%, rgba(45,212,191,0) 70%)",
          transform: "translateY(calc(var(--py, 0px) * 0.35))",
        }}
      />
      <div
        className="animate-mesh-drift absolute -top-24 right-[-12%] h-[38rem] w-[38rem] rounded-full opacity-55 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(56,189,248,0) 70%)",
          animationDelay: "-7s",
          transform: "translateY(calc(var(--py, 0px) * 0.55))",
        }}
      />
      <div
        className="animate-mesh-drift absolute bottom-[-30%] left-[28%] h-[32rem] w-[32rem] rounded-full opacity-45 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,157,255,0.24) 0%, rgba(139,157,255,0) 70%)",
          animationDelay: "-14s",
          transform: "translateY(calc(var(--py, 0px) * 0.2))",
        }}
      />
    </div>
  );
}

/** Abstract circuit-line motif: routing paths with junction nodes. */
export function CircuitLines({ className }: GradientMeshProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full${
        className ? ` ${className}` : ""
      }`}
    >
      <defs>
        <linearGradient id="circuit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b9dff" stopOpacity="0.12" />
        </linearGradient>
        <radialGradient id="circuit-fade" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="circuit-mask">
          <rect width="1200" height="620" fill="url(#circuit-fade)" />
        </mask>
      </defs>

      <g
        mask="url(#circuit-mask)"
        fill="none"
        stroke="url(#circuit-stroke)"
        strokeWidth="1.1"
        strokeLinecap="round"
      >
        <path d="M-20 140 H180 L240 80 H430 L470 120 H700" />
        <path d="M-20 300 H120 L170 250 H360 L400 290 H560 L610 240 H900 L950 290 H1220" />
        <path d="M-20 470 H240 L300 530 H520 L570 480 H820" />
        <path d="M120 620 V470 L180 410 V250" />
        <path d="M700 120 V220 L760 280 V420 L820 480 V620" />
        <path d="M950 -20 V180 L1010 240 V400 H1220" />
        <path d="M400 -20 V60 L470 120 V240 L520 290 V460" />
        <path d="M1010 400 L1080 470 H1220" />

        <g fill="#2dd4bf" stroke="none" opacity="0.7">
          <circle cx="240" cy="80" r="3" />
          <circle cx="470" cy="120" r="3" />
          <circle cx="610" cy="240" r="3" />
          <circle cx="300" cy="530" r="3" />
          <circle cx="760" cy="280" r="3" />
          <circle cx="1010" cy="240" r="3" />
        </g>
        <g fill="#38bdf8" stroke="none" opacity="0.5">
          <circle cx="170" cy="250" r="2.5" />
          <circle cx="520" cy="290" r="2.5" />
          <circle cx="950" cy="290" r="2.5" />
          <circle cx="820" cy="480" r="2.5" />
          <circle cx="1080" cy="470" r="2.5" />
        </g>
      </g>
    </svg>
  );
}
