import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Computer Science",
    degree: "Bachelor of Science in Computer Science",
    years: "2016 - 2020",
    description: "Specialized in Software Engineering and Web Technologies",
  },
  {
    institution: "Advanced Web Development Bootcamp",
    degree: "Full Stack Development Certificate",
    years: "2020",
    description: "Intensive training in MERN stack and modern web practices",
  },
  {
    institution: "Online Learning Platforms",
    degree: "Continuous Professional Development",
    years: "2020 - Present",
    description: "Various certifications in React, Node.js, TypeScript, and Cloud Technologies",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-chart-2 to-chart-3 text-transparent bg-clip-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card border border-card-border rounded-lg p-6 h-full hover-elevate active-elevate-2 transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary/20 to-chart-2/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.years}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
