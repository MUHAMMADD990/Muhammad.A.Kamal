import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Download,
  Gauge,
  Globe,
  Mail,
  MapPin,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
  CalendarRange,
  Cpu,
} from 'lucide-react'

const stats = [
  { value: '3–4', label: 'Years of hands-on experience' },
  { value: '5+', label: 'CNC control systems familiar' },
  { value: 'DMG MORI', label: 'Current mill-turn focus' },
  { value: '24/7', label: 'Mindset for process reliability' },
]

const expertise = [
  { title: 'CNC Turning', icon: Gauge },
  { title: 'CNC Milling', icon: Cpu },
  { title: 'Mill-Turn', icon: Wrench },
  { title: 'Multi-Axis', icon: Workflow },
]

const capabilities = [
  'Programming and editing G-code / M-code',
  'Machine setup, workholding, and tooling selection',
  'Multi-axis turning and complex component machining',
  'Process planning, troubleshooting, and quality focus',
]

const workflow = [
  'Engineering drawing interpretation',
  'Machining strategy and tool selection',
  'CAM programming and verification',
  'Machine setup and final inspection',
]

const projects = [
  { title: 'Flanged Shaft Housing', category: 'Industrial Project', text: '4-Axis turning and internal/external machining strategy' },
  { title: 'Motion Cam', category: 'Industrial Project', text: 'Multi-axis turning combined with wire EDM operations' },
  { title: 'Conical Roller', category: 'Industrial Project', text: 'Precision taper turning with multi-pass finishing' },
]

function App() {
  return (
    <div className="min-h-screen text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">MA</div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Muhammad Ahmed</p>
              <p className="text-xs text-slate-700">CNC Machinist</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#expertise" className="hover:text-slate-950">Expertise</a>
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#process" className="hover:text-slate-950">Process</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>

          <a
            href="/Muhammad_Ahmed_Kamal_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <Download size={16} />
            CV
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm">
                <Sparkles size={14} className="text-sky-700" />
                Precision in Every Process
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-[-0.07em] text-slate-900 sm:text-5xl lg:text-7xl">
                CNC Machinist
                <span className="mt-3 block text-sky-800">Multi-Axis &amp; Mill-Turn Specialist</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Precision machining, CNC programming, tooling strategy, and process control for complex manufacturing environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                  Explore Projects
                  <ArrowRight size={16} />
                </a>
                <a href="mailto:muhammad.a.kamal1999@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50">
                  <Mail size={16} />
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
                  <MapPin size={16} className="text-sky-700" />
                  Alexandria, Egypt
                </div>
                <a href="https://www.linkedin.com/in/muhammad-a-0016382ba" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 hover:border-sky-300 hover:text-sky-800">
                  <Globe size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-200/50 via-transparent to-slate-200/60 blur-3xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                  alt="CNC machining operation"
                  className="h-[640px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/40 bg-slate-950/70 p-4 text-white backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-sky-200">Current machine</p>
                      <p className="mt-2 text-xl font-semibold">DMG MORI CLX 450 TC</p>
                    </div>
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-sky-100">Mill-Turn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] bg-slate-50 p-5">
                <p className="text-3xl font-black tracking-[-0.06em] text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">About</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Professional CNC knowledge grounded in real production work.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                I am a CNC machining specialist with practical experience in turning, milling, mill-turn operations, and multi-axis machining. My background includes CNC programming, machine setup, tooling selection, process planning, troubleshooting, and quality-focused execution.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                I understand that successful manufacturing depends on the relationship between material behavior, machine capability, cutting conditions, tooling, and geometry control. That is the foundation of my approach.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Core strengths</p>
              <div className="mt-6 space-y-4">
                {capabilities.map((item) => (
                  <div key={item} className="flex gap-3 text-base leading-7 text-slate-200">
                    <BadgeCheck className="mt-1 text-sky-300" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Expertise</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">Technical capability across advanced machining and manufacturing operations.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {expertise.map(({ title, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-700 bg-white/5 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Precision-driven machining support with strong process understanding and setup discipline.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">Featured work</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Machining projects that combine geometry, tooling, and execution.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-800">{project.category}</span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.text}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-800">
                    View details
                    <MoveRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">Process</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">From engineering drawing to final quality.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">{index + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">Experience</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900">Current role and manufacturing focus.</h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-800"><Building2 size={18} /></div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">Precision CNC Machinist / Multi-Axis Specialist</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-600"><CalendarRange size={15} className="text-sky-700" /> April 2026 – Present</div>
                  </div>
                </div>
                <p className="text-base leading-7 text-slate-700">
                  Supporting the development and launch of a new CNC machining section, operating a DMG MORI CLX 450 TC, and working on complex Oil &amp; Gas components with mill-turn and sub-spindle operations.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Professional values</p>
              <div className="mt-6 space-y-4 text-slate-200">
                {['Technical problem solving', 'Process stability', 'Tooling awareness', 'Precision and quality mindset', 'Continuous learning and improvement'].map((item) => (
                  <div key={item} className="flex gap-3 text-base leading-7">
                    <ShieldCheck className="mt-1 text-sky-300" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-100 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">Let’s connect</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Precision machining support for modern manufacturing teams.</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="mailto:muhammad.a.kamal1999@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                  <Mail size={16} />
                  Email
                </a>
                <a href="https://www.linkedin.com/in/muhammad-a-0016382ba" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50">
                  <Globe size={16} />
                  LinkedIn
                </a>
                <a href="/Muhammad_Ahmed_Kamal_CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-3 text-sm font-semibold text-sky-900 hover:bg-sky-100">
                  <Download size={16} />
                  CV
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Email</p>
                <a href="mailto:muhammad.a.kamal1999@gmail.com" className="mt-2 block text-base font-semibold text-slate-900">muhammad.a.kamal1999@gmail.com</a>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
                <a href="https://www.linkedin.com/in/muhammad-a-0016382ba" target="_blank" rel="noreferrer" className="mt-2 block text-base font-semibold text-slate-900">muhammad-a-0016382ba</a>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Alexandria, Egypt</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Muhammad Ahmed Kamal</p>
          <p>Precision in Every Process. Continuous Improvement in Every Operation.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
