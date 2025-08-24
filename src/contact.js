import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Smartphone, MapPin, Twitter, Instagram, Linkedin, GitHub } from "react-feather";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const formUrl = "https://formspree.io/f/xqalrkrn";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        event.target.reset();
      } else {
        const result = await response.json();
        setFormError(result.error || "Something went wrong. Please check your form.");
        setIsSubmitting(false);
      }
    } catch (error) {
      setFormError("Failed to connect to the server. Please check your network.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center px-6">
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            Thank you! I'll get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">I'm always open to new opportunities and collaborations. Reach out and say hi!</p>
      </div>

      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
        <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
          
         
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative group">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 px-4 placeholder-transparent text-gray-900 dark:text-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-900 outline-none transition-all duration-300"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-indigo-500 peer-focus:text-sm transition-all duration-300 bg-white dark:bg-gray-900 px-1"
              >
                Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 px-4 placeholder-transparent text-gray-900 dark:text-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-900 outline-none transition-all duration-300"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-indigo-500 peer-focus:text-sm transition-all duration-300 bg-white dark:bg-gray-900 px-1"
              >
                Email
              </label>
            </div>

            <div className="relative group md:col-span-2">
              <textarea
                name="message"
                id="message"
                required
                className="peer w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 px-4 placeholder-transparent text-gray-900 dark:text-gray-100 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:border-indigo-500 dark:focus:ring-indigo-900 outline-none transition-all duration-300 h-32"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-indigo-500 peer-focus:text-sm transition-all duration-300 bg-white dark:bg-gray-900 px-1"
              >
                Message
              </label>
            </div>

            {formError && <div className="md:col-span-2 text-center text-red-500">{formError}</div>}

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 transition-all duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-500"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          
          <div className="mt-16 text-center space-y-4 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600 dark:text-gray-300">
            <a href="mailto:gemachistesfaye36@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail size={18} /> gemachistesfaye36@gmail.com
            </a>
            <a href="tel:+251976601074" className="flex items-center gap-2 hover:underline">
              <Smartphone size={18} /> +251976601074
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> Adaama, Ethiopia
            </div>
          </div>

          
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://x.com/GemachisTe79854" className="hover:text-indigo-500 transition-colors duration-300"><Twitter size={24} /></a>
            <a href="https://www.instagram.com/urjiiko1" className="hover:text-pink-500 transition-colors duration-300"><Instagram size={24} /></a>
            <a href="https://www.linkedin.com/in/gemachis-tesfaye-137196318" className="hover:text-blue-500 transition-colors duration-300"><Linkedin size={24} /></a>
            <a href="https://github.com/urjiiko1" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"><GitHub size={24} /></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
