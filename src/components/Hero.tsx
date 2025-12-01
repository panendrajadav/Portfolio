import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"
      />

      <div className="max-w-6xl w-full grid md:grid-cols-[1fr,auto] gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            Hi, I'm Panendra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A passionate Computer Engineering student building the future with AI, blockchain, cloud, and full-stack development. I create impactful solutions that bridge technology and real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Currently exploring agentic AI systems and Web3 technologies — always curious, always building.
          </motion.p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/10 blur-xl"
            />
            <img
              src={profileImage}
              alt="Panendra Jadav"
              className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
