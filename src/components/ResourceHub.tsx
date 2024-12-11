import { motion } from "framer-motion";
import { Book, Video, FileText, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: Book,
    title: "Guides & Frameworks",
    description: "Comprehensive resources for digital transformation and growth"
  },
  {
    icon: Video,
    title: "Video Content",
    description: "Expert insights and tutorials on innovation and strategy"
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of successful digital initiatives"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow innovators and industry leaders"
  }
];

export const ResourceHub = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Resource Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access valuable insights and tools to accelerate your digital journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Link to="/resources" key={resource.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                  <resource.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-400">{resource.description}</p>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
