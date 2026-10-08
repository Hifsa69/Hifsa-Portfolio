const experiences = [
  {
    company: "NICAT – NASTP",
    role: "Web Development Intern",
    type: "Onsite Internship",
    description: [
      "Worked on frontend web development and responsive user interfaces.",
      "Developed and improved web pages using modern web technologies.",
      "Implemented responsive layouts and user-friendly interface components.",
      "Gained practical experience in a professional onsite development environment.",
    ],
  },

  {
    company: "FlyRank AI",
    role: "Machine Learning Intern",
    type: "Remote Internship",
    description: [
      "Worked on Machine Learning concepts and AI-based solutions.",
      "Learned data preprocessing and feature engineering techniques.",
      "Built and evaluated basic Machine Learning models.",
      "Collaborated on AI research and practical projects remotely.",
    ],
  },

  {
    company: "Arch Technologies",
    role: "Data Science Intern",
    type: "Remote Internship",
    description: [
      "Worked with datasets, data preprocessing, and visualization.",
      "Applied Pandas, NumPy, and Matplotlib for data analysis.",
      "Explored statistical analysis and basic Machine Learning techniques.",
      "Developed practical data-driven solutions under supervision remotely.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">

      {/* Section Heading */}
      <div className="text-center mb-16">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
          My Journey
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
            text-purple-400
            drop-shadow-[0_0_20px_rgba(168,85,247,.6)]
          "
        >
          Experience
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          My internship experience and practical exposure across
          web development, machine learning, and data science.
        </p>

      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto space-y-8">

        {experiences.map((exp, index) => (

          <div
            key={index}
            className="
              group
              bg-white/[0.04]
              backdrop-blur-2xl
              border
              border-white/10
              rounded-3xl
              p-8

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-purple-500/60
              hover:shadow-[0_0_40px_rgba(168,85,247,.35)]
            "
          >

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

              <div>

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    text-white
                    group-hover:text-purple-300
                    transition-colors
                  "
                >
                  {exp.role}
                </h3>

                <p className="text-cyan-400 text-lg mt-2">
                  {exp.company}
                </p>

              </div>

              {/* Internship Type */}
              <span
                className="
                  w-fit
                  px-4
                  py-2
                  rounded-full

                  text-sm
                  text-cyan-300

                  bg-cyan-400/10
                  border
                  border-cyan-400/20

                  backdrop-blur-md
                "
              >
                {exp.type}
              </span>

            </div>

            {/* Description */}
            <ul className="mt-6 space-y-3 text-slate-300 list-disc pl-6">

              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="leading-7"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Experience;
