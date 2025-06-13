import GithubIcon from "../../icons/Github/github-icon";
import FadeInOnScroll from "../FadeInOnScroll";

interface ProjectProps {
  title: string;
  link?: string;
  imageUrl?: string;
  objective: string; 
}

export default function ProjectCard({ title, link, imageUrl, objective }: ProjectProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("🚧 Project is under construction");
    }
  };

  return (
    <FadeInOnScroll animation="fade-up" delay={100}>
      <div
        onClick={handleClick}
        className="bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer w-full group"
      >
        {/* Optional Project Image */}
        {imageUrl && (
          <div className="h-48 w-full overflow-hidden">
            <img
              src={imageUrl}
              alt="Project preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col justify-between h-full">
          {/* Title with hover underline */}
          <div className="flex flex-col items-start">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            <span className="mt-1 h-0.5 w-0 group-hover:w-20 bg-[#01a03d] rounded-full transition-all duration-300 shadow-[0_0_6px_#01a03d]" />
          </div>

          {/* ✅ Dynamic Project Objective */}
          <p className="text-gray-300 text-sm mt-4 mb-4 leading-relaxed">
            {objective}
          </p>

          {/* GitHub Icon */}
          <div className="flex justify-end">
            <div
              className="p-2 bg-white rounded-full hover:bg-gray-200 transition"
              onClick={(e) => {
                e.stopPropagation();
                if (link) window.open(link, "_blank");
              }}
            >
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
