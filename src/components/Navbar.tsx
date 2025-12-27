import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", type: "page", href: "/" },
  { name: "About", type: "page", href: "/about" },
  { name: "Skills", type: "page", href: "/skills" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Experience", type: "page", href: "/experience" },
  { name: "Sertifikat", type: "page", href: "/sertifikat" },
  { name: "Contact", type: "page", href: "/contact" },

];


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const currentPath = window.location.pathname;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="text-xl md:text-2xl font-bold font-display gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            {"<Dev />"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.type === "page") {
                    // Jika type page, arahkan ke halaman baru
                    window.location.href = item.href;
                  } else if (item.type === "section") {
                    // Jika type section, scroll ke section di halaman yang sama
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className={`
                          relative text-sm font-medium transition-all
                          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                          after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500
                          after:rounded-full after:transition-all after:duration-300
                          ${currentPath === item.href
                    ? "text-foreground font-semibold after:w-full after:opacity-100"
                    : "text-muted-foreground hover:text-foreground after:w-0 after:opacity-0 hover:after:w-full"
                  }
                        `}


              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>


          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();

                    if (item.type === "page") {
                      window.location.href = item.href;
                    } else if (item.type === "section") {
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }

                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
  block py-3 transition-colors relative
  ${currentPath === item.href
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                    }
`}

                >
                  {item.name}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
