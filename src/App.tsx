import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Evaluation Agents",
      description:
        "Built AI diagnostic evaluation agents that automated issue triaging and scaled testing coverage from 70 to 200+ cases overnight.",
      stack: "Python • LLM Evaluation • Automation • AI Systems",
    },
    {
      title: "Prompt Regression Framework",
      description:
        "Designed a regression testing workflow for validating GenAI model quality, reducing manual verification effort significantly.",
      stack: "Python • Prompt Testing • CI/CD • Analytics",
    },
    {
      title: "Meta AI Quality Tooling",
      description:
        "Developed internal QA tooling and automation infrastructure supporting Meta AI product launches and evaluation workflows.",
      stack: "Automation • Infra • AI QA • Scale Testing",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05060a] text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-1/2 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] text-gray-400">
            AI QA ENGINEER • AUTOMATION • LLM SYSTEMS
          </p>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Darshan Shah
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Building scalable AI quality systems, automation frameworks, and evaluation
            infrastructure for next-generation AI products.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a className="rounded-xl bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition">
              LinkedIn
            </a>

            <a className="rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10 transition">
              GitHub
            </a>

            <a className="rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10 transition">
              Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="grid gap-6 px-6 max-w-6xl mx-auto md:grid-cols-4">
        {[
          ["8+", "Years Experience"],
          ["Meta", "AI Systems"],
          ["200+", "Automated Evaluations"],
          ["AWS", "Scale Infrastructure"],
        ].map(([num, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:scale-105 transition"
          >
            <div className="text-3xl font-bold">{num}</div>
            <div className="text-gray-400 mt-2">{label}</div>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10">Featured Work</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:scale-[1.02] transition"
            >
              <p className="text-xs text-gray-400 mb-3">{p.stack}</p>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-3">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
        >
          <h2 className="text-3xl font-bold">
            Let’s build AI systems that actually scale.
          </h2>

          <p className="text-gray-300 mt-4">
            Open to AI QA, automation, and LLM evaluation roles.
          </p>

          <button className="mt-8 rounded-xl bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition">
            Contact Me
          </button>
        </motion.div>
      </section>
    </main>
  );
}
