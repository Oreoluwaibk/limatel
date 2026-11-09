const mainPath =
  "M48 206 C 118 206, 132 108, 206 108 S 292 214, 352 164 S 458 62, 592 92";
const spurPath = "M352 164 C 352 206, 386 228, 404 252";

export function RouteArt() {
  return (
    <div className="plan relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] px-5 py-5 text-paper sm:min-h-[420px] sm:px-7 sm:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_240px_at_72%_42%,rgba(139,154,227,0.28),transparent_62%)]" />
      <div className="relative flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-paper/55 sm:text-[11px]">
        <span>A route, end to end</span>
        <span>OFC · Copper · RF</span>
      </div>
      <svg
        viewBox="0 0 640 300"
        className="relative h-44 w-full sm:h-56"
        role="img"
        aria-label="A cable route from survey, through chambers, to handover"
      >
        <path
          d={mainPath}
          fill="none"
          stroke="#8b9ae3"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.22"
          pathLength={1}
          className="route-draw"
        />
        <path
          d={mainPath}
          fill="none"
          stroke="#e4e9fb"
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength={1}
          className="route-draw"
        />
        <path
          d={spurPath}
          fill="none"
          stroke="#e4e9fb"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          className="route-draw route-draw-late"
        />
        <g className="route-nodes" fill="#14161c" stroke="#e4e9fb" strokeWidth="1.4">
          <circle cx="48" cy="206" r="5.5" />
          <circle cx="206" cy="108" r="4.5" />
          <circle cx="352" cy="164" r="5.5" />
          <circle cx="404" cy="252" r="4" />
          <circle cx="592" cy="92" r="5.5" />
        </g>
        <circle r="4.5" fill="#c9d2f6" className="bead">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            begin="2.1s"
            path={mainPath}
          />
        </circle>
      </svg>
      <ol className="relative grid grid-cols-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-paper/65 sm:grid-cols-6 sm:text-[11px]">
        {["Survey", "Civil", "Lay", "Splice", "Test", "Restore"].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
