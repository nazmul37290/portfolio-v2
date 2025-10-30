import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "@/components/project-modal";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "This comprehensive e-commerce solution provides a seamless shopping experience with advanced features like real-time inventory management, secure payment processing via Stripe, and a powerful admin dashboard for managing products, orders, and customers. Built with Next.js for optimal SEO and performance, the platform handles high traffic efficiently and scales with your business needs.",
    features: [
      "Real-time inventory tracking and stock management",
      "Secure payment processing with Stripe integration",
      "Responsive admin dashboard with analytics",
      "Product recommendations based on user behavior",
      "Advanced search and filtering capabilities",
      "Order tracking and email notifications",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    ],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "A powerful task management solution designed for teams of all sizes. Features real-time collaboration with WebSocket technology, intuitive drag-and-drop task organization, and comprehensive project tracking. The application supports multiple projects, task dependencies, time tracking, and team member assignments.",
    features: [
      "Real-time collaboration with instant updates",
      "Drag-and-drop kanban board interface",
      "Task dependencies and milestone tracking",
      "Time tracking and productivity analytics",
      "Team member assignments and permissions",
      "Custom labels, priorities, and deadlines",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    ],
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization, scheduled posting, and engagement metrics tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["React", "Express", "Chart.js", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "Comprehensive social media management platform that consolidates analytics from multiple platforms. Features include scheduled posting, engagement tracking, audience insights, and competitor analysis. Built with React for a responsive interface and Chart.js for beautiful data visualizations.",
    features: [
      "Multi-platform social media integration",
      "Scheduled post management and automation",
      "Real-time engagement metrics and analytics",
      "Audience demographics and growth tracking",
      "Content performance comparison",
      "Customizable reports and exports",
    ],
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool leveraging GPT models for creating marketing copy, blog posts, and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "Harness the power of AI to create compelling content in seconds. This tool integrates with OpenAI's GPT models to generate high-quality marketing copy, blog articles, and social media posts. Features customizable tone, style, and length options to match your brand voice.",
    features: [
      "AI-powered content generation with GPT-4",
      "Multiple content types and formats",
      "Customizable tone and writing style",
      "SEO optimization suggestions",
      "Content templates and presets",
      "Export to multiple formats",
    ],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Modern chat application with end-to-end encryption, file sharing, and video calling capabilities for seamless communication.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
    tags: ["React", "WebRTC", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "A secure, feature-rich chat application built for modern communication needs. Includes end-to-end encryption for privacy, real-time messaging with WebSockets, file sharing capabilities, and integrated video calling using WebRTC technology.",
    features: [
      "End-to-end encrypted messaging",
      "Real-time message delivery",
      "File and image sharing",
      "Video and voice calling",
      "Group chat functionality",
      "Message search and history",
    ],
  },
  {
    title: "Portfolio Builder",
    description:
      "Drag-and-drop portfolio builder allowing users to create stunning portfolio websites without coding knowledge.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "Empower users to build professional portfolio websites without any coding knowledge. Features an intuitive drag-and-drop interface, pre-designed templates, custom domains, and responsive designs that look great on all devices.",
    features: [
      "Intuitive drag-and-drop editor",
      "Professional templates library",
      "Custom domain support",
      "Responsive design for all devices",
      "SEO optimization built-in",
      "Analytics and visitor tracking",
    ],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-3 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              data-testid={`card-project-${index}`}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-card-border rounded-lg overflow-hidden hover-elevate transition-all duration-300 shadow-lg h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-3/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="default"
                      className="flex-1 bg-gradient-to-r from-primary to-chart-2"
                      onClick={() => handleProjectClick(project)}
                      data-testid={`button-details-${index}`}
                    >
                      <Info className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      data-testid={`button-github-${index}`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
