export default function Portfolio() {
  const projects = [
    {
      title: 'AI Evaluation Agents',
      description:
        'Built AI diagnostic evaluation agents that automated issue triaging and scaled testing coverage from 70 to 200+ cases overnight.',
      stack: 'Python • LLM Evaluation • Automation • AI Systems',
    },
    {
      title: 'Prompt Regression Framework',
      description:
        'Designed a regression testing workflow for validating GenAI model quality, reducing manual verification effort significantly.',
      stack: 'Python • Prompt Testing • CI/CD • Analytics',
    },
    {
      title: 'Meta AI Quality Tooling',
      description:
        'Developed internal QA tooling and automation infrastructure supporting Meta AI product launches and evaluation workflows.',
      stack: 'Automation • Infra • AI QA • Scale Testing',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
              AI Quality Engineering • LLM Evaluation • Automation Infrastructure
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Darshan Shah
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300 sm:text-2xl">
              Senior Software Quality Engineer specializing in GenAI quality systems,
              automation infrastructure, AI evaluation tooling, and scalable testing
              frameworks across Meta and AWS platforms.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/darshansoftwareqa/"
                target="_blank"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Connect on LinkedIn
              </a>

              <a
                href="https://github.com/dys2806"
                target="_blank"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View GitHub
              </a>

              <a
                href="/resume.pdf"
                className="rounded-2xl border border-white/20 px-6 py-4 text-sm font-semibold text-gray-200 transition hover:border-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE METRICS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-4 lg:px-10">
        {[
          ['8+', 'Years Experience'],
          ['Meta', 'AI Quality Engineering'],
          ['200+', 'Automated AI Evaluations'],
          ['AWS', 'Large Scale Product Quality'],
        ].map(([number, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <div className="text-4xl font-bold">{number}</div>
            <div className="mt-2 text-gray-400">{label}</div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              About
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Building quality systems for AI-first products.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-300">
            <p>
              I specialize in AI quality engineering, LLM evaluation systems,
              automation frameworks, and scalable validation infrastructure.
            </p>

            <p>
              My experience spans Meta AI initiatives, Instagram Teen Accounts,
              AWS Honeycode, mobile testing, backend automation, and intelligent
              evaluation tooling.
            </p>

            <p>
              I focus on reducing manual quality operations through automation,
              reproducible testing pipelines, and AI-assisted debugging workflows.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold">
            AI QA systems and automation tooling.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                {project.stack}
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Core Expertise
            </p>
            <h2 className="text-4xl font-bold">Technical capabilities.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              'LLM Evaluation',
              'AI Quality Engineering',
              'Python Automation',
              'Prompt Testing',
              'Mobile Automation',
              'API Testing',
              'CI/CD Pipelines',
              'Test Infrastructure',
              'Selenium & Appium',
              'AWS Services',
              'Data Validation',
              'Scalable QA Systems',
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GITHUB SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              GitHub
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Building public AI QA engineering credibility.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-lg leading-8 text-gray-300">
              Currently building a focused GitHub presence around AI evaluation
              frameworks, automation utilities, prompt regression systems, and
              scalable testing workflows.
            </p>

            <a
              href="https://github.com/dys2806"
              target="_blank"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-105"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 lg:p-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Open To Opportunities
            </p>

            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Interested in AI quality engineering, automation leadership, or
              GenAI evaluation systems?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              I’m currently exploring opportunities focused on AI quality,
              intelligent testing infrastructure, scalable automation, and LLM
              evaluation systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:darshan@example.com"
                className="rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/darshansoftwareqa/"
                target="_blank"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
