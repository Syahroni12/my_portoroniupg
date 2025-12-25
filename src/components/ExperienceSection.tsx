import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Leading backend architecture decisions, mentoring junior developers, and building scalable microservices handling millions of requests daily.",
    achievements: [
      "Reduced API response time by 60%",
      "Implemented CI/CD pipelines",
      "Led team of 5 developers",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed full-stack applications using Laravel and Vue.js, focusing on e-commerce platforms and inventory management systems.",
    achievements: [
      "Built 10+ production applications",
      "Integrated payment gateways",
      "Optimized database queries",
    ],
  },
  {
    title: "Backend Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Designed and implemented RESTful APIs, database schemas, and authentication systems for early-stage startups.",
    achievements: [
      "Developed authentication system",
      "Created API documentation",
      "Managed cloud infrastructure",
    ],
  },
  {
    title: "Junior Developer",
    company: "Web Agency Pro",
    period: "2018 - 2019",
    description:
      "Started my career building websites and learning backend development fundamentals while working on client projects.",
    achievements: [
      "Delivered 20+ client projects",
      "Learned agile methodology",
      "Built first Laravel application",
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
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background gradient-bg z-10" />

              {/* Content Card */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="glass-card p-6 hover:glow-sm transition-all duration-300">
                  {/* Period Badge */}
                  <div
                    className={`flex items-center gap-2 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
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
                    className={`flex items-center gap-2 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-muted-foreground text-sm mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
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
