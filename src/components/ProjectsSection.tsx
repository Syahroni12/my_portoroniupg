import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API Platform",
    description:
      "A scalable RESTful API powering multiple e-commerce applications with advanced inventory management and payment processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Laravel", "MySQL", "Redis", "Docker"],
    demo: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat System",
    description:
      "WebSocket-based chat application supporting thousands of concurrent users with message persistence and media sharing.",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    tech: ["Node.js", "Socket.io", "MongoDB", "React"],
    demo: "#",
    github: "#",
  },
  {
    title: "Cloud Infrastructure Manager",
    description:
      "DevOps dashboard for managing cloud resources, automated deployments, and monitoring across multiple providers.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tech: ["Python", "AWS", "Terraform", "Vue.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Business intelligence platform with real-time data visualization, custom reports, and predictive analytics features.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["TypeScript", "PostgreSQL", "GraphQL", "D3.js"],
    demo: "#",
    github: "#",
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
