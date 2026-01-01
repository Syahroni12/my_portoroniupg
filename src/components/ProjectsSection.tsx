import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GMF Tools",
    description:
      "Developed a web-based inventory management system with features for adding items, viewing item data, and exporting item reports equipped with QR Codes.",
    image: "/project/projek1.png",
    tech: ["Laravel", "MySQL", "JavaScript", "QR Code"],
    role: "Full Stack Web Developer",
    demo: "#",
    github: "https://github.com/ahmadhipnie/laravel_gmf.git",
  },
  {
    title: "MAJADIGI Public Service Application",
    description:
      "Provided backend support and maintenance for the MAJADIGI public service application, focusing on system stability, API optimization, and data processing improvements.",
    image: "/project/majadigi.png",
    tech: [
      "Laravel",
      "PostgreSQL",
      "pgvector",
      "ChromaDB",
      "LangFlow",
    ],
    role: "Backend Developer (Support & Maintenance)",
    demo: "https://majadigi.jatimprov.go.id/",
    github: "#",
  },
  {
    title: "MBKM – Intelligence Quality Air Control System (Coffee Nursery)",
    description:
      "An IoT and AI-based system designed to monitor and control temperature and humidity in a coffee nursery, as well as classify coffee leaf diseases.",
    image: "/project/projek2.png",
    tech: [
      "Laravel",
      "Python",
      "ESP32",
      "Machine Learning",
      "IoT",
      "MySQL",
    ],
    role: "Full Stack Web Developer & AI Engineer",
    demo: "#",
    github: "https://github.com/Syahroni12/kopinurseryweb.git",
  },
  {
    title: "New Student Re-Registration System",
    description:
      "Developed a web application for managing new student registration schedules and exporting student data into JSON format.",
    image: "/project/projek3.png",
    tech: ["Laravel", "MySQL", "JavaScript"],
    role: "Full Stack Web Developer",
    demo: "https://daftarulang.polije.ac.id/",
    github: "#",
  },
  {
    title: "Margo Utomo Hotel Booking System",
    description:
      "Built backend services for a hotel reservation system, including room management, booking data, payment processing, facility data, gallery management, and checkout time handling.",
    image: "/project/proyek4.png",
    tech: ["Laravel", "MySQL", "REST API"],
    role: "Backend Developer",
    demo: "http://www.margoutomoresorts.com/",
    github: "https://github.com/Syahroni12/margo-utomo-daisyUI.git",
  },
  {
    title: "Kamp Sewa – Rental Management System",
    description:
      "Developed a rental management system with reporting features, report data management, and financial charts for income, expenses, and profit visualization.",
    image: "/project/proyek5.png",
    tech: ["Laravel", "Chart.js", "MySQL", "JavaScript"],
    role: "Full Stack Web Developer",
    demo: "",
    github: "https://github.com/bintangandk/kampsewa-2.0.git",
  },

];


export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wider text-sm">
            PORTFOLIO
          </p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            A selection of projects that showcase my expertise in backend development
            and system architecture
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full gradient-bg text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-foreground text-background"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
