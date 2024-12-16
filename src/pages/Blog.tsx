import { BlogListTemplate } from "@/components/templates/BlogListTemplate";

const posts = [
  {
    id: "1",
    title: "The Future of Digital Innovation",
    excerpt: "Exploring emerging trends and technologies shaping the digital landscape",
    date: "Mar 15, 2024",
    category: "Innovation",
    image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png",
    slug: "future-of-digital-innovation"
  },
  {
    id: "2",
    title: "Building Learning Organizations",
    excerpt: "Strategies for fostering a culture of continuous learning and growth",
    date: "Mar 12, 2024",
    category: "Leadership",
    image: "/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png",
    slug: "building-learning-organizations"
  },
  {
    id: "3",
    title: "Strategic Digital Marketing",
    excerpt: "Leveraging data-driven insights for impactful marketing campaigns",
    date: "Mar 10, 2024",
    category: "Marketing",
    image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png",
    slug: "strategic-digital-marketing"
  }
];

const Blog = () => {
  return <BlogListTemplate posts={posts} />;
};

export default Blog;