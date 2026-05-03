"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, ShieldCheck, Settings, Server,
  Smartphone, Brain, PenTool,
  Eye, Download, ArrowRight,
  FileCode2, Code2, Layout, PieChart,
  ZoomIn, X, Trophy, BookOpen
} from "lucide-react";

import { SiPython, SiR } from "react-icons/si";
import { FaDatabase, FaAws, FaChartBar } from "react-icons/fa";

// --- SMART IMAGE COMPONENT ---
const SafeImage = ({ src, alt, className, objectFit = "cover" }: { src: string, alt: string, className?: string, objectFit?: string }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-900 border border-gray-800 text-gray-500 font-mono text-[10px] sm:text-xs text-center p-4 w-full h-full ${className}`}>
        <span>Missing File:</span>
        <span className="text-red-400 break-all my-1">{src}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setHasError(true)} 
      className={`${className} object-${objectFit}`} 
      loading="lazy"
    />
  );
};

// --- DATA SCULPTING ---
const roles = ["Data Analyst", "AI Engineer", "Automation Engineer", "Software Engineer"];

const experiences = [
  {
    title: "AI Intern",
    company: "Eaton",
    logoPath: "/Photos/Eaton.png", 
    date: "Oct 2025 — Apr 2026",
    location: "Pune, India (On-site)",
    points: [
      "Automation & AI: Leading initiatives to automate workflows and integrate AI solutions for Jira, SolidWorks, and Enovia.",
      "Process Optimization: Developing scripts to enhance data interoperability between engineering tools and management platforms."
    ]
  },
  {
    title: "Intern Developer & Jr. Data Analyst",
    company: "DigiWorld Creative",
    logoPath: "/Photos/Digiworld.png", 
    date: "Jan 2025 — Feb 2025",
    location: "Pune, India",
    points: [
      "Contributed to the development of Frontend, Backend, and Database technical stacks, ensuring system stability.",
      "Conducted detailed analysis of book sales across different countries to identify market trends."
    ]
  }
];

const mainProjects = [
  {
    title: "Glaucoma & Diabetic Retinopathy Detection",
    desc: "Sponsorship project from Desai Eye Hospital. Developed an ML model for real-time monitoring of chronic eye conditions.",
    tags: ["Python", "Machine Learning", "DBMS"],
    image: "/Photos/glaucoma.png" 
  },
  {
    title: "Justice Chatbot (Dept. of Justice)",
    desc: "AI-powered chatbot utilizing NLP to automate responses for the Department of Justice, fetching legal guidelines instantly.",
    tags: ["Python", "NLP", "Flask"],
    image: "/Photos/justice.png" 
  },
  {
    title: "CAD Automation 3D to 2D",
    desc: "Engineered an industrial automation utility to convert 3D CAD models into 2D engineering drawings programmatically.",
    tags: ["C#", "SolidWorks API", "Automation"],
    image: "/Photos/cad.png" 
  }
];

const moreProjects = [
  {
    icon: <Settings className="text-primary w-8 h-8 mb-4" />,
    title: "API Jira Automation",
    desc: "Developed a robust automation pipeline to manage and sync Jira tickets programmatically via REST APIs.",
    tags: ["C#", "REST API", "Jira"],
    archImage: "/Photos/Jira.png" 
  },
  {
    icon: <Cloud className="text-primary w-8 h-8 mb-4" />,
    title: "AWS Data Processing Pipeline",
    desc: "Serverless data engineering pipeline processing real-time feeds using Lambda, S3, and Glue.",
    tags: ["AWS", "Python", "ETL"],
    archImage: "/Photos/AWS_data.png" 
  },
  {
    icon: <ShieldCheck className="text-primary w-8 h-8 mb-4" />,
    title: "Phishing Link Detection",
    desc: "Machine learning application leveraging Random Forest to classify and block malicious URLs in real-time.",
    tags: ["Python", "Scikit-Learn", "Cybersecurity"],
    archImage: "/Photos/Phishing.png" 
  }
];

const allSkills = [
  { name: "Python", subtitle: "Software Engineering", icon: <SiPython size={32} className="text-gray-400 mb-3" />, cat: ["All", "AI Engineer", "Automation Engineer", "Software Engineer"] },
  { name: "C#", subtitle: "Software Engineering", icon: <FileCode2 size={32} className="text-gray-400 mb-3" />, cat: ["All", "Software Engineer", "Automation Engineer"] },
  { name: "C++", subtitle: "Software Engineering", icon: <Code2 size={32} className="text-gray-400 mb-3" />, cat: ["All", "Software Engineer"] },
  { name: "SQL", subtitle: "Data Analysis", icon: <FaDatabase size={32} className="text-gray-400 mb-3" />, cat: ["All", "Data Analyst", "Software Engineer"] },
  { name: "R Script", subtitle: "Data Analysis", icon: <SiR size={32} className="text-gray-400 mb-3" />, cat: ["All", "Data Analyst", "AI Engineer"] },
  { name: "JavaScript", subtitle: "Web Dev", icon: <FileCode2 size={32} className="text-gray-400 mb-3" />, cat: ["All", "Software Engineer"] },
  { name: "HTML/CSS", subtitle: "Web Dev", icon: <Layout size={32} className="text-gray-400 mb-3" />, cat: ["All", "Software Engineer"] },
  { name: "PowerBI", subtitle: "Data Analysis", icon: <PieChart size={32} className="text-gray-400 mb-3" />, cat: ["All", "Data Analyst"] },
  { name: "Tableau", subtitle: "Data Analysis", icon: <FaChartBar size={32} className="text-gray-400 mb-3" />, cat: ["All", "Data Analyst"] },
  { name: "AWS Cloud", subtitle: "Cloud Infrastructure", icon: <FaAws size={32} className="text-gray-400 mb-3" />, cat: ["All", "AI Engineer", "Software Engineer"] },
  { name: "PowerApps", subtitle: "Automation", icon: <Smartphone size={32} className="text-gray-400 mb-3" />, cat: ["All", "Automation Engineer"] },
  { name: "PLM Tools", subtitle: "Automation", icon: <Settings size={32} className="text-gray-400 mb-3" />, cat: ["All", "Automation Engineer"] },
  { name: "CAD Tools", subtitle: "Automation", icon: <PenTool size={32} className="text-gray-400 mb-3" />, cat: ["All", "Automation Engineer"] },
  { name: "AI/ML Models", subtitle: "Artificial Intelligence", icon: <Brain size={32} className="text-gray-400 mb-3" />, cat: ["All", "AI Engineer"] },
];

const certs = [
  { title: "AWS Academy Graduate - Cloud Foundations", year: "2025", issuer: "AWS" },
  { title: "AWS Academy Graduate - Machine Learning", year: "2025", issuer: "AWS" },
  { title: "Data Visualization in R", year: "2025", issuer: "Johns Hopkins" },
  { title: "Fundamentals of Visualization with Tableau", year: "2025", issuer: "UC Davis" },
  { title: "Google GenAI & Data Foundations", year: "2024", issuer: "Google" },
  { title: "Database Management Systems", year: "2024", issuer: "Google" },
  { title: "IBM Introduction to Machine Learning", year: "2024", issuer: "IBM" },
  { title: "Networking Basics", year: "2024", issuer: "Cisco" },
  { title: "UI/UX Design Hackathon", year: "2024", issuer: "Microsoft Learn" },
  { title: "Linguaskill Test Report", year: "2024", issuer: "Cambridge" }
];

const achievements = [
  {
    title: "IEEE Research Paper Published",
    desc: "Authored and published a research paper in IEEE detailing the development of an ML Model for Glaucoma and Diabetic Retinopathy detection.",
    date: "2024",
    icon: <BookOpen size={28} className="text-primary" />
  },
  {
    title: "3rd Rank - Smart India Hackathon (SIH)",
    desc: "Secured 3rd position at the Internal Smart India Hackathon (SIH) 2024 for designing an innovative AI-driven solution.",
    date: "2024",
    icon: <Trophy size={28} className="text-primary" />
  }
];

export default function Portfolio() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredSkills = allSkills.filter(skill => skill.cat.includes(activeTab));

  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary selection:text-white pb-20 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-center z-50 p-4">
        <div className="bg-card/90 backdrop-blur-md border border-gray-800 rounded-full px-6 md:px-8 py-3 flex items-center gap-6 md:gap-8 shadow-xl overflow-x-auto whitespace-nowrap scrollbar-hide w-full max-w-fit">
          <span className="font-bold text-white text-xl tracking-tighter mr-2 md:mr-4">HD.</span>
          {["Home", "Experience", "Projects", "Skills", "Certifications", "Achievements", "Resume", "Contact"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Generic Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setZoomedImage(null)} 
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative bg-card border border-gray-800 p-1.5 rounded-2xl overflow-hidden w-full max-w-5xl max-h-[95vh] shadow-2xl flex flex-col z-[110]"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="flex justify-end p-2 bg-card">
                <button 
                  type="button"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setZoomedImage(null); }} 
                  className="text-gray-400 hover:text-white bg-gray-900/80 p-2 rounded-full transition-colors active:scale-95"
                >
                  <X size={20}/>
                </button>
              </div>
              <div className="overflow-auto flex-grow flex items-center justify-center p-2 bg-[#09090b]">
                <SafeImage 
                  src={zoomedImage} 
                  alt="Zoomed View" 
                  className="max-w-full max-h-[80vh] rounded-xl object-contain" 
                  objectFit="contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-32">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex items-center relative pt-12 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
            
            <div className="flex flex-col items-start z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 w-fit mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider">Available for new opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                Engineering solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  by automation.
                </span>
              </h1>

              <div className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 h-28 sm:h-24 leading-relaxed">
                Hi, I&apos;m <span className="text-white font-semibold">Himani Dhakad</span>. An aspiring{" "}
                <span className="inline-grid min-w-[160px]">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary font-semibold col-start-1 row-start-1"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                {" "}translating complex workflows into intelligent, high-performance infrastructures. 
                Systems that feel designed. Automations that scale.
              </div>

              <div className="flex gap-4 w-full sm:w-auto">
                <a 
                  href="https://www.linkedin.com/in/himani-dhakad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center bg-primary hover:bg-sky-400 text-black font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex lg:justify-end relative w-full h-full pb-10 pr-0 lg:pr-6 order-1 lg:order-2 justify-center mt-10 lg:mt-0">
              <div className="w-[90%] sm:w-[75%] lg:w-[85%] max-w-md bg-card border border-gray-800 rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-2xl relative z-0 p-2">
                {/* FIXED: Replaced "profile.png" with "Profile.png" to match the exact file case in Vercel/Linux */}
                <SafeImage src="/Photos/Profile.png" alt="Himani Dhakad" className="w-full h-auto rounded-[2.2rem]" objectFit="contain" />
              </div>

              <div className="absolute -bottom-8 sm:-bottom-4 left-0 sm:left-10 lg:left-4 bg-[#0d0d12] border border-gray-800/80 p-4 sm:p-6 rounded-2xl shadow-2xl font-mono text-[10px] sm:text-xs z-20 backdrop-blur-sm max-w-[90vw] overflow-x-auto">
                <div className="flex gap-2 mb-3 sm:mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1.5 whitespace-nowrap">
                  <p className="text-gray-400"><span className="text-gray-600">01</span> const engineer = {"{"}</p>
                  <p className="text-gray-300 ml-4"><span className="text-gray-600 -ml-4 mr-2">02</span> name: <span className="text-green-400">&apos;Himani Dhakad&apos;</span>,</p>
                  <p className="text-gray-300 ml-4"><span className="text-gray-600 -ml-4 mr-2">03</span> passionate: <span className="text-orange-400">true</span>,</p>
                  <p className="text-gray-300 ml-4"><span className="text-gray-600 -ml-4 mr-2">04</span> motto: <span className="text-green-400">&apos;Automate, Analyze, Optimize&apos;</span></p>
                  <p className="text-gray-400"><span className="text-gray-600">05</span> {"}"};</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="pt-32">
          <h2 className="text-4xl font-bold text-center mb-2">WORK</h2>
          <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center mb-16 uppercase tracking-widest">
            Experience
          </h3>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-card border border-gray-800 p-6 sm:p-8 rounded-3xl hover:border-gray-600 transition-colors flex flex-col sm:flex-row gap-6 sm:gap-8">
                
                <div className="w-16 h-16 sm:w-24 sm:h-24 shrink-0 bg-white border border-gray-800 rounded-2xl flex items-center justify-center overflow-hidden p-2 shadow-inner">
                   <SafeImage src={exp.logoPath} alt={`${exp.company} Logo`} className="w-[90%] h-[90%]" objectFit="contain" />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-3 sm:gap-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.title}</h4>
                    <span className="text-primary font-mono text-[10px] sm:text-xs font-semibold bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 flex items-center gap-2">
                      {exp.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                    <Server size={14} className="text-gray-500 shrink-0"/> {exp.company} <span className="text-gray-600">•</span> {exp.location}
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 leading-relaxed text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE PROJECTS SECTION */}
        <section id="projects" className="pt-32">
          <h2 className="text-4xl font-bold text-center mb-16 md:mb-24">Selected Projects</h2>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-800 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {mainProjects.map((proj, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                  
                  <div className={`w-full md:w-5/12 ${idx % 2 !== 0 ? 'md:order-2 md:justify-start' : 'md:justify-end'} flex`}>
                    <div className="w-full h-48 sm:h-64 bg-card border border-primary/30 shadow-[0_0_20px_rgba(14,165,233,0.1)] rounded-2xl flex items-center justify-center text-gray-600 font-mono text-sm overflow-hidden z-10 relative group p-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <SafeImage src={proj.image} alt={proj.title} className="w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500" objectFit="cover" />
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary bg-background shadow-[0_0_15px_rgba(14,165,233,0.3)] items-center justify-center z-20">
                    <span className="text-primary font-bold text-base md:text-lg font-mono">0{idx + 1}</span>
                  </div>

                  <div className={`w-full md:w-5/12 ${idx % 2 !== 0 ? 'md:order-1 md:justify-end' : 'md:justify-start'} flex`}>
                    <div className="w-full bg-card border border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-gray-600 transition-colors z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{proj.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm sm:text-base">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map(tag => (
                          <span key={tag} className="text-[10px] sm:text-xs font-mono text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* MORE PROJECTS */}
          <div className="mt-24 md:mt-32 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">More Projects</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {moreProjects.map((proj, idx) => (
                <div key={idx} className="relative bg-card border border-gray-800 p-6 sm:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                  
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setZoomedImage(proj.archImage); }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary p-3 sm:p-2 rounded-full bg-gray-900 border border-gray-800/80 hover:bg-primary hover:text-black transition-colors z-30 active:scale-95"
                    aria-label="View Architecture Diagram"
                  >
                    <ZoomIn size={22} className="sm:w-5 sm:h-5"/>
                  </button>
                  
                  <div className="pointer-events-none">
                    {proj.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 pr-10">{proj.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-[10px] sm:text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="pt-32">
          <h2 className="text-sm font-mono text-center text-gray-500 mb-2 uppercase tracking-widest">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">TECH STACK</h3>
          
          <div className="relative z-20 flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 bg-card/50 p-2 rounded-3xl sm:rounded-full w-full sm:w-fit mx-auto border border-gray-800">
            {["All", "AI Engineer", "Software Engineer", "Data Analyst", "Automation Engineer"].map(tab => (
              <button 
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex-grow sm:flex-grow-0 active:scale-95 cursor-pointer select-none ${activeTab === tab ? 'bg-primary text-black' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {filteredSkills.map(skill => (
              <div
                key={skill.name}
                className="bg-card border border-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl hover:border-primary/50 transition-colors animate-in fade-in zoom-in duration-300"
              >
                <div className="transform scale-75 sm:scale-100">{skill.icon}</div>
                <span className="text-white font-bold text-center text-sm sm:text-base">{skill.name}</span>
                <span className="text-gray-500 text-[10px] sm:text-xs mt-1 text-center">{skill.subtitle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="pt-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
            Verified <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-sm sm:text-base">
            A comprehensive record of continuous learning, bridging the gap between theoretical knowledge and practical execution.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certs.map((cert, idx) => (
              <div key={idx} className="bg-card border border-gray-800 p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-secondary/50 transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-secondary mb-3 sm:mb-4">
                    <ShieldCheck size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">{cert.issuer}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{cert.title}</h4>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-500">{cert.year}</span>
                  <span className="text-green-400 flex items-center gap-1 font-mono bg-green-400/10 px-2 py-1 rounded text-[10px] sm:text-xs">
                    <ShieldCheck size={12}/> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="pt-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
            Key <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-sm sm:text-base">
            Milestones, hackathons, and publications that highlight my dedication to innovation and research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-card border border-gray-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 hover:border-secondary/50 transition-colors items-start">
                <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                   {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="text-primary font-mono text-[10px] sm:text-xs font-semibold bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 inline-block">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            <div className="flex justify-center lg:justify-start">
              <div className="w-[85%] sm:w-[60%] lg:w-[80%] max-w-sm aspect-[3/4] bg-card border border-gray-800 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl relative p-1">
                <SafeImage src="/Photos/Himaniresume.png" alt="Himani Resume" className="w-full h-full rounded-[1.8rem]" objectFit="cover" />
              </div>
            </div>

            <div className="flex flex-col items-start z-10">
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">Resume</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to scale your <br />
                <span className="text-primary">Engineering Team?</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
                Looking for an engineer who bridges the gap between raw data, intelligent models, and robust automation? Review my resume to see a track record of building resilient systems, automating complex pipelines, and executing with precision.
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                
                <button 
                  type="button"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setZoomedImage("/Photos/Himaniresume.png"); }} 
                  className="w-full sm:w-auto justify-center bg-card border border-gray-600 hover:border-gray-400 text-white font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 transition-all active:scale-95"
                >
                  <Eye size={20} /> View Resume
                </button>
                
                <a 
                  href="https://drive.google.com/file/d/1GvJaJjfgVi8OWQkp5RTuhfUosDsOh_6Y/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto justify-center bg-primary hover:bg-sky-400 text-black font-bold py-3.5 px-6 rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] active:scale-95"
                >
                  <Download size={20} /> Download PDF
                </a>

              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pt-32 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-[85%] sm:w-[70%] lg:w-full max-w-md aspect-square bg-card border border-gray-800 rounded-[2.5rem] flex items-center justify-center overflow-hidden shadow-2xl relative p-1">
                <SafeImage src="/Photos/contact.png" alt="Contact Himani" className="w-full h-full rounded-[2.2rem]" objectFit="cover" />
              </div>
            </div>

            <div className="flex flex-col items-start z-10 order-1 lg:order-2">
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">Connect</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight uppercase">
                Build Systems <br />
                That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Scale <br />
                  Intelligently
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
                Building intelligent models. Automating everything. Turning ideas into scalable, real-world solutions. Let&apos;s create something that matters.
              </p>
              <a href="mailto:himanidhakad2004@gmail.com" className="w-full sm:w-auto justify-center bg-primary hover:bg-sky-400 text-black font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95">
                Send me an Email <ArrowRight size={20} />
              </a>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}