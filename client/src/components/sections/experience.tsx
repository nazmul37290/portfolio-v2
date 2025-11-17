import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    logo: '/dc.png',
    company: "Digital Crop",
    position: "Full Stack Developer",
    duration: "August, 2024 - Present",
    achievements: [
      "Developed and optimized full-stack business management and booking platforms using the MERN stack.",
      "Architected modular RESTful backend services with Express and MongoDB, reducing response times by over 40%.",
      "Implemented secure authentication systems with JWT, enhancing user data protection and session management.",

      "Enhanced UI/UX using React.js, Tailwind CSS, and Framer Motion, delivering smooth, responsive, and modern interfaces.",
      "Collaborated with other developers to maintain consistent coding standards and improve overall project quality."
    ],
  },
  {
    logo: '/nactar.png',
    company: "National Academy For Computer Training And Research (NACTAR)",
    position: "External Instructor",
    duration: "June, 2024 - August, 2024",
    achievements: [
      "Conducted hands-on training for two batches on HTML, CSS, and JavaScript",
      "Developed practical front-end projects to enhance student learning",
      "Guided learners on responsive design and modern web development practices",
      "Improved course engagement through interactive coding sessions"
    ]
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-chart-3" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                    }`}
                >
                  <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all duration-300 shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-primary/20 to-chart-2/20 p-3 rounded-lg">
                        <img src={exp.logo} className="w-6 h-6" alt={exp.company} />

                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 text-xs">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
