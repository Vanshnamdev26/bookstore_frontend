// src/components/Contact.jsx
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://portffolio-backend.onrender.com/api/users/create",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent! Thank you, I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-50 via-white to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header (same style as Courses) */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Get In <span className="text-pink-600">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I’m always open to discussing new opportunities.
            </p>
          </div>

          {/* Contact Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              {[
                {
                  icon: <Mail className="h-6 w-6 text-pink-500" />,
                  title: "Email",
                  value: "vanshworknamdev@gmail.com",
                  href: "mailto:vanshworknamdev@gmail.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-pink-500" />,
                  title: "Phone",
                  value: "+91 (952) 826-6704",
                  href: "tel:+919528266704",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-pink-500" />,
                  title: "Location",
                  value: "Shamli, Uttar Pradesh, India",
                  href: "https://www.google.com/maps/place/Shamli,+Uttar+Pradesh",
                },
              ].map(({ icon, title, value, href }, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-3 rounded-md hover:bg-pink-50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-pink-100">{icon}</div>
                  <div>
                    <h4 className="font-medium">{title}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-600 hover:text-pink-600 transition-colors text-sm block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-8 text-center">
                <h4 className="font-medium mb-6 text-lg tracking-wide text-pink-600">
                  Connect With Me
                </h4>
                <div className="flex justify-center space-x-5">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      href: "https://www.instagram.com/vansh.namdev0/",
                    },
                    { icon: Twitch, label: "Twitch", href: "#" },
                  ].map(({ icon: Icon, label, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:text-white hover:bg-pink-500 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="absolute bottom-[-1.5rem] text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                {[
                  {
                    label: "Your Name",
                    id: "name",
                    type: "text",
                    placeholder: "Your Name",
                  },
                  {
                    label: "Your Email",
                    id: "email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                ].map(({ label, id, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium mb-2 text-gray-600"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      required
                      placeholder={placeholder}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [id]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 shadow-sm"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-600"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactSection;
