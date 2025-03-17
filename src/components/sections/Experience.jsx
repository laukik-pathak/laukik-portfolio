import { RevealOnScroll } from "../RevealOnScroll";
import { AwsBadge } from "../AwsBadge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <AwsBadge />
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {/* Pfizer Experience */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">Senior Systems Engineer at Pfizer</h3>
                <span className="text-gray-400">Jan 2024 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Leading the development and implementation of enterprise-scale systems solutions for pharmaceutical research and operations.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                <li>Engineered server-side logic and RESTful APIs using Django and CherryPy while applying systems engineering principles to convert
                business requirements into scalable, integrated solutions</li>
                <li>Optimized front-end performance with React.js and Redux, achieving a 25% improvement in load times and demonstrating effective
                cross-functional collaboration to meet stringent system integration targets</li>
                <li>Developed dynamic user interfaces with HTML5, CSS3, and AJAX, integrating jQuery to enhance interactivity and support user
                requirement translation, aligning with system-level testing practices</li>
                <li>Streamlined data analysis using Python with NumPy, Pandas, and Matplotlib, reducing processing time by 40% and contributing to
                functional analysis and technical planning efforts</li>
                <li>Managed AWS and GCP cloud deployments to enhance resource utilization and system scalability, ensuring robust relational database
                performance with MySQL, PostgreSQL, and SQL Server in a manner consistent with hardware and software testing standards</li>

              </ul>
            </div>
            
            {/* Infosys Experience */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">Systems Engineer at Infosys</h3>
                <span className="text-gray-400">Jan 2021 - July 2022</span>
              </div>
              <p className="text-gray-300 mb-4">
                Specialized in developing and maintaining enterprise applications for global clients in healthcare and finance sectors.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                <li>Enhanced business solutions by implementing optimized JavaScript algorithms with a focus on systematic systems engineering and precise
                requirements allocation</li>
                <li>Collaborated in designing a scalable distributed system on AWS, managing a 40% increase in traffic and applying technical planning and
                integration testing principles to meet high reliability standards</li>
                <li>Refined SQL queries and streamlined the database schema in a high-scale MySQL environment, reducing query time by 35% and
                supporting the overall systems' performance through effective functional analysis</li>
                <li>Engineered web applications with HTML/CSS, React.js, and native JavaScript, utilizing established design patterns to improve customer
                verification processes and align with system integration and validation requirements</li>
                <li>Contributed to continuous improvement through active participation in code reviews and agile sprint planning with Jira, fostering
                cross-functional collaboration and adherence to defined system-level testing protocols</li>

              </ul>
            </div>
            
            {/* Mets Systems Experience */}
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">Software Developer at Mets Systems</h3>
                <span className="text-gray-400">May 2019 - Dec 2020</span>
              </div>
              <p className="text-gray-300 mb-4">
                Contributed to the development of innovative software solutions for business process automation.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 pl-4">
                <li>Developed and maintained web applications with Python and Flask, implementing RESTful APIs that improved backend functionality and
                facilitated a 30% increase in data exchange efficiency</li>
                <li>Participated in agile development processes including daily stand-ups and sprint planning</li>
                <li>Designed and optimized databases using SQL and PL/SQL, ensuring efficient data retrieval and storage across MongoDB and traditional
                SQL databases</li>
                <li>Worked within the Waterfall methodology, ensuring complete documentation and timely delivery of project milestones</li>
                <li>Leveraged Databases and Azure for cloud solutions, enhancing application performance and scalability while managing deployments
                efficiently</li>
                <li>Utilized SciPy and Scikit-learn to implement machine learning algorithms to generate data-driven insights while leveraging Git for version
                control to enhance collaboration and streamline development workflows</li>




              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 