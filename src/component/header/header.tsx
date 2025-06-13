import SnowfallCanvas from "../snowfall/SnowfallCanvas";

export default function Header() {
  return (
    <>
      <div className="-z-50 pt-10">
        <SnowfallCanvas />

        <div className="flex justify-center pr-50 items-center pt-1 gap-10 text-[#e0e0e0] flex-row">
          <div>
            <strong className="text-2xl">Priyanshu</strong>
          </div>

          <div className="flex flex-row gap-24 translate-x-50 pt-2">
            {["Home", "About", "Contact"].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center">
                <a className="font-medium" href="/">
                  {item}
                </a>
                <span className="mt-1 h-0.5 w-0 group-hover:w-full bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_8px_#01a03d]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
