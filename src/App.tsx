import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      icon: "🤖",
      title: "LLM Evaluation Agents",
      description:
        "Architected AI evaluation agents that scaled validation from 70 cases/day to 200+ overnight, improving AI quality coverage and release confidence.",
      stack: "Python • LLM Evaluation • Agent Testing • AI QA",
    },
    {
      icon: "⚙️",
      title: "Autonomous Test Generation",
      description:
        "Built AI-powered test generation workflows from Figma designs and video recordings, reducing manual validation effort by 75%.",
      stack: "GenAI • Automation • Test Infrastructure • CI/CD",
    },
    {
      icon: "🚀",
      title: "Release Quality at Scale",
      description:
        "Defined release qualification gates, regression baselines, safety criteria, and production readiness checks for AI products serving 1B+ users.",
      stack: "Quality Strategy • Risk-Based Testing • Release Gates",
    },
  ];

  const skills = [
    "LLM Evaluation",
    "Agentic AI Testing",
    "Prompt Validation",
    "Automation Strategy",
    "Python",
    "Appium",
    "WebdriverIO",
    "REST API Testing",
    "CI/CD",
    "AWS",
    "Quality Leadership",
    "Release Readiness",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-6 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#e0e7ff,transparent_35%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
            🚀 AI QA Engineering • LLM Evaluation • Quality Leadership
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Darshan Shah
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Quality Engineering Leader building AI evaluation infrastructure,
            autonomous testing systems, and release quality programs for products
            serving 1B+ users.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Meta</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">AWS</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Google</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Facebook</span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/darshansoftwareqa/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-blue-700 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
            >
              View LinkedIn
            </a>

            <a
              href="https://github.com/dys2806"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              View GitHub
            </a>

            <a
              href="mailto:darshanyshah@gmail.com"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-6 py-12 lg:grid-cols-4">
        {[
          ["12+", "Years in Quality Engineering"],
          ["1B+", "Users Impacted"],
          ["30", "Person QA Org Led"],
          ["75%", "Manual Effort Reduced"],
        ].map(([num, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl font-extrabold text-blue-700">{num}</div>
            <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
          </motion.div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
              I help teams ship reliable AI products.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-lg leading-8 text-slate-600"
          >
            <p>
              I’m a Quality Engineering Lead specializing in GenAI, LLM
              evaluation, agentic AI testing, and scalable automation systems.
            </p>
            <p>
              My experience spans Meta, AWS, Google, and Facebook, where I’ve
              built validation architecture, release gates, automation
              frameworks, and AI quality workflows for high-impact products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Featured Impact
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            AI QA systems, automation, and release quality at scale
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">{p.icon}</div>
              <div className="mt-5 text-sm font-semibold text-blue-700">
                {p.stack}
              </div>
              <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Core Skills
          </p>
          <h2 className="mt-3 text-4xl font-extrabold">
            Where I create value
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
          Built across top-tier engineering organizations
        </h2>

        <div className="mt-10 space-y-5">
          {[
            ["Meta", "Quality Engineering Lead, GenAI", "LLM evaluation infrastructure, AI QA tooling, release qualification, and distributed QA leadership."],
            ["Amazon Web Services", "Senior Software Quality Engineer", "Validation architecture, automation frameworks, CI/CD quality gates, and AWS Honeycode launch readiness."],
            ["Google / Facebook / Ooyala", "Software Quality Engineering Roles", "Cloud, consumer platform, video streaming, and large-scale functional validation experience."],
          ].map(([company, role, detail]) => (
            <div
              key={company}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{company}</h3>
              <p className="mt-1 font-semibold text-blue-700">{role}</p>
              <p className="mt-3 leading-7 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="rounded-3xl bg-blue-700 p-10 text-white shadow-xl">
          <h2 className="text-4xl font-extrabold">
            Looking for a QA leader who understands AI systems?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            I’m open to Principal QA Engineer, AI QA Engineer, QA Lead, and
            Quality Engineering Manager roles.
          </p>

          <a
            href="mailto:darshanyshah@gmail.com"
            className="mt-8 inline-block rounded-2xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-lg"
          >
            Let’s Connect ✨
          </a>
        </div>
      </section>
    </main>
  );
}
