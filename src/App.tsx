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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            AI QA Engineering • LLM Evaluation • Automation Systems
          </div>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Darshan Shah
          </h1>

          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Building scalable AI quality systems, automation frameworks, and
            evaluation pipelines for next-gen AI products.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/darshansoftwareqa/"
              className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/dys2806"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-20 lg:grid-cols-4">
        {[
          ["8+", "Years Experience"],
          ["Meta", "AI Quality"],
          ["200+", "Automated Tests"],
          ["AWS", "Scale Systems"],
        ].map(([num, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:scale-105 transition"
          >
            <div className="text-3xl font-bold">{num}</div>
            <div className="text-gray-400">{label}</div>
          </motion.div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <h2 className="text-4xl font-bold">
            AI Quality Engineering & Automation
          </h2>

          <div className="space-y-4 text-gray-300 leading-7">
            <p>
              I specialize in building AI evaluation systems, automation
              frameworks, and scalable testing infrastructure.
            </p>
            <p>
              My work spans Meta AI, AWS systems, mobile automation, and GenAI
              evaluation pipelines.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">Featured Work</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:scale-[1.03] transition"
            >
              <div className="text-sm text-gray-400 mb-3">{p.stack}</div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-gray-400">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <h2 className="text-3xl font-bold">
            Open to AI Engineering Roles
          </h2>
          <p className="mt-4 text-gray-400">
            Let’s build scalable AI systems together.
          </p>

          <a
            href="mailto:darshan@example.com"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-black hover:scale-105 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </main>
  );
}
