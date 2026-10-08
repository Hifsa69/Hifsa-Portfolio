import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="text-center lg:text-left">

          {/* Greeting */}
          <p className="text-cyan-400 text-lg font-semibold mb-3">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Hifsa</span>{" "}
            <span className="text-purple-400">
              Bashir
            </span>
          </h1>

          {/* Main Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-5 font-semibold leading-relaxed">
            <span className="text-cyan-300">
              AI Enthusiast
            </span>{" "}
            <span className="text-slate-500">•</span>{" "}
            <span className="text-purple-300">
              MERN Stack Developer
            </span>{" "}
            <span className="text-slate-500">•</span>{" "}
            <span className="text-cyan-300">
              Web Developer
            </span>
          </h2>

          {/* Education */}
          <p className="text-slate-400 mt-3 text-lg">
            Computer Science Undergraduate
          </p>

          {/* Short Description */}
          <p className="text-slate-300 mt-5 leading-7 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Passionate about building modern web applications and exploring{" "}
            <span className="text-cyan-400">
              Machine Learning
            </span>
            ,{" "}
            <span className="text-purple-400">
              Data Science
            </span>
            , and{" "}
            <span className="text-pink-400">
              Flutter Development
            </span>
            .
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-sm backdrop-blur-xl">
              🤖 Machine Learning
            </span>

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm backdrop-blur-xl">
              📊 Data Science
            </span>

            <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-sm backdrop-blur-xl">
              💻 MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm backdrop-blur-xl">
              📱 Flutter
            </span>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

            <a
              href="/resume.pdf"
              download
              className="
                group
                flex items-center gap-3
                px-7 py-4
                rounded-xl
                bg-gradient-to-r from-purple-600 to-cyan-500
                hover:scale-105
                transition-all duration-300
                shadow-[0_0_30px_rgba(168,85,247,.35)]
              "
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>

            <a
              href="#contact"
              className="
                flex items-center gap-3
                px-7 py-4
                rounded-xl
                border border-purple-500/60
                bg-white/5
                backdrop-blur-xl
                hover:bg-purple-600/20
                hover:border-purple-400
                hover:scale-105
                transition-all duration-300
              "
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-5 mt-5">

            <a
              href="https://github.com/Hifsa69"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white text-xl transition-all hover:scale-125"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hifsa-bashir-574442367"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 text-xl transition-all hover:scale-125"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Outer Glow */}
            <div
              className="
                absolute
                -inset-12
                rounded-full
                bg-gradient-to-r
                from-purple-600
                via-pink-500
                to-cyan-500
                blur-[70px]
                opacity-25
                animate-pulse
              "
            />

            {/* Neon Ring */}
            <div
              className="
                relative
                w-72 h-72
                sm:w-80 sm:h-80
                md:w-[380px] md:h-[380px]
                rounded-full
                p-[4px]
                bg-gradient-to-r
                from-purple-500
                via-pink-400
                to-cyan-400
                shadow-[0_0_70px_rgba(168,85,247,.35)]
              "
            >

              {/* Profile Image */}
              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  bg-slate-950
                  border-4
                  border-slate-950
                "
              >
                <img
                  src="/profile.jpg"
                  alt="Hifsa Bashir"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>

            {/* AI Card */}
            <div
              className="
                absolute
                -top-8
                -left-8
                px-5
                py-3
                rounded-2xl
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-purple-400/30
                shadow-[0_0_25px_rgba(168,85,247,.2)]
                animate-bounce
                [animation-duration:3s]
              "
            >
              <p className="text-xs text-slate-400">
                CURRENT FOCUS
              </p>

              <p className="text-purple-300 font-semibold">
                🤖 AI & ML
              </p>
            </div>

            {/* MERN Card */}
            <div
              className="
                absolute
                -bottom-8
                -right-8
                px-5
                py-3
                rounded-2xl
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-cyan-400/30
                shadow-[0_0_25px_rgba(34,211,238,.2)]
                animate-bounce
                [animation-duration:4s]
              "
            >
              <p className="text-xs text-slate-400">
                DEVELOPMENT
              </p>

              <p className="text-cyan-300 font-semibold">
                💻 MERN Stack
              </p>
            </div>

            {/* Flutter Badge */}
            <div
              className="
                absolute
                top-1/2
                -right-14
                hidden md:flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                text-sm
                text-slate-300
              "
            >
              📱 Flutter
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;