import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-purple-400">
          About Me
        </h2>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
          <p className="text-slate-300 leading-8 text-lg">
            Hi, I'm Hifsa Bashir, an undergraduate Computer Science student
            at Fazaia Bilquis College of Education for Women, Nur Khan Base.
            I am passionate about Software Development, Artificial Intelligence,
            Machine Learning, and MERN Stack Development.
          </p>

          <p className="text-slate-300 leading-8 mt-6 text-lg">
            I enjoy building modern web applications, solving real-world
            problems, and continuously improving my technical skills through
            projects, internships, and self-learning.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;