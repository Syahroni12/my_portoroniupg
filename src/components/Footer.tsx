import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Muhammad Syahroni.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >


          </motion.p>
        </div>
      </div>
    </footer>
  );
}
