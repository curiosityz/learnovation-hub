import { PageTemplate } from "@/components/templates/PageTemplate";
import { Card } from "@/components/ui/card";

const Work = () => {
  const projects = [
    {
      title: "Digital Transformation",
      category: "Strategy & Innovation",
      description: "Revolutionizing business processes through innovative digital solutions",
      image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png"
    },
    {
      title: "Brand Evolution",
      category: "Creative Design",
      description: "Crafting compelling brand identities that resonate and inspire",
      image: "/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png"
    },
    {
      title: "Growth Acceleration",
      category: "Marketing & Strategy",
      description: "Driving sustainable growth through data-driven strategies",
      image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png"
    }
  ];

  return (
    <PageTemplate 
      title="Our Work"
      description="Explore our portfolio of transformative digital solutions and strategic innovations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group">
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Work;