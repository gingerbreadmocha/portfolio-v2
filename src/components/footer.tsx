// WAVE_PATH Constant
export const WAVE_PATH =
  "M0,32 C150,15 350,45 500,25 C650,5 850,38 1000,18 C1150,-2 1300,28 1440,15 L1440,80 L0,80 Z";

export function WaveFooter() {
  return (
    <footer className="w-full relative bg-[#F2ECFE] text-[#7C5295] pt-8 sm:pt-12 pb-8">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[99%] pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 text-[#F2ECFE]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={WAVE_PATH}></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Paws */}
        <div className="flex items-center gap-1.5 text-[#7C5295]/70">
          <span className="hover:scale-125 transition-transform cursor-pointer">
            🐾
          </span>
          <span className="text-xs hover:scale-125 transition-transform cursor-pointer">
            🐾
          </span>
        </div>

        {/* Center Text */}
        <div className="text-center font-medium text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5">
          <span>Thanks for stopping by!</span>
          <span className="text-pink-500 animate-pulse">💖</span>
          <span>Let's build something cool together.</span>
        </div>

        <div className="flex items-center gap-3 relative">
          <div className="absolute -top-7 right-2 text-[11px] font-mono opacity-80 hidden sm:block">
            (◠‿◠)<span className="text-pink-400">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
