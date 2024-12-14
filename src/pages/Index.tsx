import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ValueProposition } from "@/components/ValueProposition";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ResourceHub } from "@/components/ResourceHub";
import { Testimonials } from "@/components/Testimonials";
import { BlogInsights } from "@/components/BlogInsights";
import { PersonalIntro } from "@/components/PersonalIntro";
import { SubscriptionOffer } from "@/components/SubscriptionOffer";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { CallToAction } from "@/components/CallToAction";
import { DynamicNav } from "@/components/DynamicNav";

const Index = () => {
  console.log("Index component rendering"); // Adding console log to track rendering

  return (
    <div className="min-h-screen bg-accent text-white">
      <DynamicNav />
      <section id="hero">
        <Hero />
      </section>
      <section id="valueProposition">
        <ValueProposition />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="philosophy">
        <Philosophy />
      </section>
      <section id="featuredWork">
        <FeaturedWork />
      </section>
      <section id="resourceHub">
        <ResourceHub />
      </section>
      <Testimonials />
      <BlogInsights />
      <PersonalIntro />
      <SubscriptionOffer />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
};

export default Index;