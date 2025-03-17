import { RevealOnScroll } from "../RevealOnScroll";
import { AwsBadge } from "../AwsBadge";

export const Certifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Comprehensive knowledge of AWS architecture best practices and services."
    },
    {
      name: "AWS Academy: Cloud Security Foundations",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Expertise in designing, security and maintaining cloud applications on AWS"
    }
    
  ];

  return (
    <section id="certifications" className="py-20 bg-black/30 relative">
      <AwsBadge />
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">{cert.name}</h3>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}; 