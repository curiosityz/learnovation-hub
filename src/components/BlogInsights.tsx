import { motion } from "framer-motion";
import { BookOpen, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "The Future of Digital Innovation",
    excerpt: "Exploring emerging trends and technologies shaping the digital landscape",
    date: "Mar 15, 2024",
    category: "Innovation",
    image: "/public/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png"
  },
  {
    title: "Building Learning Organizations",
    excerpt: "Strategies for fostering a culture of continuous learning and growth",
    date: "Mar 12, 2024",
    category: "Leadership",
    image: "/public/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png"
  },
  {
    title: "Strategic Digital Marketing",
    excerpt: "Leveraging data-driven insights for impactful marketing campaigns",
    date: "Mar 10, 2024",
    category: "Marketing",
    image: "/public/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png"
  }
];

export const BlogInsights = () => {
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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest thoughts on innovation, strategy, and digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link to="/blog">
                    <Button variant="ghost" className="group-hover:text-primary">
                      Read More
                      <BookOpen className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
