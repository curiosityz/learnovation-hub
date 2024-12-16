import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogPostTemplateProps {
  title: string;
  date: string;
  author: string;
  category: string;
  content: React.ReactNode;
  image?: string;
}

export const BlogPostTemplate = ({ 
  title, 
  date, 
  author, 
  category, 
  content,
  image 
}: BlogPostTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </div>
            </div>

            {image && (
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="prose prose-invert max-w-none">
              {content}
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
};