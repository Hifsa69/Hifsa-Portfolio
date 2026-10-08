import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
  { name: "SQL", icon: <FaDatabase size={40} className="text-orange-400" /> },
  { name: "C++", icon: <SiCplusplus size={40} className="text-blue-500" /> },
  { name: "Assembly", icon: <FaCode size={40} className="text-purple-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">

      <h2 className="text-5xl text-center font-bold text-purple-400 mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            text-center

            hover:border-purple-500
            hover:-translate-y-2
            hover:shadow-[0_0_35px_rgba(168,85,247,.4)]

            transition-all
            duration-500
            "
          >
            <div className="flex justify-center mb-5">
              {skill.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {skill.name}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;