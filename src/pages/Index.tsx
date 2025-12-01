import { Navigation } from "@/components/Navigation";
import { Greeting } from "@/components/Greeting";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { GoogleSearch } from "@/components/GoogleSearch";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { VolunteerActivities } from "@/components/VolunteerActivities";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Greeting />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <GoogleSearch />
      <GitHubActivity />
      <Projects />
      <Certifications />
      <VolunteerActivities />
      <Footer />
    </div>
  );
};

export default Index;
