import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import axios from "axios";
import { AwsBadge } from "../AwsBadge";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email via Brevo API
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          // Use a verified sender email rather than visitor's email to avoid DMARC/SPF issues
          sender: {
            name: "Portfolio Contact Form",
            email: "laukikspathak@gmail.com" // Should be a verified email in your Brevo account
          },
          to: [
            {
              email: "laukikpathak24@gmail.com",
              name: "Laukik Pathak"
            }
          ],
          replyTo: {
            email: formData.email,
            name: formData.name
          },
          subject: "New contact form submission from portfolio",
          htmlContent: `
            <html>
              <body>
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message.replace(/\n/g, '<br>')}</p>
              </body>
            </html>
          `
        },
        {
          headers: {
            "accept": "application/json",
            "api-key": import.meta.env.VITE_BREVO_API_KEY,
            "content-type": "application/json"
          }
        }
      );
      
      // Success handling
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // More detailed error handling
      if (error.response) {
        // The request was made but server responded with error
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error setting up request:", error.message);
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <AwsBadge />
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          
          <div className="mb-8 bg-white/5 border border-white/10 rounded p-4">
            <div className="flex flex-col space-y-3 text-center">
              <a 
                href="mailto:laukikpathak24@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition"
              >
                laukikspathak@gmail.com(preferred) and/or laukikpathak24@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/laukik-pathak/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                linkedin.com/in/laukik-pathak
              </a>
              <a 
                href="https://laukikpathak.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                laukikpathak.xyz
              </a>
            </div>
          </div>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-center">
              <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-md text-center">
              <p className="text-red-400">Failed to send message. Please try again or email me directly at laukikpathak24@gmail.com</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
