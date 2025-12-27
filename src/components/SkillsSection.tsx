import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    category: "Backend",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
  //  ADONIS JS
  {
    name: "AdonisJS",
    icon: "https://avatars.githubusercontent.com/u/41620859?s=200&v=4",
    category: "Backend",
  },

  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },

  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "DevOps",
  },

  // BOOSTRAP
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    category: "Frontend",
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wider text-sm">
            MY EXPERTISE
          </p>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="skill-card group flex flex-col items-center gap-4 relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${hoveredSkill === skill.name ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(var(--primary) / 0.15), transparent 70%)",
                }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-14 h-14 md:w-16 md:h-16"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Name */}
              <span className="font-medium text-sm text-center">{skill.name}</span>

              {/* Category Badge */}
              <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.category}
              </span>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  y: hoveredSkill === skill.name ? 0 : 10,
                }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-foreground text-background px-3 py-1 rounded-lg text-xs whitespace-nowrap pointer-events-none z-10"
              >
                {skill.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
