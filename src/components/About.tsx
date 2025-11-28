import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Engineering student based in Andhra Pradesh, India, with a deep passion for solving real-world problems through technology.
            </p>
            
            <p>
              My journey started with curiosity about how things work, which led me down paths of AI, blockchain, mobile development, and full-stack web applications. Whether it's building decentralized platforms for transparency or creating IoT solutions for sustainable living, I love crafting systems that make a difference.
            </p>
            
            <p>
              As a Microsoft For Startups Founder's Hub member and Google Cloud Arcade Facilitator, I'm constantly learning and experimenting with cutting-edge technologies. My recent projects span from blockchain-based donation platforms to AI-powered voice assistants—each one teaching me something new about what's possible.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring the latest in agentic AI systems, contributing to open-source projects, or brainstorming the next big idea. I believe in building with purpose, learning in public, and sharing knowledge with the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
