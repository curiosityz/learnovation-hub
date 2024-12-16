import { useParams } from "react-router-dom";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

// This would typically come from an API or CMS
const posts = {
  "future-of-digital-innovation": {
    title: "The Future of Digital Innovation",
    date: "Mar 15, 2024",
    author: "John Doe",
    category: "Innovation",
    image: "/lovable-uploads/0750354a-c138-4cb0-ad18-2dff06d6e857.png",
    content: (
      <>
        <p>
          The digital landscape is constantly evolving, bringing new opportunities and challenges for businesses and individuals alike. In this post, we explore the emerging trends and technologies that are shaping the future of digital innovation.
        </p>
        <h2>The Rise of AI and Machine Learning</h2>
        <p>
          Artificial Intelligence and Machine Learning continue to revolutionize how we approach problem-solving and decision-making in the digital realm. From predictive analytics to natural language processing, these technologies are becoming increasingly sophisticated and accessible.
        </p>
        <h2>The Impact of Web3 Technologies</h2>
        <p>
          Blockchain and decentralized technologies are creating new possibilities for digital ownership, transparency, and value exchange. We're seeing innovative applications across industries, from finance to creative arts.
        </p>
        <h2>The Future of Work</h2>
        <p>
          Digital transformation is reshaping how we work, collaborate, and learn. Remote work technologies, digital collaboration tools, and virtual learning platforms are becoming more sophisticated and integral to our daily lives.
        </p>
      </>
    )
  },
  // Add more blog posts here
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <BlogPostTemplate {...post} />;
};

export default BlogPost;