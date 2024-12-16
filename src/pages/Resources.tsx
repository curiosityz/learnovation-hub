import { PageTemplate } from "@/components/templates/PageTemplate";
import { Card } from "@/components/ui/card";
import { Book, Video, FileText, Users } from "lucide-react";

const Resources = () => {
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

  return (
    <PageTemplate 
      title="Resource Hub"
      description="Access valuable insights and tools to accelerate your digital journey."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource) => (
          <Card key={resource.title} className="p-6 bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group">
            <resource.icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
            <p className="text-gray-400">{resource.description}</p>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Resources;