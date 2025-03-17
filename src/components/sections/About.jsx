import { RevealOnScroll } from "../RevealOnScroll";
import { AwsBadge } from "../AwsBadge";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "RESTful APIs", "SQL", "MongoDB", "AWS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <AwsBadge />
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a Software Engineer with a passion for developing robust, efficient applications 
              that solve real-world problems. With strong expertise in both frontend and backend technologies, 
              I specialize in creating high-performance systems that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Master's Degree </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Science in Information Technology</strong> - Arizona State University (2022-2024)
                </li>
                <li>
                  <strong>CGPA: 3.95</strong>
                </li>
                <li>
                  Relevant Coursework: Data Visualization and Reporting, Advanced Database Management System, Cloud Computing with AWS, Information Systems Development
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Bachelor's Degree </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Engineering in Electronics and Telecommunication Engineering</strong> - Savitribai Phule Pune University (2016-2020)
                </li>
                <li>
                  <strong>CGPA:</strong> 8.9/10
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Development, Software Engineering
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-4"> 💼 Career Summary </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Senior Systems Engineer at Pfizer (Jan 2024 - Present){" "}
                </h4>
                <p>
                  Leading enterprise system development with a focus on scalability and performance optimization for pharmaceutical operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  Systems Engineer at Infosys (Jan 2020 - July 2022){" "}
                </h4>
                <p>
                  Developed enterprise applications for global clients in healthcare and finance sectors.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Software Developer Intern at Mets Systems (May 2019 - Dec 2020){" "}
                </h4>
                <p>
                  Contributed to business process automation solutions and front-end development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
