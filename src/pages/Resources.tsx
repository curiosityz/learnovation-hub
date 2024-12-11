import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
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
            Resource Hub
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Access valuable insights and tools to accelerate your digital journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource cards will go here */}
            <div className="bg-accent/50 rounded-lg p-8 border border-primary/10">
              <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-gray-400">Resources will be available shortly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;