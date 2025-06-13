import Downloadicon from "../../icons/downloadicon/DocumentIcon";

export default function Home() {
  return (
    <div className="px-50">
      <div className="pt-20 m-12">
        <p>
          <strong className="text-2xl text-white">Hello Buddy</strong>
        </p>
        <span>
          <p>
            <strong className="text-4xl text-white">I am </strong>
            <span className="text-4xl text-[#0d9f47]">
              <strong>Priyanshu</strong>
            </span>
          </p>
        </span>
        <p className="pt-3 text-[#959595]">Full Stack Web Enthusiast</p>
      </div>

      <div className="px-130 -translate-x-117">
        <hr className="border-[#acacac]" />
      </div>

      <div className="pt-4 pl-13">
        <p className="text-[#959595]">
          I'm Priyanshu, a full stack web developer passionate about building clean,
          <br /> scalable applications. I work with React, Tailwind, Node.js, TypeScript,
          MongoDB, MySQL and PostgreSQL.
          <br /> I love turning ideas into interactive experiences, exploring DevOps tools,
          <br /> and constantly learning new technologies to improve my craft and build
          impactful software.
        </p>
      </div>

      <div className="pt-10 pl-13 flex flex-row gap-10">
        <a
          href="/Priyanshu_CV.pdf"
          download
          className="bg-[#01a03d] p-2 cursor-pointer rounded-sm text-white flex gap-2 hover:scale-104 duration-500 delay-200"
        >
          <div className="pt-1">
            <Downloadicon />
          </div>
          Download CV
        </a>

     <button
  onClick={() => window.open("https://github.com/priyanshuboy?tab=repositories", "_blank")}
  className="text-white border border-white px-6 py-2 cursor-pointer rounded-md hover:scale-105 transition duration-300"
>
  More 
</button>

      </div>
    </div>
  );
}
