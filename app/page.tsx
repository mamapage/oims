"use client";

import { useState } from "react";

const featureCards = [
  { title: "Hybrid Learning", body: "Morning and evening online classes for flexible schedules." },
  { title: "Tech-Forward Curriculum", body: "AI, Cyber Security, Digital Marketing, and Data Science." },
  { title: "Evaluation System", body: "Weekly tracking and monthly inter-college assessments." },
  { title: "Student Incentives", body: "Free laptop and programming courses for new admits." },
  { title: "Results Focus", body: "Guaranteed semester promotion with 75% attendance." },
  { title: "Exam Excellence", body: "Competitive exam coaching with structured revision." },
];

const courses = [
  { title: "BBA", subtitle: "Bachelor of Business Administration", imageClass: "course-bba" },
  { title: "BCA", subtitle: "Bachelor of Computer Application", imageClass: "course-bca" },
  { title: "BHM", subtitle: "Bachelor of Hotel Management", highlight: "Placement in 18 Months", imageClass: "course-bhm" },
  { title: "BTTM", subtitle: "Tourism and Travel Management", imageClass: "course-bttm" },
  { title: "MA-PMIR", subtitle: "Personal Management and Industrial Relations", imageClass: "course-mapmir" },
  { title: "MFC", subtitle: "Master of Finance and Control", imageClass: "course-mfc" },
  { title: "LLB", subtitle: "Law", imageClass: "course-llb" },
];

const partners = ["Infosys", "TCS", "HDFC Bank", "Axis Bank", "Birla Group", "Emami Group", "Mayfair Group"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    lastExam: "",
    marks: "",
    percentage: "",
    course: "",
    terms: false,
    kyc: "",
  });
  const whatsappLink =
    "https://wa.me/919083424697?text=I%20want%20to%20apply%20for%202026%20admission.%20Please%20share%20details.";
  const brochureLink = "/brochure.pdf";
  const canSubmit =
    form.name.trim() &&
    form.address.trim() &&
    form.phone.trim() &&
    form.lastExam.trim() &&
    form.marks.trim() &&
    form.percentage.trim() &&
    form.course.trim() &&
    form.kyc.trim() &&
    form.terms;

  return (
    <div className="bg-navy text-ivory">
      <header className="relative z-10">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo-oims.jpg" alt="OIMS Logo" className="h-20 w-20 md:h-24 md:w-24" />
            <div>
              <p className="font-serif text-2xl tracking-wide">The Oxford Institute of Management and Studies</p>
              <p className="muted text-sm">The Newton College of Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm uppercase tracking-widest">
            <span className="badge px-3 py-1">Affiliated with</span>
            <span className="text-xs md:text-sm">Utkal University / North Odisha University</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-video">
          <video autoPlay muted loop playsInline poster="/hero-poster.svg" className="opacity-70">
            <source src="/hero-campus.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[url('/hero-campus.svg')] bg-cover bg-center opacity-30" />
        </div>
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative container flex min-h-[70vh] flex-col justify-center gap-6 py-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-4 py-1 text-xs uppercase tracking-[0.3em]">
            Corporate Ivy League Education
          </div>
          <h1 className="max-w-3xl font-serif text-4xl md:text-6xl">
            Step into a World of Excellence and Career-Ready Education.
          </h1>
          <p className="max-w-2xl text-lg text-ivory/80">
            Affiliated with Utkal University / North Odisha University. Designed for ambitious students who
            want academic prestige and corporate success.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#apply"
              onClick={() => setOpen(true)}
              className="btn-primary rounded-full px-6 py-3 font-semibold"
            >
              Apply for 2026 Admission
            </a>
            <a
              href={brochureLink}
              target="_blank"
              rel="noreferrer"
              className="btn-outline rounded-full px-6 py-3 font-semibold"
            >
              Download Brochure
            </a>
          </div>
          <div className="ticker-mask mt-10 rounded-full bg-white/5">
            <div className="ticker-track animate-ticker gap-10 whitespace-nowrap px-6 py-3 text-sm uppercase tracking-widest">
              <span>Admissions Open for Feb 2026</span>
              <span>Grab 5% Early Bird Scholarship</span>
              <span>Admissions Open for Feb 2026</span>
              <span>Grab 5% Early Bird Scholarship</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
              <h2 className="font-serif text-3xl md:text-4xl">Academic prestige with corporate outcomes.</h2>
            </div>
            <p className="max-w-xl text-sm text-ivory/70">
              The program structure blends classic academic rigor with modern industry readiness and intensive performance tracking.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <div key={card.title} className="glass gold-border rounded-2xl p-6 shadow-glass">
                <div className="mb-4 h-10 w-10 rounded-full bg-gold/20" />
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-ivory/75">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section-pad">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-3xl md:text-4xl">Courses Offered</h2>
            <span className="text-sm uppercase tracking-[0.3em] text-gold">2026 Intake</span>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
            {courses.map((course) => (
              <div key={course.title} className="glass gold-border min-w-[260px] snap-start rounded-2xl p-5">
                <div className={`mb-4 h-36 rounded-xl bg-white/10 ${course.imageClass}`} />
                <p className="text-sm uppercase tracking-[0.3em] text-gold">{course.title}</p>
                <h3 className="mt-2 text-lg font-semibold">{course.subtitle}</h3>
                {course.highlight ? <p className="mt-3 text-sm text-gold">{course.highlight}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy2">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Placements and Partners</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Your Gateway to Global Brands.</h2>
            <p className="mt-4 max-w-xl text-ivory/70">
              Placement mentorship, corporate readiness, and premium hiring networks to maximize career outcomes.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="glass gold-border rounded-2xl p-6">
                <p className="text-4xl font-semibold text-gold">100%</p>
                <p className="text-sm text-ivory/70">Placement Assistance</p>
              </div>
              <div className="glass gold-border rounded-2xl p-6">
                <p className="text-4xl font-semibold text-gold">INR 3.60 Lakhs</p>
                <p className="text-sm text-ivory/70">Annual Packages Up To</p>
              </div>
            </div>
            <div className="mt-10 ticker-mask rounded-xl">
              <div className="ticker-track animate-ticker gap-8 px-6 py-4 text-sm uppercase tracking-[0.3em]">
                {partners.concat(partners).map((partner, index) => (
                  <span key={`${partner}-${index}`}>{partner}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="glass gold-border relative rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Road to Success</p>
            <h3 className="mt-3 font-serif text-2xl">A corporate ladder built for achievers.</h3>
            <div className="mt-8 space-y-4">
              {[
                "Foundation Semester and Career Grooming",
                "Skill Acceleration with Live Projects",
                "Corporate Mentorship and Interview Prep",
                "Placement Pipeline and Alumni Network",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-ivory/80">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 h-40 rounded-2xl bg-gradient-to-tr from-gold/40 via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass gold-border rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Admissions 2026</p>
            <h2 className="mt-4 font-serif text-3xl">Apply now for February 2026 intake.</h2>
            <p className="mt-4 text-sm text-ivory/70">
              Limited seats available. Early applicants are eligible for scholarship benefits and priority counseling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge rounded-full px-4 py-2 text-xs">5% Early Bird Scholarship</span>
              <span className="badge rounded-full px-4 py-2 text-xs">Flexible Learning Slots</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold"
            >
              Start Your Application
            </button>
          </div>
          <div className="grid gap-6">
            <div className="glass gold-border rounded-3xl p-8">
              <h3 className="font-serif text-2xl">Contact and Campus</h3>
              <p className="mt-2 text-sm text-ivory/70">Mecheda Bypass, Contai, Purba Medinipur</p>
              <p className="mt-3 text-sm">+91 90834 24697 / 97337 18225</p>
              <div className="mt-6 h-48 overflow-hidden rounded-2xl bg-white/5">
                <iframe
                  title="Campus Map"
                  className="h-full w-full border-0"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Mecheda%20Bypass%2C%20Contai%2C%20Purba%20Medinipur&output=embed"
                />
              </div>
            </div>
            <div className="glass gold-border rounded-3xl p-8">
              <h3 className="font-serif text-2xl">Social Proof</h3>
              <p className="mt-2 text-sm text-ivory/70">
                Follow our updates, student achievements, and placement drives.
              </p>
              <div className="mt-4 flex gap-3 text-sm">
                <a className="badge rounded-full px-4 py-2" href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a className="badge rounded-full px-4 py-2" href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a className="badge rounded-full px-4 py-2" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col gap-4 text-sm text-ivory/60 md:flex-row md:items-center md:justify-between">
          <span>© 2026 The Oxford Institute of Management and Studies</span>
          <span>Corporate Ivy League Education with Career-Ready Outcomes</span>
        </div>
      </footer>

      <a
        href="#apply"
        onClick={() => setOpen(true)}
        className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink md:block"
      >
        Apply Now
      </a>

      <a
        href="#apply"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-20 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink md:hidden"
      >
        Apply Now
      </a>

      {open ? (
        <div className="fixed inset-0 z-30 flex items-start md:items-center justify-center bg-black/60 px-4 py-6">
          <div className="glass gold-border w-full max-w-md md:max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl p-6 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Apply Now</p>
                <h3 className="mt-2 font-serif text-2xl">Lead Generation Form</h3>
              </div>
              <button onClick={() => setOpen(false)} className="text-xl">x</button>
            </div>
            <form
              className="mt-6 space-y-4"
              onSubmit={async (event) => {
                event.preventDefault();
                if (!canSubmit) return;
                setStatus("submitting");
                try {
                  const res = await fetch("/api/lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: form.name,
                      address: form.address,
                      phone: form.phone,
                      lastExam: form.lastExam,
                      marks: form.marks,
                      percentage: form.percentage,
                      course: form.course,
                      terms: form.terms,
                      kyc: form.kyc,
                      source: "Website Form",
                    }),
                  });
                  if (!res.ok) throw new Error("Failed");
                  setStatus("success");
                  setForm({
                    name: "",
                    address: "",
                    phone: "",
                    lastExam: "",
                    marks: "",
                    percentage: "",
                    course: "",
                    terms: false,
                    kyc: "",
                  });
                } catch {
                  setStatus("error");
                }
              }}
            >
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Full Name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              />
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Full Address"
                value={form.address}
                onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))}
              />
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Contact Number"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Last Passed Exam"
                value={form.lastExam}
                onChange={(event) => setForm((prev) => ({ ...prev, lastExam: event.target.value }))}
              />
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Marks Obtained"
                value={form.marks}
                onChange={(event) => setForm((prev) => ({ ...prev, marks: event.target.value }))}
              />
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="Percentage"
                value={form.percentage}
                onChange={(event) => setForm((prev) => ({ ...prev, percentage: event.target.value }))}
              />
              <select
                className="field w-full rounded-full px-4 py-3 text-sm text-ivory select-dark"
                value={form.course}
                onChange={(event) => setForm((prev) => ({ ...prev, course: event.target.value }))}
              >
                <option value="">Select Course</option>
                <option value="BBA">BBA - Bachelor of Business Administration</option>
                <option value="BCA">BCA - Bachelor of Computer Application</option>
                <option value="BHM">BHM - Bachelor of Hotel Management</option>
                <option value="BTTM">BTTM - Tourism and Travel Management</option>
                <option value="MA-PMIR">MA-PMIR - Personal Management and Industrial Relations</option>
                <option value="MFC">MFC - Master of Finance and Control</option>
                <option value="LLB">LLB - Law</option>
              </select>
              <label className="flex items-center gap-3 text-sm text-ivory/80">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(event) => setForm((prev) => ({ ...prev, terms: event.target.checked }))}
                />
                I agree to the Terms and Conditions.
              </label>
              <input
                className="field w-full rounded-full px-4 py-3 text-sm"
                placeholder="KYC ID (Aadhaar / PAN / Voter ID)"
                value={form.kyc}
                onChange={(event) => setForm((prev) => ({ ...prev, kyc: event.target.value }))}
              />
              <button
                type="submit"
                disabled={!canSubmit || status === "submitting"}
                className="btn-primary w-full rounded-full px-6 py-3 font-semibold disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Submit Request"}
              </button>
              {status === "success" ? (
                <p className="text-sm text-gold">Thank you! We received your details.</p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm text-red-300">Submission failed. Please try again.</p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
