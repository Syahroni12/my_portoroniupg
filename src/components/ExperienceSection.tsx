import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer (Intern)",
    company: "Social Economic Accelerator Lab (SEAL) – Diskominfo Jatim",
    period: "Aug 2025 – Dec 2025",
    description:
      "Berperan sebagai Backend Developer dalam pengembangan dan optimalisasi sistem backend aplikasi layanan publik MAJADIGI.",
    achievements: [
      "Mengimplementasikan pgvector untuk embedding data",
      "Mengintegrasikan LangFlow dan ChromaDB untuk pencarian berbasis vektor",
      "Membangun sinkronisasi data real-time menggunakan event trigger",
      "Mengoptimalkan logika API agar lebih efisien dan stabil",
      "Meningkatkan visualisasi dan akurasi dashboard sistem",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "MBKM – Intelligence Quality Air Control System (Kopi Nursery)",
    period: "Aug 2024 – Dec 2024",
    description:
      "Mengembangkan sistem monitoring dan kontrol suhu, kelembaban, serta klasifikasi penyakit daun kopi berbasis web dan IoT.",
    achievements: [
      "Membangun REST API Laravel untuk deteksi penyakit daun kopi",
      "Mengembangkan model AI untuk klasifikasi penyakit tanaman",
      "Mengintegrasikan ESP32 untuk pengambilan data suhu, kelembaban, dan pH tanah",
      "Membangun fitur deteksi penyakit beserta tampilan antarmuka",
    ],
  },
  {
    title: "Full Stack Web Developer (Intern)",
    company: "Teaching Factory JTI Innovation – Politeknik Negeri Jember",
    period: "Sep 2023 – Jun 2024",
    description:
      "Mengembangkan berbagai sistem informasi kampus dan aplikasi berbasis web untuk kebutuhan akademik dan operasional.",
    achievements: [
      "Membangun sistem SI MBKM dan fitur data master matkul",
      "Mengembangkan sistem keuangan dan manajemen kantin (Di Kantin POLIJE)",
      "Membangun sistem ujian dan ranking mahasiswa (CERDAS CERMAT OAV)",
      "Membuat fitur input dan ekstraksi data mahasiswa baru ke format JSON",
    ],
  },
  {
    title: "Backend Web Developer",
    company: "PT Sage Maslahat Indonesia",
    period: "Mar 2024 – Jun 2024",
    description:
      "Berfokus pada pengembangan backend web profile perusahaan.",
    achievements: [
      "Mengatur manajemen dan autentikasi profile pengguna",
      "Membangun sistem pengelolaan dan penampilan gambar landing page",
    ],
  },
  {
    title: "Web Developer & Software Testing (Intern)",
    company: "CV Soluta Makarya Sehati",
    period: "Jan 2021 – Apr 2021",
    description:
      "Terlibat dalam pengembangan web dan pengujian aplikasi pada sistem berbasis CodeIgniter.",
    achievements: [
      "Mengembangkan fitur CRUD data pelanggan menggunakan CodeIgniter",
      "Melakukan pengujian fungsional secara manual",
      "Mendokumentasikan hasil testing dan melaporkan bug ke tim developer",
    ],
  },
];


export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wider text-sm">
            CAREER PATH
          </p>
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey in software development
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background gradient-bg z-10" />

              {/* Content Card */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
              >
                <div className="glass-card p-6 hover:glow-sm transition-all duration-300">
                  {/* Period Badge */}
                  <div
                    className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold font-display mb-1">
                    {exp.title}
                  </h3>
                  <div
                    className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                  >
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:text-right" : ""
                      }`}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                  >
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
