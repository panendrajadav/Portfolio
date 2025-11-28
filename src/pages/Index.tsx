import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { GoogleSearch } from "@/components/GoogleSearch";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <GoogleSearch />
      <GitHubActivity />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
