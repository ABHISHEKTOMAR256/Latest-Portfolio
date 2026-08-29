"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, MessageCircle, Download } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

import {
  FaPython,
  FaDatabase,
  FaDraftingCompass,
} from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";
import { SiC } from "react-icons/si";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Artificial Intelligence Certification",
    issuer: "Intel collab with Chandigarh University",
    date: "AUG 2025",
    credentialId: "CERT-ID-001",
    skills: ["Artificial Intelligence", "Machine Learning"],
    image: "/ai.jpeg",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "HTML, CSS Certification",
    issuer: "Cisco Networking Academy",
    date: "DEC 2025",
    credentialId: "CERT-ID-002",
    skills: ["HTML", "CSS"],
    image: "/html.jpeg",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Workshop of Google Kaggle",
    issuer: "Google",
    date: "NOV 2025",
    credentialId: "CERT-ID-003",
    skills: ["Kaggle Tools", "Data Analysis"],
    image: "/kaggle.jpeg",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Data Science Certification",
    issuer: "Infosys Springboard",
    date: "MARCH 2026",
    credentialId: "CERT-ID-004",
    skills: ["Data Science", "Python"],
    image: "/ds.jpeg",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "ECE Exhibition Workshop",
    issuer: "Lovely Professional University",
    date: "NOV 2025",
    credentialId: "CERT-ID-005",
    skills: ["Arduino", "ECE Projects"],
    image: "/ece.jpeg",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Python Programming Certification",
    issuer: "Saylor Academy",
    date: "DEC 2025",
    credentialId: "CERT-ID-006",
    skills: ["Python", "Programming Fundamentals"],
    image: "/python.jpeg",
    verifyUrl: "#",
  },
];

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/abhishek-tomar-625202294/";

const certContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const certCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [certFilter, setCertFilter] = useState<string>("All");
  const [hoveredCertId, setHoveredCertId] = useState<number | null>(null);

  const allCertSkills: string[] = [
    "All",
    ...Array.from(new Set(certifications.flatMap((c) => c.skills))),
  ];

  const filteredCerts: Certification[] =
    certFilter === "All"
      ? certifications
      : certifications.filter((c) => c.skills.includes(certFilter));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:abhitomar1608@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-black text-neutral-200 min-h-screen px-6 md:px-16">
      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.18),transparent_35%)]" />

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="tracking-[0.35em] uppercase text-blue-400 text-sm mb-6">
            AI/ML Engineer
          </p>

          <h1 className="leading-none font-extrabold">
            <span className="block text-6xl md:text-8xl text-white">
              ABHISHEK
            </span>

            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              TOMAR
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl">
            B.Tech CSE Student at LPU — AI/ML Enthusiast — Full-Stack Developer.
            Building intelligent and scalable applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
            >
              Contact Me
            </a>

            <a
              href="#certifications"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
            >
              Certifications
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
            >
              View CV
            </a>
          </div>

          {/* Download Card */}
          <a
            href="/resume.pdf"
            download="Abhishek_Tomar_Resume.pdf"
            className="mt-8 flex items-center justify-between gap-6 w-fit bg-[#08111f] border border-blue-500/20 rounded-2xl px-6 py-5 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition group"
          >
            <div>
              <h3 className="font-semibold text-white">Download CV</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Get my resume in PDF format
              </p>
            </div>

            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white group-hover:bg-blue-500 group-hover:scale-110 transition">
              <Download size={18} />
            </span>
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-neutral-400">Projects</p>
            </div>

            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-neutral-400">Years Learning</p>
            </div>

            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-neutral-400">Technologies</p>
            </div>

            <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-neutral-400">Certificates</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Blue Blob */}
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500 rounded-full blur-3xl opacity-40" />

          {/* Outer Frame */}
          <div
            className="
            absolute inset-0
            rotate-[-4deg]
            border border-blue-500
            rounded-[32px]
            shadow-[0_0_40px_rgba(59,130,246,0.6)]
            "
          />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="/PHOTO.jpg"
              alt="Profile"
              width={500}
              height={650}
              className="object-cover"
            />
          </div>

          {/* Availability Card */}
          <div className="mt-4 flex justify-center">
            <div className="mt-4 mx-auto bg-[#08111f] border border-green-500/20 rounded-xl p-4 w-full max-w-md">
              <p className="text-green-500 font-medium text-sm">
                ● Available for Opportunities
              </p>

              <p className="text-neutral-400 text-xs mt-1">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
<section
  id="about"
  className="min-h-screen flex flex-col justify-center text-center border-t border-neutral-900 relative overflow-hidden px-6"
>
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_45%)]" />

  <p className="tracking-[0.3em] uppercase text-blue-400 text-sm mb-3">
    Get To Know Me
  </p>

  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
    About Me
  </h2>

  <div className="max-w-5xl mx-auto space-y-5">
    <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
      I am <span className="font-semibold text-white">Abhishek Tomar</span>, a
      B.Tech Computer Science and Engineering student at Lovely Professional
      University with a strong interest in
      <span className="text-cyan-400 font-medium"> Artificial Intelligence</span>,
      <span className="text-cyan-400 font-medium"> Machine Learning</span>, and
      <span className="text-cyan-400 font-medium"> Software Development</span>.
      I enjoy building innovative solutions that bridge technology and
      real-world challenges.
    </p>

    <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
      My experience includes developing modern web applications using
      <span className="text-white font-medium"> Next.js</span>,
      <span className="text-white font-medium"> React</span>,
      <span className="text-white font-medium"> Tailwind CSS</span>,
      <span className="text-white font-medium"> Node.js</span>,
      <span className="text-white font-medium"> Express.js</span>, and
      <span className="text-white font-medium"> MongoDB</span>. I have also
      worked on hardware-integrated projects involving
      <span className="text-emerald-400 font-medium"> Arduino</span>,
      <span className="text-emerald-400 font-medium"> IoT Systems</span>,
      <span className="text-emerald-400 font-medium">
        Renewable Energy Harvesting
      </span>
      , and
      <span className="text-emerald-400 font-medium">
        Embedded Technologies
      </span>.
    </p>

    <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
      Beyond academics, I actively participate in hackathons, technical
      competitions, and self-learning initiatives to strengthen my
      problem-solving, programming, and project development skills.
    </p>
  </div>
</section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 border-t border-neutral-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "SUVIDHA – Smart Urban Digital Helpdesk",
              skills: "HTML, CSS, JavaScript, Node.js, MongoDB",
              image: "/image1.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 2,
              title: "AI Requirement Validator",
              skills: "Next.js, React, Tailwind CSS, AI",
              image: "/image.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 3,
              title: "Interactive Quiz Application",
              skills: "HTML, CSS, JavaScript",
              image: "/image2.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 4,
              title: "Pawmarg Trust API with Razorpay",
              skills: "Node.js, Express.js, MongoDB, Razorpay API",
              image: "/image3.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 5,
              title: "Shopping Website API with WhatsApp",
              skills: "Node.js, Express.js, WhatsApp API",
              image: "/image4.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 6,
              title: "Twin Vision",
              skills: "Next.js, React, Tailwind CSS",
              image: "/image5.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
            {
              id: 7,
              title: "Student Survival (Ongoing)",
              skills: "Next.js, React, Node.js, MongoDB",
              image: "/image6.png",
              github: "https://github.com/ABHISHEKTOMAR256",
            },
          ].map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-cyan-400 text-sm flex-grow">
                  {project.skills}
                </p>

                <div className="flex justify-end mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-white transition-all duration-300"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ==================== INTERNSHIP ==================== */}
<section id="internship" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
        Experience
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Internship
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        My current industry internship experience in Artificial Intelligence
        and Machine Learning.
      </p>
    </div>

    {/* Internship Card */}
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 shadow-2xl">

      {/* Ongoing Badge */}
      <div className="absolute top-6 right-6">
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Ongoing
        </span>
      </div>

      {/* Internship Content */}
      <div className="max-w-4xl">

        <p className="text-gray-400 text-sm mb-2">
          2026 – Present
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          AI/ML Intern
        </h3>

        <h4 className="text-lg md:text-xl font-semibold text-gray-300 mb-5">
          IBM × AICTE
        </h4>

        <p className="text-gray-400 leading-relaxed mb-7">
          Currently pursuing an Artificial Intelligence and Machine Learning
          internship through the IBM × AICTE program. The internship focuses
          on developing practical knowledge and skills in AI and Machine
          Learning through industry-oriented learning and projects.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Artificial Intelligence",
            "Machine Learning",
            "Python",
            "Data Analysis",
            "AI/ML Projects",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Offer Letter Button */}
        <a
          href="/offer%20letter.pdf"
          download="IBM-AICTE-Offer-Letter.pdf"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          {/* Download Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>

          Download Offer Letter
        </a>

      </div>
    </div>
  </div>
</section>

    
      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Certifications</h2>
        <p className="text-neutral-400 text-center mb-12">
          Verified credentials earned across various platforms.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCertSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => setCertFilter(skill)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                certFilter === skill
                  ? "border-white bg-neutral-800 text-white"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-600"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={certContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 max-w-5xl mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={certCardVariants}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredCertId(cert.id)}
              onMouseLeave={() => setHoveredCertId(null)}
              className={`relative bg-neutral-950 border rounded-2xl overflow-hidden transition ${
                hoveredCertId === cert.id ? "border-white" : "border-neutral-800"
              }`}
            >
              <div className="h-[3px] bg-blue-600" />

              <div className="relative w-full h-44 bg-neutral-900">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

                {/* LinkedIn verify icon - bottom corner */}
                <a
                  href={cert.verifyUrl && cert.verifyUrl !== "#" ? cert.verifyUrl : LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${cert.title} on LinkedIn`}
                  title="Verify on LinkedIn"
                  className="absolute bottom-2 right-2 flex items-center justify-center w-9 h-9 rounded-full bg-[#0A66C2] text-white border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.6)] hover:scale-110 transition"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>

              <div className="p-5 text-left">
                <span className="text-xs text-neutral-500">{cert.date}</span>
                <h3 className="my-2 text-white font-semibold">{cert.title}</h3>
                <p className="text-neutral-400 text-sm">{cert.issuer}</p>

                <div className="flex flex-wrap gap-1.5 my-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-neutral-900 text-neutral-300 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <span className="text-xs text-neutral-500">ID: {cert.credentialId}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
        {/* SKILLS SECTION */}
      
{/* SKILLS SECTION */}
<section id="skills" className="py-20 text-center border-t border-neutral-900">
  <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>

  <div className="flex flex-wrap justify-center gap-4">
    {[
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <RiNextjsFill />, color: "#FFFFFF" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "DBMS", icon: <FaDatabase />, color: "#4DB33D" },
      { name: "AutoCAD", icon: <FaDraftingCompass />, color: "#E51050" },
    ].map((skill) => (
      <span
        key={skill.name}
        className="flex items-center gap-3 px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-white hover:scale-105 transition text-base font-medium"
      >
        <span style={{ color: skill.color, fontSize: "2.2rem" }}>
          {skill.icon}
        </span>
        {skill.name}
      </span>
    ))}
  </div>
</section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-neutral-400 mb-8">Let&apos;s build something together.</p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 mb-10 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition resize-none"
          />

          <button
            type="submit"
            className="border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition text-sm font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:abhitomar1608@gmail.com"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <Mail size={18} /> Email
          </a>
          <a
          
            href="https://www.linkedin.com/in/abhishek-tomar-625202294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>

          <a
            href="https://github.com/ABHISHEKTOMAR256"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <FaGithub size={18} /> GitHub
          </a>

          <a
            href="https://chat.whatsapp.com/Fkp22BmW4UkKTD3pw1pjeM?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-neutral-600 border-t border-neutral-900">
        © {new Date().getFullYear()} Abhishek Tomar. All rights reserved.
      </footer>
    </main> 
  );
}