import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Digital Transformation",
    category: "Strategy & Innovation",
    image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png",
    description: "Revolutionizing business processes through innovative digital solutions"
  },
  {
    title: "Brand Evolution",
    category: "Creative Design",
    image: "/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png",
    description: "Crafting compelling brand identities that resonate and inspire"
  },
  {
    title: "Growth Acceleration",
    category: "Marketing & Strategy",
    image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png",
    description: "Driving sustainable growth through data-driven strategies"
  }
];

export const FeaturedWork = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of transformative digital solutions and strategic innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link to="/work">
                  <Button
                    variant="outline"
                    className="w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/work">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
