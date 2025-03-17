import { RevealOnScroll } from "../RevealOnScroll";
import { AwsBadge } from "../AwsBadge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "SQL", "PL/SQL", "Java", "C++", "PHP"]
    },
    {
      title: "Front-End",
      skills: ["React.js", "Redux", "Angular.js", "Bootstrap", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Back-End",
      skills: ["Node.js", "Django", "Flask", "CherryPy", "Web2py", "RESTful API"]
    },
    {
      title: "Cloud Technologies",
      skills: ["AWS", "Azure", "GCP", "DataBricks"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Jupyter Notebook", "PyCharm"]
    },
    {
      title: "Python Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Scikit-learn"]
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Waterfall", "SDC", "CI/CD"]
    },
    {
      title: "Core Competencies",
      skills: ["System Design", "Design Patterns", "Algorithms", "Automation", "Full Stack Engineering"]
    },
    {
      title: "Additional Skills",
      skills: ["Mobile Platforms (iOS, Android)", "Software Testing", "Jira", "Windows/Linux/Mac"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/30 relative">
      <AwsBadge />
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 