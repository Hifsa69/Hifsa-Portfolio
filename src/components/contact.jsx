import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-16">
        Contact Me
      </h2>

      <div
        className="
        max-w-4xl
        mx-auto

        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        rounded-3xl

        p-10

        hover:shadow-[0_0_40px_rgba(168,85,247,.35)]

        transition-all
        "
      >

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-purple-500"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-purple-500"
          ></textarea>

          <button
            className="
            w-full

            py-4

            rounded-xl

            font-semibold

            bg-gradient-to-r

            from-purple-600
            to-cyan-500

            hover:scale-105

            transition-all

            duration-300
            "
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-8 mt-10">

          <a
            href="mailto:hifsabashir697@gmail.com"
            className="text-3xl hover:text-purple-400"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Hifsa69"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-purple-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hifsa-bashir-574442367"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-purple-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;