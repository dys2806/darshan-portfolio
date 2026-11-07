import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/darshanyshah/";
const GITHUB = "https://github.com/dys2806";
const EMAIL = "mailto:darshanyshah@gmail.com";

function ContactLinks() {
  const cls =
    "inline-flex items-center gap-1.5 text-blue-700 hover:underline";
  return (
    <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
      <a className={cls} href={LINKEDIN} target="_blank" rel="noreferrer">
        <Linkedin size={16} /> LinkedIn
      </a>
      <a className={cls} href={GITHUB} target="_blank" rel="noreferrer">
        <Github size={16} /> GitHub
      </a>
      <a className={cls} href={EMAIL}>
        <Mail size={16} /> Email me
      </a>
    </span>
  );
}

const impact = [
  {
    metric: "70 → 200+",
    title: "LLM Evaluation Agents",
    description:
      "AI evaluation agents that scaled validation from 70 cases a day to 200+ overnight, improving quality coverage and release confidence.",
    stack: "Python · LLM Evaluation · Agent Testing",
  },
  {
    metric: "-75%",
    title: "Autonomous Test Generation",
    description:
      "AI-powered test generation workflows from Figma designs and video recordings, reducing manual validation effort by 75%.",
    stack: "GenAI · Automation · Test Infrastructure · CI/CD",
  },
  {
    metric: "1B+",
    title: "Release Quality at Scale",
    description:
      "Release qualification gates, regression baselines, safety criteria, and production readiness checks for AI products serving 1B+ users.",
    stack: "Quality Strategy · Risk-Based Testing · Release Gates",
  },
];

const skills = [
  ["LLM Evaluation", "LLM-as-judge, benchmarking, prompt validation"],
  ["AI Safety Testing", "Red teaming, trust & safety, responsible AI"],
  ["Agentic AI Testing", "Testing systems that act, not just answer"],
  ["Evaluation Tooling", "Eval harnesses, dashboards, defect detection"],
  ["Test Infrastructure", "Automation frameworks, CI/CD signal"],
  ["Release Quality", "Quality gates, release qualification, build health"],
  ["Human-in-the-Loop", "Ground truth, rater agreement, human eval"],
  ["Test Automation", "Python automation, autonomous test generation"],
  ["Quality Strategy", "Risk-based testing, shift-left, readiness"],
];

function Logo({ src, name, muted }: { src: string; name: string; muted?: boolean }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <span className="text-base font-bold tracking-tight text-slate-700">{name}</span>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      onError={() => setErr(true)}
      className={`max-h-7 w-auto max-w-[110px] object-contain object-left ${
        muted ? "opacity-60 grayscale" : ""
      }`}
    />
  );
}

const experience = [
  {
    logo: "/logos/meta.svg",
    name: "Meta",
    dates: "2024 — Present",
    line: "Quality Engineering, GenAI — LLM evaluation, safety testing, and release quality for GenAI products at global scale.",
  },
  {
    logo: "/logos/aws.svg",
    name: "Amazon Web Services",
    dates: "2017 — 2024",
    line: "Honeycode quality from zero to GA as its first QA engineer; Kindle hardware-software test automation at Amazon.",
  },
  {
    logo: "/logos/google.svg",
    name: "Google (via EPAM)",
    dates: "2017",
    line: "Cloud IVR voice AI validation.",
    muted: true,
  },
  {
    logo: "/logos/ooyala.svg",
    name: "Ooyala",
    dates: "2016 — 2017",
    line: "Video streaming platform quality.",
    muted: true,
  },
  {
    logo: "/logos/facebook.svg",
    name: "Facebook",
    dates: "2015 — 2016",
    line: "Platform quality; test suite cut from 1,900 to 1,300 tests.",
    muted: true,
  },
  {
    logo: "/logos/agilent.svg",
    name: "Agilent Technologies",
    dates: "2015",
    line: "Test automation, early career.",
    muted: true,
  },
];

const education = [
  "M.S. in Engineering Management",
  "Bachelor of Management Studies",
];

const certs: Array<[string, string]> = [
  ["Responsible AI Dashboard & Scorecard", "Microsoft · 2024"],
  ["Project Management Foundations: Quality", "PMI · 2024"],
  ["Generative AI Overview for Project Managers", "PMI · 2024"],
  ["Introduction to Large Language Models", "Google · 2023"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        {/* HEADER / BIO */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 sm:flex-row"
        >
          <img
            src="/darshan-autumn.jpg"
            alt="Darshan Shah"
            className="w-full max-w-[260px] flex-none self-start rounded-2xl object-cover shadow-md"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Darshan Shah
            </h1>
            <p className="mt-2 text-lg font-bold text-blue-700">
              Quality Engineering · GenAI
            </p>
            <p className="mt-1 text-sm text-slate-500">Bay Area, California</p>
            <p className="mt-3 text-sm font-semibold">
              <ContactLinks />
            </p>
            <p className="mt-6 text-xl font-semibold leading-relaxed">
              AI can pass every test and still not be safe to ship. My work is
              catching that gap.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              I work in Quality Engineering for GenAI products used at global
              scale — building LLM evaluation, safety testing, and release
              gates across mobile, web, and desktop. I build evaluation agents
              and quality tooling that scaled validation from 70 manual runs a
              day to 200+ automated overnight.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Previously at AWS for about seven years, I built quality from
              zero — first QA engineer on Honeycode, from alpha to GA, and test
              automation for Kindle devices. Earlier, quality work at Google,
              Facebook, and Ooyala. 12+ years in quality engineering. M.S. in
              Engineering Management.
            </p>
          </div>
        </motion.header>

        {/* FEATURED IMPACT */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Featured Impact
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            AI QA systems, automation, and release quality at scale
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {impact.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-extrabold text-blue-700">{p.metric}</div>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{p.description}</p>
                <p className="mt-4 text-sm font-semibold text-blue-700">{p.stack}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CORE SKILLS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Core Skills
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">
            AI quality, automation, and solution-building skills
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([name, def]) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="font-bold text-slate-100">{name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{def}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Experience
          </p>
          <div className="mt-4">
            {experience.map((e) => (
              <div
                key={e.name}
                className="flex flex-col gap-2 border-t border-slate-200 py-5 sm:flex-row sm:gap-6"
              >
                <div className="flex h-8 w-[130px] flex-none items-center">
                  <Logo src={e.logo} name={e.name} muted={e.muted} />
                </div>
                <div className="flex-1">
                  <p className="font-bold">
                    {e.name}
                    <span className="float-right text-sm font-semibold text-slate-400">
                      {e.dates}
                    </span>
                  </p>
                  <p className="mt-1 leading-7 text-slate-600">{e.line}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION & CERTIFICATIONS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
            Education
          </p>
          <div className="mt-4">
            {education.map((d) => (
              <p key={d} className="border-t border-slate-200 py-3 font-bold">
                {d}
              </p>
            ))}
          </div>
          <p className="mt-10 text-sm font-bold uppercase tracking-widest text-blue-700">
            Certifications
          </p>
          <div className="mt-4">
            {certs.map(([name, meta]) => (
              <p key={name} className="border-t border-slate-200 py-3">
                <span className="font-bold">{name}</span>
                <span className="float-right text-sm font-semibold text-slate-400">
                  {meta}
                </span>
              </p>
            ))}
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-200 pt-8 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">
            Darshan Shah · Quality Engineering, GenAI · Bay Area, California
          </p>
          <p className="mt-2 font-semibold">
            <ContactLinks />
          </p>
        </footer>
      </div>
    </main>
  );
}
