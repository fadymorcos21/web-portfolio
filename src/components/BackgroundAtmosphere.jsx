export default function BackgroundAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-midnight-950" />
      <div className="absolute inset-0 bg-hero-radial opacity-90" />

      <div className="absolute -left-24 top-16 h-[20rem] w-[20rem] rounded-full bg-neon-cyan/20 blur-[120px]" />
      <div className="absolute right-[-8rem] top-1/4 h-[26rem] w-[26rem] rounded-full bg-neon-blue/20 blur-[140px]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-neon-teal/20 blur-[160px]" />

      <svg
        className="absolute left-0 top-0 h-full w-full opacity-20"
        viewBox="0 0 1600 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#65D9FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4A8CFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path d="M90 170C260 220 410 70 560 120C750 180 810 320 980 300C1160 280 1200 120 1470 140" stroke="url(#lineGlow)" strokeWidth="1.4" />
        <path d="M40 520C180 470 270 360 420 400C590 450 710 580 860 560C1030 540 1180 470 1460 510" stroke="url(#lineGlow)" strokeWidth="1.2" />
        <path d="M190 840C330 770 430 700 590 730C760 760 820 910 990 910C1170 910 1280 760 1500 740" stroke="url(#lineGlow)" strokeWidth="1.2" />
        <g>
          <circle cx="420" cy="400" r="4" fill="#65D9FF" />
          <circle cx="980" cy="300" r="4" fill="#65D9FF" />
          <circle cx="860" cy="560" r="4" fill="#4CF3D9" />
          <circle cx="590" cy="730" r="4" fill="#4CF3D9" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,8,25,0.92)_72%)]" />
    </div>
  );
}
