import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const techIcons = [
  { icon: Code2, label: "Frontend", delay: 0.1 },
  { icon: Server, label: "Backend", delay: 0.2 },
  { icon: Database, label: "Database", delay: 0.3 },
  { icon: Palette, label: "Design", delay: 0.4 },
  { icon: Smartphone, label: "Responsive", delay: 0.5 },
  { icon: Zap, label: "Performance", delay: 0.6 },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Floating icons */}
              {techIcons.map((item, index) => {
                const Icon = item.icon;
                const angle = (index * 360) / techIcons.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: x,
                      y: y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <motion.div
                      className="bg-card border border-card-border rounded-lg p-3 shadow-lg hover-elevate"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Avatar */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-2 to-chart-3 rounded-full blur-2xl opacity-30 animate-glow" />
                <Avatar className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-4 border-primary/20 relative">
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-chart-3/20 text-foreground">
                    NH
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Passionate about creating exceptional digital experiences
            </h3>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg">
              <p>
                I'm a Full Stack MERN Developer with a passion for building
                modern, scalable, and performant web applications. With expertise
                in React.js, Next.js, Node.js, Express.js, and MongoDB, I
                transform ideas into reality through clean code and intuitive
                user experiences.
              </p>
              <p>
                My approach combines cutting-edge technologies with best
                practices to deliver solutions that not only meet requirements
                but exceed expectations. I thrive on tackling complex challenges
                and continuously learning new technologies to stay at the
                forefront of web development.
              </p>
              <p>
                Whether it's crafting pixel-perfect interfaces with Tailwind CSS
                or architecting robust backend systems with TypeScript, I'm
                committed to delivering excellence in every project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
