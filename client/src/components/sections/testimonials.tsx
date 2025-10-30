import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Ltd.",
    content: "Working with Nazmul was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and exceeded all expectations. His technical expertise and attention to detail are outstanding.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Digital Solutions",
    content: "Nazmul's full-stack development skills are top-notch. He transformed our complex requirements into an elegant, scalable solution. Highly recommend for any serious project.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, Startup Ventures",
    content: "An exceptional developer who brings both technical prowess and creative problem-solving. Nazmul built our real-time chat application with impressive performance and clean code architecture.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "David Kim",
    role: "Founder, Creative Agency",
    content: "I've worked with many developers, but Nazmul stands out for his professionalism and ability to deliver pixel-perfect implementations. Our portfolio builder exceeded client expectations.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, E-Commerce Co.",
    content: "Nazmul's expertise in modern web technologies helped us launch our platform on time and within budget. His communication and dedication to quality are exemplary.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "James Wilson",
    role: "Tech Lead, SaaS Platform",
    content: "Outstanding work on our analytics dashboard. Nazmul's ability to handle complex data visualization and create intuitive UIs made our product a success. A true professional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`card-testimonial-${index}`}
            >
              <Card className="p-6 h-full relative overflow-hidden group hover-elevate active-elevate-2">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-[1px] bg-card rounded-lg -z-10" />

                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/40" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4" data-testid={`rating-testimonial-${index}`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    data-testid={`img-avatar-${index}`}
                  />
                  <div>
                    <p className="font-semibold" data-testid={`text-name-${index}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Glowing Gradient Accent */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/30 via-chart-2/30 to-chart-3/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
