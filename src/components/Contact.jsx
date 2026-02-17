import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Your Access Key is already included here
    formData.append("access_key", "51391107-b4ec-4e15-aa5b-2e3adce409ce");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! ✅");
        event.target.reset();
        // Clear message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
      
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 focus:border-black duration-300" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30 focus:border-black duration-300" 
            required 
          />
        </div>

        <textarea 
          name="message" 
          rows="6" 
          placeholder="Enter your message" 
          className="w-full px-4 py-3 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30 focus:border-black duration-300" 
          required
        ></textarea>

        <button 
          type="submit" 
          className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/90 duration-500 dark:bg-transparent dark:border dark:border-white/50 dark:hover:bg-darkHover"
        >
          Submit now
          <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
        </button>

        <p className={`mt-4 text-center ${result.includes('✅') ? 'text-green-600' : 'text-gray-500'}`}>
          {result}
        </p>
      </form>
    </div>
  );
}