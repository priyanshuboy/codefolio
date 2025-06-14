import JavascriptIcon from "../../icons/js/js";
import NodeIcon from "../../icons/nodejs/node";
import PostgresIcon from "../../icons/postgres/db";
import ReactIcon from "../../icons/react/reacticon";
import TypeScriptIcon from "../../icons/ts/typescripticon";
import Contact from "../projectIdea/Contact";
import Card from "../card/card";
import ProjectCard from "../ProjectCard/ProjectCard";
import FadeInOnScroll from "../FadeInOnScroll";

export default function Skill() {
  return (
    <FadeInOnScroll animation="fade-up" delay={100}>
    <div className="bg-[#282828] px-8 md:px-16 mt-29 pb-1">
      {/* Skills Header */}
      <div className="flex justify-center items-center pt-20">
        <h2 className="text-3xl text-white font-bold">Tools And Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="mt-17 translate-y-8 grid grid-cols-1 sm:grid-cols-3 pr-21 md:grid-cols-5 gap-2 justify-center">
        <Card icon={<JavascriptIcon />} />
        <Card icon={<TypeScriptIcon />} />
        <Card icon={<ReactIcon />} />
        <Card icon={<NodeIcon />} />
        <Card icon={<PostgresIcon />} />
      </div>

      {/* Projects Section */}
      <div id="projects" className="-translate-y-16 flex flex-col justify-center items-center mt-92 text-center">
        <h1 className="text-3xl text-white font-bold">Featured Project</h1>
        <p className="text-[#959595] mt-4 max-w-3xl">
          Here are some of the projects I’ve built, showcasing my skills in full-stack development, problem-solving, and clean UI design. Each project reflects real-world challenges and modern web technologies.
        </p>

        {/* Project Cards */}
    <div  className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full px-4 md:px-0">

  <ProjectCard 
    title="StreamSphere" 
    link="https://github.com/priyanshuboy/Project1/tree/main/YouTube-Clone" 
    objective="A modern YouTube clone built with React, Tailwind, and RapidAPI, allowing video search, playback, and channel exploration." 
  />

  <ProjectCard 
    title="Brainly" 
    link="https://github.com/priyanshuboy/Brainly" 
    objective="A Q&A platform with full CRUD functionality using React, Tailwind, Node.js, Express, TypeScript, and MongoDB." 
  />

  <ProjectCard 
    title="Coursly" 
    link="https://github.com/priyanshuboy/CourseSellingAPP" 
    objective="A course-selling app built with React, Tailwind, Node.js, and MongoDB featuring payments, authentication, and admin panel." 
  />

  <ProjectCard 
    title="Excalidraw" 
    objective="🚧 Under construction — this tool will enable collaborative whiteboarding and sketching for planning and brainstorming sessions." 
  />
</div>

      </div>

      {/* Contact Section */}
      <div className="mt-12 -translate-y-17">
        <Contact />
      </div>

     
{/* Bottom Placeholder */}
<div className="mt-8 w-full sm:w-[80vw] sm:fixed -translate-x-8 sm:-translate-x-17">

  <div className="bg-[#1e1e1e] w-screen h-[40rem] flex flex-col items-center justify-center text-white text-lg overflow-hidden">

    {/* Title */}
    <div className="text-4xl">
      <strong>Priyanshu</strong>
    </div>

    {/* Navigation Links */}
    <div className="pt-20">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
        {["Home", "About", "Contact", "Service", "Projects"].map((label, index) => (
          <div key={index} className="group flex flex-col items-center">
            <a href="/" className="text-white font-medium">{label}</a>
            <span className="mt-1 h-0.5 w-0 group-hover:w-12 bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_6px_#01a03d]" />
          </div>
        ))}
      </div>
    </div>

    {/* Footer Note */}
  <div className="bg-[#111111] w-screen flex justify-center mt-10 p-2">
  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-white text-sm sm:text-base">
    <p>© 2025</p>
    <strong className="text-[#009f3e]">Priyanshu</strong>
    <p>All content and rights reserved.</p>
  </div>
</div>

  </div>
</div>
</div>
    </FadeInOnScroll>
  );
}
