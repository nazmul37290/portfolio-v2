import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiGit, SiDocker, SiPostgresql, SiFigma } from "react-icons/si";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Activity } from "lucide-react";

const skills = {
  Frontend: [
    { name: "React.js", icon: SiReact, color: "#61DAFB", proficiency: 95 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", proficiency: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", proficiency: 88 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", proficiency: 95 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", proficiency: 92 },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", proficiency: 93 },
    { name: "Express.js", icon: SiExpress, color: "#000000", proficiency: 90 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", proficiency: 87 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", proficiency: 85 },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032", proficiency: 92 },
    { name: "Docker", icon: SiDocker, color: "#2496ED", proficiency: 80 },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", proficiency: 75 },
  ],
};

// Prepare radar chart data
const radarData = [
  { skill: "React.js", proficiency: 95 },
  { skill: "Next.js", proficiency: 90 },
  { skill: "TypeScript", proficiency: 88 },
  { skill: "Node.js", proficiency: 93 },
  { skill: "Express", proficiency: 90 },
  { skill: "MongoDB", proficiency: 87 },
  { skill: "PostgreSQL", proficiency: 85 },
  { skill: "Git", proficiency: 92 },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState<"grid" | "radar">("grid");
  const [activeHoveredSkill, setActiveHoveredSkill] = useState('')

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>

          {/* View Toggle */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-testid="button-view-grid"
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Grid View
            </Button>
            <Button
              variant={viewMode === "radar" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("radar")}
              data-testid="button-view-radar"
            >
              <Activity className="w-4 h-4 mr-2" />
              Radar Chart
            </Button>
          </div>
        </motion.div>

        {viewMode === "grid" ? (
          <div className="space-y-12">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-chart-2 rounded-full" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {items.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        onMouseEnter={() => setActiveHoveredSkill(skill.name)}
                        key={skill.name}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 30, scale: 0.9 }
                        }
                        transition={{
                          duration: 0.5,

                          ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.07, rotateX: 2, rotateY: -20, perspective: 1200 }}
                        className="group relative cursor-pointer select-none"
                        data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}

                      >{activeHoveredSkill === skill.name && (
                        <motion.div
                          className="absolute -bottom-2 left-0  right-0 h-0.5 bg-gradient-to-r from-primary via-chart-2 to-chart-3"
                          layoutId="activeHoveredSkill"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                        <div
                          className="
      bg-gradient-to-br from-[#0f172a]/90 to-[#1e293b]/90
      border border-white/5
      rounded-xl p-6 text-center
    
      hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]
      transition-all duration-300
      flex flex-col items-center justify-center gap-3
      backdrop-blur-sm
    "
                        >
                          <div className="relative">
                            <div
                              className="
          absolute inset-0
          bg-gradient-to-r from-blue-500/20 to-purple-500/20
          rounded-full blur-2xl opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
                            />
                            <Icon
                              className="
          w-10 h-10 sm:w-12 sm:h-12
          relative z-10
          transition-transform duration-500
          group-hover:scale-110
        "
                              style={{ color: skill.color }}
                            />
                          </div>
                          <span className="font-medium text-sm text-zinc-200 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-card-border rounded-lg p-8">
              <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={radarData} data-testid="chart-skills-radar">
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 14 }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="proficiency"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {radarData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                    data-testid={`legend-skill-${index}`}
                  >
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.skill}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.proficiency}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
