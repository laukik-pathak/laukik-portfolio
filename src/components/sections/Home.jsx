import { RevealOnScroll } from "../RevealOnScroll";
import { AwsBadge } from "../AwsBadge";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <AwsBadge />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I&apos;m Laukik Pathak
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I&apos;m a Senior Systems Engineer at Pfizer with an MS in Information Technology from ASU.
            Experienced in full-stack development with Python, JavaScript, React, and cloud technologies.
            I leverage my diverse technical expertise to build scalable, high-performance solutions
            across healthcare and finance domains.
          </p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <a
              href="#skills"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Skills
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Laukik_Pathak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(22, 163, 74, 0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
