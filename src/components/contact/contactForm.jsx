import { LuArrowRight } from "react-icons/lu";
// import { useState } from "react";

function ContactForm() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

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
      <div className="mt-8 space-y-6">

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
              placeholder="John Doe"
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
              placeholder="john@example.com"
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
            placeholder="Tell me about your project..."
            className="min-h-32 w-full resize-none rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)]"
          >
            Send Message
            <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ContactForm;