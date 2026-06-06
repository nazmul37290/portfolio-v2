import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
         

          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-sm text-center flex items-center gap-2 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>© {currentYear} Md. Nazmul Haque </span>
            |
            {/* <Heart className="w-4 h-4 text-primary inline fill-current" /> */}
            <span>All rights reserved.</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
