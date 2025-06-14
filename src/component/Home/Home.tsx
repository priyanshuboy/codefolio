import Downloadicon from "../../icons/downloadicon/DocumentIcon";

export default function Home() {
  return (
    <div  id="#home" className="px-4 md:px-20">
      {/* Greeting Section */}
      <div className="pt-10 md:pt-20 md:m-12 text-center md:text-left">
        <p>
          <strong className="text-2xl text-white">Hello Buddy</strong>
        </p>
        <p className="mt-2 text-3xl md:text-4xl text-white font-semibold">
          I am <span className="text-[#0d9f47]">Priyanshu</span>
        </p>
        <p className="pt-3 text-[#959595] text-sm md:text-base">
          Full Stack Web Enthusiast
        </p>
      </div>

      {/* Horizontal Line */}
      <div className="mt-6 hidden md:block">
        <hr className="border-[#acacac]" />
      </div>

      {/* Description */}
      <div className="pt-6 text-[#959595] text-sm md:text-base leading-relaxed text-center md:text-left">
        <p>
          I'm Priyanshu, a full stack web developer passionate about building clean,
          scalable applications. I work with React, Tailwind, Node.js, TypeScript,
          MongoDB, MySQL, and PostgreSQL. I love turning ideas into interactive experiences,
          exploring DevOps tools, and constantly learning new technologies to improve my
          craft and build impactful software.
        </p>
      </div>

      {/* Buttons */}
      <div className="pt-8 flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start justify-center md:justify-start">
        <a
          href="/Priyanshu kushwah Resume 2025.pdf"
          download="Priyanshu_CV.pdf"
          type="application/pdf"
          className="bg-[#01a03d] px-4 py-2 rounded-sm text-white flex items-center gap-2 hover:scale-105 transition duration-300"
        >
          <div className="pt-1">
            <Downloadicon />
          </div>
          Download CV
        </a>

        <a
          href="#projects"
          className="text-white border border-white px-6 py-2 rounded-sm hover:scale-105 transition duration-300"
        >
       Explore More
        </a>
      </div>
    </div>
  );
}
