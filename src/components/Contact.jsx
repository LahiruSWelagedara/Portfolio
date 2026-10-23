import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lswelagedara2001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message...");
    const formData = new FormData(event.target);
    formData.append("access_key", "51391107-b4ec-4e15-aa5b-2e3adce409ce");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully. ✅");
        event.target.reset();
        setTimeout(() => setResult(""), 6000);
      } else {
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="w-full px-6 lg:px-16 py-20 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 font-Outfit">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            I am currently open to Software Engineering opportunities, internships, and collaborative tech projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info Card (Spans 5 cols) */}
          <div className="lg:col-span-5 glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-Outfit mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Feel free to reach out directly through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-xl">✉️</span>
                  <div className="overflow-hidden">
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">Email</span>
                    <a href="mailto:lswelagedara2001@gmail.com" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600 truncate block">
                      lswelagedara2001@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 font-medium transition shrink-0"
                  title="Copy email"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">Phone</span>
                  <a href="tel:+94797599319" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-600">
                    +94 79 759 9319
                  </a>
                </div>
              </div>

              {/* Connect via GitHub & LinkedIn */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://github.com/LahiruSWelagedara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200"
                  title="Lahiru's GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/lahiru-welagedara-6a719643b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#0A66C2]/50 flex items-center justify-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] transition duration-200"
                  title="Lahiru's LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">Location</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>

            {/* Resume button in contact */}
            <div className="pt-2">
              <a
                href="./assets/Lahiru_Welagedara_Resume.pdf"
                download="Lahiru_Welagedara_Resume.pdf"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-purple-500/30 hover:scale-[1.02] transition duration-300"
              >
                <span>Download My Resume (PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right: Message Form (Spans 7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-Outfit mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Have a question or role in mind? Drop a message and I'll get back to you promptly.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name here"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 text-sm transition"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email here"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 text-sm transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject here"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 text-sm transition"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider block mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message here"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 text-sm transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span>→</span>
              </button>

              {result && (
                <div className={`p-3 rounded-xl text-xs font-medium text-center ${result.includes('✅')
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                  }`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}