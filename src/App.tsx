function Portfolio() {
  const projects = [
    {
      title: 'AI Diagnostic Evaluation Agents',
      description:
        'Built 3 Python-based AI diagnostic agents at Meta that automated defect reproduction and scaled issue detection from 70 cases/day to 200+ overnight, reducing manual investigation time by ~75%.',
      tech: ['Python', 'LLM Evaluation', 'Automation', 'AI Tooling'],
    },
    {
      title: 'Automated Test Case Generation System',
      description:
        'Developed internal tooling that generated test cases from Figma designs and video inputs, accelerating QA workflows and improving engineering turnaround speed.',
      tech: ['Python', 'Computer Vision', 'Automation'],
    },
    {
      title: 'AWS Honeycode Quality Infrastructure',
      description:
        'Led end-to-end quality engineering for AWS Honeycode from alpha through GA launch, including automation strategy, CI/CD quality gates, and release validation.',
      tech: ['AWS', 'Python', 'CI/CD', 'Linux'],
    },
  ];

  const skills = [
    'Python Automation',
    'AI Quality Engineering',
    'LLM Evaluation',
    'GenAI Testing',
    'WebdriverIO',
    'Appium',
    'AWS',
    'Linux',
    'CI/CD',
    'REST APIs',
    'Docker',
    'JavaScript',
    'TypeScript',
    'Root Cause Analysis',
    'Automation Frameworks',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Darshan Shah</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 mb-6">
              AI Quality Engineering • Meta • AWS
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Building AI quality systems that scale.
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
              QA Engineering Lead with 12+ years of experience across Meta, AWS, Google, and Facebook.
              Specializing in AI evaluation tooling, GenAI quality systems, automation infrastructure,
              and scalable diagnostic frameworks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/dys2806"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/darshansoftwareqa/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold">12+</p>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div>
                <p className="text-4xl font-bold">200+</p>
                <p className="text-gray-400 mt-2">Issues Detected Overnight</p>
              </div>

              <div>
                <p className="text-4xl font-bold">75%</p>
                <p className="text-gray-400 mt-2">Reduction in Investigation Time</p>
              </div>

              <div>
                <p className="text-4xl font-bold">1B+</p>
                <p className="text-gray-400 mt-2">Users Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">About</p>
            <h2 className="text-4xl font-bold mt-4">Builder mindset applied to quality engineering.</h2>
          </div>

          <div className="lg:col-span-2 text-gray-300 leading-relaxed text-lg space-y-6">
            <p>
              I currently lead AI quality engineering initiatives at Meta, where I build Python-based
              evaluation agents, automation systems, and diagnostic tooling that improve model quality
              workflows at scale.
            </p>

            <p>
              My work spans GenAI evaluation, automated defect reproduction, human-in-the-loop validation,
              release quality systems, and scalable QA infrastructure across products used by billions of users.
            </p>

            <p>
              Across Meta, AWS, Google, and Facebook, I've focused on creating systems that make testing
              faster, smarter, and more reliable.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Experience</p>
            <h2 className="text-4xl font-bold mt-4">Career Highlights</h2>
          </div>
        </div>

        <div className="space-y-10">
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Meta</h3>
                <p className="text-gray-400 mt-1">QA Engineering Lead • 2024 — Present</p>
              </div>
              <div className="text-sm text-gray-400">Menlo Park, California</div>
            </div>

            <ul className="mt-6 space-y-4 text-gray-300 leading-relaxed list-disc pl-5">
              <li>Built AI diagnostic agents scaling issue detection from 70 to 200+ cases overnight.</li>
              <li>Developed internal automation tools accelerating root-cause analysis workflows.</li>
              <li>Led quality validation for Meta AI Spark features across global release cycles.</li>
              <li>Managed distributed QA operations across US and offshore teams.</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Amazon Web Services</h3>
                <p className="text-gray-400 mt-1">Software Engineer, Quality • 2017 — 2024</p>
              </div>
              <div className="text-sm text-gray-400">Seattle, Washington</div>
            </div>

            <ul className="mt-6 space-y-4 text-gray-300 leading-relaxed list-disc pl-5">
              <li>Owned end-to-end quality engineering for AWS Honeycode.</li>
              <li>Designed automation templates and CI/CD quality infrastructure.</li>
              <li>Expanded API and UI automation coverage across SaaS release cycles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Projects</p>
          <h2 className="text-4xl font-bold mt-4">AI & Automation Work</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>

              <p className="mt-5 text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Skills</p>
          <h2 className="text-4xl font-bold mt-4">Technical Expertise</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Contact</p>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Interested in AI quality engineering, automation, or GenAI evaluation?
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            I'm currently focused on building scalable AI quality systems, automation tooling,
            and evaluation frameworks that improve engineering velocity and product reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:darshanyshah@gmail.com"
              className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/dys2806"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return <Portfolio />;
}

export default App;
