import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Systems" },
  { icon: Database, label: "Database Design" },
  { icon: Code2, label: "API Development" },
  { icon: Zap, label: "Performance" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative mx-auto max-w-md">

            {/* ==== BAGIAN YANG DI FLIP ==== */}
            <motion.div
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* Gradient Border Frame */}
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-xl opacity-30 animate-pulse-glow" />

              <div className="relative gradient-border p-1 rounded-2xl">
                <div className="aspect-square rounded-xl overflow-hidden bg-card">
                  <img
                    src="/aku.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* ==== BADGE DIBUAT TERPISAH, TIDAK IKUT FLIP ==== */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full"
            >
              <span className="text-sm font-medium gradient-text">
                3+ Years Experience
              </span>
            </motion.div>

          </div>


          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium mb-4 tracking-wider text-sm">
              ABOUT ME
            </p>
            <h2 className="section-heading">
              Crafting <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Backend & Fullstack Developer with expertise in building
              robust, scalable systems. With over 5 years of experience, I specialize
              in designing efficient database architectures, developing RESTful APIs,
              and creating seamless integrations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My approach combines clean code principles with modern development
              practices. I'm dedicated to continuous learning and staying updated
              with the latest technologies to deliver cutting-edge solutions.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="p-2 rounded-lg gradient-bg">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
