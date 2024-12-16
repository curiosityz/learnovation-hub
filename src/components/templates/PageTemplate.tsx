import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ title, description, children }: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-300 mb-12">
              {description}
            </p>
          )}
          
          <div className="space-y-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};