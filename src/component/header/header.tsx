import SnowfallCanvas from "../snowfall/SnowfallCanvas";

export default function Header() {
  return (
    <>
      <div className="-z-50 pt-10">
        <SnowfallCanvas />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-[#e0e0e0] px-4">
          {/* Name */}
          <div className="text-3xl font-bold text-white pr-32  sm: translate-x-18">Priyanshu</div>

          {/* Nav Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 pt-2">
            <div className="group relative flex flex-col items-center">
              <a className="font-medium text-lg" href="#home">
                Home
              </a>
              <span className="mt-1 h-0.5 w-0 group-hover:w-full bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_8px_#01a03d]" />
            </div>

            <div className="group relative flex flex-col items-center">
              <a className="font-medium text-lg" href="#projects">
                About
              </a>
              <span className="mt-1 h-0.5 w-0 group-hover:w-full bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_8px_#01a03d]" />
            </div>

            <div className="group relative flex flex-col items-center">
              <a className="font-medium text-lg" href="#contact">
                Contact
              </a>
              <span className="mt-1 h-0.5 w-0 group-hover:w-full bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_8px_#01a03d]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
