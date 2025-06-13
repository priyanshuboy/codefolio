import EmailIcon from "../../icons/Emial/Emial";
import FadeInOnScroll from "../FadeInOnScroll";

export default function Contact() {
  return (
    <FadeInOnScroll animation="fade-up" delay={100}>
      <div className="flex justify-center pt-90">
        <div className="p-10 md:p-20 w-full max-w-6xl bg-[#363231] rounded-2xl flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Text Section */}
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Have any project in mind?
            </h1>
            <p className="pt-3 text-[#9b9695] text-sm md:text-base">
              I'm available for freelancing.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex flex-col md:flex-row gap-4">
        <button
  onClick={() => window.open("https://github.com/priyanshuboy?tab=repositories", "_blank")}
  className="text-white border border-white px-6 py-2 cursor-pointer rounded-md hover:scale-105 transition duration-300"
>
  More Projects
</button>

            <a
              href="mailto:priyanshu74k@gmail.com"
              className="bg-[#01a03d] px-6 py-2 text-white rounded-md cursor-pointer flex items-center gap-2 hover:scale-105 transition duration-300"
            >
              <EmailIcon /> Email Me
            </a>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
