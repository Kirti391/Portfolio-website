import { LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

     
toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
     toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#0B1220] p-8">
      {/* Heading */}
      <div>
        <h3 className="text-2xl font-semibold text-white">
          Send me a message
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-indigo-300"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-2.5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-indigo-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full rounded-xl border border-slate-700 bg-[#111827] px-4 py-2.5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-indigo-300"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="min-h-32 w-full resize-none rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}

            {!loading && (
              <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>

      </form>
    </div>
  );
}

export default ContactForm;