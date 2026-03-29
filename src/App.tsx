/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  User, 
  Briefcase, 
  Cpu,
  GraduationCap,
  Phone,
  MapPin,
  ChevronDown
} from "lucide-react";

const projects = [
  {
    title: "Web E-Commerce (Laravel)",
    description: "Tugas kelompok membangun platform e-commerce menggunakan framework Laravel. Bertanggung jawab sebagai pemimpin tim, perancangan UI/UX, dan logika program.",
    tech: ["Laravel", "PHP", "UI/UX", "MySQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Web Inventaris Laboratorium",
    description: "Tugas mandiri membuat sistem pengelolaan inventaris lab. Meliputi analisis kebutuhan, perancangan database (ERD), desain UI/UX, dan pengembangan menggunakan PHP.",
    tech: ["PHP", "MySQL", "Database Design", "ERD"],
    link: "#",
    github: "#"
  },
  {
    title: "OCD-Ear (PKM-GFT)",
    description: "Gagasan futuristik earphone terapi untuk mengatasi OCD dengan integrasi AI, Haptic Feedback, dan sensor Biometric. Memimpin tim dan merancang konsep visual produk.",
    tech: ["AI Integration", "Haptic Feedback", "Biometric", "Product Design"],
    link: "#",
    github: "#"
  },
  {
    title: "Cendol Bunga Telang (PKM-K)",
    description: "Proyek kewirausahaan pembuatan cendol inovatif berbasis bunga telang. Menjabat sebagai ketua dan penanggung jawab tim PKM.",
    tech: ["Entrepreneurship", "Team Leadership", "Product Development"],
    link: "#",
    github: "#"
  }
];

const skills = {
  hard: ["Database Design & ERD", "SQL", "Python", "Analisis Data Dasar", "Microsoft Excel", "Jaringan Komputer", "Pengembangan Web Dasar"],
  soft: ["Problem Solving", "Komunikasi", "Kemampuan Beradaptasi", "Kepemimpinan", "Bekerja Sama dalam Tim", "Berpikir Kritis", "Tanggung Jawab", "Teliti"]
};

const education = [
  {
    school: "Politeknik Negeri Malang",
    period: "2024 - Sekarang",
    degree: "D3 Manajemen Informatika – Semester 4",
    details: "IPK Sementara 3.88"
  },
  {
    school: "SMAN 6 Kediri",
    period: "2021 - 2024",
    degree: "Jurusan Ilmu Pengetahuan Alam (IPA)",
    details: ""
  }
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">MUAFAN.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">Tentang</a>
            <a href="#education" className="hover:text-zinc-900 transition-colors">Pendidikan</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Pengalaman</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Kemampuan</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4 block">
            Manajemen Informatika Student
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
            Muh. Muafan Al Farisi
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mahasiswa yang berfokus pada pengembangan sistem, perancangan basis data, dan analisis data. 
            Berpengalaman dalam memimpin tim dan membangun solusi digital yang terstruktur.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all"
            >
              Lihat Pengalaman
            </a>
            <div className="flex items-center space-x-4 px-4">
              <a href="https://www.linkedin.com/in/muhmuafanalfarisi" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:muafan99@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-zinc-300" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-zinc-400 mb-4">
              <User size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Tentang Saya</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Membangun sistem dengan presisi dan analisis yang kuat.</h2>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Saya adalah mahasiswa D3 Manajemen Informatika di Politeknik Negeri Malang dengan IPK sementara 3,88. 
              Memiliki minat kuat dalam pengembangan sistem, perancangan basis data, dan analisis data.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Terbiasa mengelola data secara terstruktur, memiliki kemampuan berpikir kritis, serta mampu bekerja efektif 
              baik secara individu maupun dalam tim. Berpengalaman memimpin tim dalam Program Kreativitas Mahasiswa (PKM).
            </p>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-100"
            >
              <img 
                src="https://picsum.photos/seed/muafan/800/800" 
                alt="Muh. Muafan Al Farisi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-zinc-400 mb-4">
            <GraduationCap size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Pendidikan</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Riwayat Akademik</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-3xl border border-zinc-100"
              >
                <div>
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <p className="text-zinc-500">{edu.degree}</p>
                  {edu.details && <p className="text-sm font-semibold text-zinc-400 mt-1">{edu.details}</p>}
                </div>
                <div className="mt-4 md:mt-0 text-zinc-400 font-medium">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Experience Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-zinc-400 mb-4">
            <Briefcase size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Pengalaman & Proyek</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Apa yang Telah Saya Kerjakan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-50 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <Code2 size={24} />
                  </div>
                  <div className="flex space-x-3 text-zinc-400">
                    <a href="#" className="hover:text-zinc-900"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-100 text-zinc-500 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-zinc-400 mb-4">
            <Cpu size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Kemampuan</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Keahlian Teknis & Soft Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 border-b border-zinc-100 pb-2">Hard Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.hard.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-zinc-100 rounded-full text-sm text-zinc-600">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 border-b border-zinc-100 pb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-900 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Mari Terhubung.</h2>
              <p className="text-zinc-400 mb-12 max-w-md">
                Saya terbuka untuk peluang magang, proyek kolaborasi, atau sekadar berdiskusi tentang teknologi.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                    <a href="mailto:muafan99@gmail.com" className="text-lg hover:text-zinc-400 transition-colors">muafan99@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Telepon</p>
                    <p className="text-lg">(+62) 85707950850</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Lokasi</p>
                    <p className="text-lg">Kediri, Jawa Timur</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col items-center justify-center space-y-8">
              <a 
                href="https://www.linkedin.com/in/muhmuafanalfarisi" 
                target="_blank"
                className="w-full py-4 bg-white text-zinc-900 rounded-2xl font-bold text-center hover:bg-zinc-200 transition-all flex items-center justify-center space-x-3"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex space-x-6">
                <a href="https://github.com/Wynter-76" className="text-zinc-500 hover:text-white transition-colors"><Github size={32} /></a>
                <a href="mailto:muafan99@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={32} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-100 text-center text-zinc-400 text-xs uppercase tracking-widest">
        © 2026 Muh. Muafan Al Farisi. Built with React & Tailwind.
      </footer>
    </div>
  );
}


