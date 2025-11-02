import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const contact = {
    name: "Pushkar Talwalkar",
    phone: "(602) 804-9024",
    email: "ptalwalk@asu.edu",
    linkedin: "https://www.linkedin.com/in/pushkar-talwalkar/",
    github: "https://github.com/pstalwalkar7",
    resume: "/PushkarTalwalkar.pdf" // put the uploaded PDF in your public folder
  };

  const experiences = [
    {
      role: "Software Development Engineer (Full-Stack)",
      company: "Visa Inc.",
      location: "Bangalore, India",
      range: "June 2022 - June 2024",
      bullets: [
        "Designed and implemented Privacy Portals (30K+ LoC), driving global privacy compliance with GDPR & other policies.",
        "Refactored backend from NodeJS to Spring Boot (20K+ LoC) in 3 months, improving performance and scalability.",
        "Led accessibility enhancements to achieve 100% ADA & WCAG compliance.",
        "Automated release testing using Cypress — reduced manual test effort by 70%.",
        "Built 2 Generative AI POCs and resolved 100+ critical bugs to improve reliability."
      ]
    },
    {
      role: "Research and Development Intern",
      company: "Eigenlytics Data Solutions",
      location: "Remote",
      range: "May 2021 - June 2021",
      bullets: [
        "Engineered an OCR system for financial documents achieving ~90% classification accuracy.",
        "Optimized convolutional autoencoders to remove 91% of grid lines.",
        "Generated 10K+ synthetic images to boost model performance by 50%."
      ]
    }
  ];

  const projects = [
    {
      title: "Learning App For Kids with Autism",
      tech: "NodeJS, Express, MySQL",
      range: "Jan 2022 - May 2022",
      desc: "Scheduling & progress-tracking app used by 250+ children and 30+ therapists. Implemented RESTful APIs and analytics to streamline reports."
    },
    {
      title: "Financial Document Summariser",
      tech: "Python, Flask, Docker",
      range: "Aug 2021 - Dec 2021",
      desc: "NLP-based tool to summarize complex financial documents, reducing review time by 50%. Built a 4k+ LoC system using ML and deep learning."
    },
    {
      title: "Fingerprint Classification System",
      tech: "Python, Scikit-learn",
      range: "Oct 2020 - Dec 2020",
      desc: "Extracted HOG features and trained SVMs / Neural Nets achieving up to 75% accuracy. Applied morphological ops to enhance results."
    }
  ];

  const skills = [
    "Python","Java","JavaScript","React","Node.js","Spring Boot","SQL","Docker","Kubernetes","C/C++","PyTorch","Cypress","AWS"
  ];

  const achievements = [
    "US Chess Federation Candidate Master",
    "Teaching Assistant Associate @ IIIT-H (guided 60+ students)",
    "Represented ASU at Pan-American Chess Competition 2025",
    "Chess Club Coordinator @ IIIT-H; represented Qatar at CBSE Chess Nationals 2017"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Pushkar Talwalkar</h1>
            <p className="text-sm text-gray-600">Software Engineer — Full-Stack | ML & Backend | Accessibility & Automation</p>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#experience" className="text-sm hover:underline">Experience</a>
            <a href="#skills" className="text-sm hover:underline">Skills</a>
            <a href="#contact" className="text-sm btn-link bg-sky-600 text-white px-3 py-2 rounded shadow-sm hover:opacity-95">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold leading-tight">Hi — I’m Pushkar. I build scalable, accessible backend systems and delightful frontends.</h2>
            <p className="mt-4 text-gray-700">Masters in Computer Science (ASU) • Experienced Full-Stack Engineer at Visa • Candidate Master (US Chess Federation). I focus on backend reliability, automation, and accessible UX.</p>

            <div className="mt-6 flex items-center gap-3">
              <a href={contact.resume} className="text-sm px-4 py-2 border rounded hover:bg-gray-100" download>
                Download Résumé
              </a>
              <a href={contact.github} className="text-sm px-4 py-2 border rounded hover:bg-gray-100" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={contact.linkedin} className="text-sm px-4 py-2 border rounded hover:bg-gray-100" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <ul className="mt-8 text-sm space-y-2 text-gray-700">
              <li><strong>Location:</strong> Tempe, AZ (ASU)</li>
              <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></li>
              <li><strong>Phone:</strong> {contact.phone}</li>
            </ul>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-lg font-medium">Quick Snapshot</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm text-gray-600">Selected Tech</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((s) => (
                    <span key={s} className="text-xs px-2 py-1 border rounded">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Highlights</p>
                <ul className="mt-2 text-sm list-disc ml-5 text-gray-700">
                  <li>Backend refactor & performance wins — NodeJS → Spring Boot migration (20K+ LoC)</li>
                  <li>Automated testing with Cypress; large scale privacy portals</li>
                  <li>Accessibility & WCAG compliance leadership</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article key={p.title} whileHover={{ y: -6 }} className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-medium">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{p.tech} • {p.range}</p>
                <p className="mt-3 text-gray-700 text-sm">{p.desc}</p>
                <div className="mt-4 text-xs text-gray-500">Status: prototype / research</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-6 space-y-6">
            {experiences.map((exp) => (
              <article key={exp.role} className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-lg">{exp.role}</h4>
                    <div className="text-sm text-gray-600">{exp.company} — {exp.location}</div>
                    <div className="text-xs text-gray-500 mt-1">{exp.range}</div>
                  </div>
                </div>
                <ul className="mt-4 list-disc ml-5 text-gray-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 border rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Achievements</h3>
            <ul className="mt-4 list-disc ml-5 text-gray-700">
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="mt-16 bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-700">I’m open to full-time roles in software engineering — backend, full-stack, or applied ML engineering. Prefer roles that value reliability, automation and accessible products.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Get in touch</h4>
              <p className="mt-2 text-sm text-gray-700">Email: <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
              <p className="text-sm text-gray-700">Phone: {contact.phone}</p>
              <div className="mt-4 flex gap-3">
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border rounded">LinkedIn</a>
                <a href={contact.github} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border rounded">GitHub</a>
              </div>
            </div>

            <div>
              <h4 className="font-medium">Quick message</h4>
              <form className="mt-2 flex flex-col gap-3" onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = (form.querySelector('#name')).value || 'Recruiter';
                const body = encodeURIComponent((form.querySelector('#message')).value || 'Hello');
                window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Opportunity from portfolio - ' + name)}&body=${body}`;
              }}>
                <input id="name" placeholder="Your name" className="border px-3 py-2 rounded" />
                <input id="email" placeholder="Your email" className="border px-3 py-2 rounded" />
                <textarea id="message" placeholder="A short message or role description" rows={4} className="border px-3 py-2 rounded"></textarea>
                <button type="submit" className="w-max px-4 py-2 bg-sky-600 text-white rounded">Send</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} Pushkar Talwalkar — <a href={contact.resume} download className="underline">Résumé</a></footer>
      </main>
    </div>
  );
}