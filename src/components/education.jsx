const Education = () => {
  return (
    <section id="education" className="py-24 px-6">

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-16">
        Education
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

        hover:border-purple-500
        hover:shadow-[0_0_40px_rgba(168,85,247,.4)]

        transition-all
        duration-500
        "
      >

        <h3 className="text-3xl font-bold text-cyan-400">
          Bachelor of Computer Science
        </h3>

        <p className="mt-5 text-lg text-slate-300">
          Fazaia Bilquis College of Education for Women
        </p>

        <p className="text-slate-400 mt-2">
          Nur Khan Base
        </p>

        <p className="mt-5 text-purple-400 font-semibold">
          Expected Graduation: September 2028
        </p>

      </div>

    </section>
  );
};

export default Education;