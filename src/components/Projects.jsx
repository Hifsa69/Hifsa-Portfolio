import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Link Library Management System",
      tech: "Assembly Language • DOSBox • COAL",
      description:
        "A library management system developed in Assembly Language for managing books, users, and issue/return records through a menu-driven application.",
      github:
        "https://github.com/Hifsa69/Cloud-Link-Library-Management-System",
      demo: "https://www.youtube.com/watch?v=qsh5bpZuSoA",
      category: "Academic Project",
    },

    {
      title: "Beauty Bliss E-Commerce Website",
      tech: "MERN Stack • MongoDB • Express • React • Node.js",
      description:
        "A full-stack e-commerce project focused on creating a modern online shopping experience with product browsing, shopping functionality, and a responsive interface.",
      github: "#",
      demo: "#",
      category: "Full Stack",
    },

    {
      title: "DevSynx AI Content Machine",
      tech: "React • Vite • JavaScript • Tailwind CSS",
      description:
        "A modern web application designed as an AI content machine, providing a polished interface for creating and managing digital content.",
      github:
        "https://github.com/Hifsa69/DevSynx-Frontend",
      demo:
        "https://devsynx-ai-content-machine-pt4p7vq57-hifzyl.vercel.app/",
      category: "AI Web Application",
    },

    {
      title: "Dev Assist",
      tech: "React • Vite • JavaScript • Tailwind CSS",
      description:
        "A modern web application built with React and Vite, designed with a professional interface and focused on providing digital assistance through a responsive web experience.",
      github:
        "https://github.com/Hifsa69/Dev-Assist",
      demo:
        "https://dev-assist-dwn3.vercel.app/",
      category: "Web Application",
    },

    {
      title: "Event Management",
      tech: "React • Vite • TypeScript • Web Development",
      description:
        "A modern event management web application developed with a React and Vite-based frontend, providing a structured interface for an event-focused digital experience.",
      github:
        "https://github.com/Hifsa69/Event-Management",
      demo: "#",
      category: "Web Application",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">

      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
          My Work
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
            text-white
            drop-shadow-[0_0_20px_rgba(168,85,247,.5)]
          "
        >
          Featured Projects
        </h2>

        <p className="text-slate-400 mt-5 leading-7">
          A collection of academic and personal projects showcasing my
          experience in software development, web development, and
          modern frontend technologies.
        </p>

      </div>

      {/* Projects Grid */}
      <div
        className="
          grid
          md:grid-cols-2
          gap-8
          max-w-6xl
          mx-auto
          mt-16
        "
      >

        {projects.map((project, index) => (

          <div
            key={project.title}
            className="
              group
              bg-white/[0.04]
              backdrop-blur-2xl
              border
              border-white/10
              rounded-3xl
              overflow-hidden

              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-purple-500/60
              hover:shadow-[0_0_45px_rgba(168,85,247,.25)]
            "
          >

            {/* Project Preview */}
            <div
              className="
                relative
                h-56
                overflow-hidden
                bg-gradient-to-br
                from-purple-900/80
                via-slate-900
                to-cyan-900/70
              "
            >

              {/* Purple Glow */}
              <div
                className="
                  absolute
                  w-40
                  h-40
                  bg-purple-500/20
                  blur-3xl
                  rounded-full
                  top-5
                  left-10
                  group-hover:scale-150
                  transition-transform
                  duration-700
                "
              />

              {/* Cyan Glow */}
              <div
                className="
                  absolute
                  w-40
                  h-40
                  bg-cyan-500/20
                  blur-3xl
                  rounded-full
                  bottom-0
                  right-5
                  group-hover:scale-150
                  transition-transform
                  duration-700
                "
              />

              {/* Project Number */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >

                <span className="text-6xl font-black text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    absolute
                    text-lg
                    font-semibold
                    text-white/80
                  "
                >
                  Project Preview
                </span>

              </div>

              {/* Category */}
              <span
                className="
                  absolute
                  top-5
                  right-5
                  z-20

                  px-3
                  py-1

                  text-xs
                  font-medium

                  rounded-full

                  bg-black/30
                  backdrop-blur-md

                  border
                  border-white/10

                  text-cyan-300
                "
              >
                {project.category}
              </span>

            </div>

            {/* Project Content */}
            <div className="p-7">

              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-purple-300
                  transition-colors
                "
              >
                {project.title}
              </h3>

              {/* Technologies */}
              <p className="text-cyan-400 text-sm font-medium mt-3">
                {project.tech}
              </p>

              {/* Description */}
              <p className="text-slate-400 mt-5 leading-7 text-sm">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-7">

                {/* GitHub */}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2

                      px-5
                      py-3

                      rounded-xl

                      bg-white/5
                      backdrop-blur-xl

                      border
                      border-white/10

                      text-white

                      hover:border-purple-500
                      hover:bg-purple-500/10
                      hover:shadow-[0_0_25px_rgba(168,85,247,.35)]

                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {/* Live Demo */}
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2

                      px-5
                      py-3

                      rounded-xl

                      bg-gradient-to-r
                      from-purple-600
                      to-cyan-500

                      text-white

                      hover:scale-105
                      hover:shadow-[0_0_25px_rgba(34,211,238,.35)]

                      transition-all
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;
