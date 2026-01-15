import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-yellow-50 min-h-screen relative pt-24  pb-24 ">

       {/* Title */}
      <div className='flex justify-center items-center gap-2 mt-20'>
        <div className="w-5 h-5   bg-blue-500"></div>
        <h1 className="text-3xl font-bold text-center ">Lets's Connect</h1>
      </div>

      <div className='flex justify-center items-center mt-14'>
        
        <div className="max-w-3xl w-full bg-white shadow-lg p-8 justify-center">
          <p className="text-center text-gray-600 mb-6">
            I’m always excited to connect and explore new opportunities. Whether you have a project, role, or idea, feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <div className="md:w-1/3 flex flex-col gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>aditya@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-gray-700" />
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/yourusername</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-700" />
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/yourusername</a>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Download className="w-5 h-5 text-green-600" />
                <a href="/resume%20(2).pdf" download className="hover:underline font-medium">Download Resume</a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="md:w-2/3 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message / Opportunity"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
              >
                Let’s Collaborate
              </button>
              {submitted && <p className="text-green-600 mt-2">Thank you! Your message has been sent.</p>}
            </form>
          </div>
        </div>
        
      </div>

    </div>

  );
}