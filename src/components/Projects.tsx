import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      title: "TestLabs AI",
      description: "TestLabs-AI is an automated ML evaluation pipeline that ingests experiment results, detects issues, compares against baselines, finds anomalies, and generates improvement recommendations — all using multi-agent intelligence.",
      tags: ["Python", "Multi-Agents", "Scikit-Learn", "NumPy & Pandas"],
      github: "https://github.com/panendrajadav/TestLab-AI",
      highlight: false,
    },
    {
      title: "Optima AI",
      description: "Optima AI is a dual-LLM chatbot where two models generate answers simultaneously, and a judge picks the most accurate one. Users set a specific goal, and the system stays fully focused on that task, delivering precise, optimized, and distraction-free results.",
      tags: ["Python", "Multi-Agents", "Goal Based Agents"],
      github: "https://github.com/panendrajadav/Optima-AI",
      highlight: false,
    },
    {
      title: "TranXact",
      description: "A Web3-based decentralized donation platform connecting donors and organizations through blockchain. Ensures transparency, trust, and accountability by tracking every donation on-chain.",
      tags: ["TypeScript", "Web3", "Algorand Blockchain", "React", "Cloud"],
      github: "https://github.com/panendrajadav/TranXact",
      highlight: true,
    },
    {
      title: "ClearDeal",
      description: "Blockchain-based platform for transparent, secure, and trustworthy digital transactions. Verifies every deal on-chain to prevent fraud and promote fair trade.",
      tags: ["TypeScript","Web3", "Arbitrum Blockchain", "Smart Contracts"],
      github: "https://github.com/panendrajadav/ClearDeal",
      highlight: true,
    },
    {
      title: "Voxfusion",
      description: "Python-based AI voice assistant that performs system tasks like offline and online operations, taking screenshots, and setting reminders through conversational AI powered by Ollama Gemma.",
      tags: ["Python", "Ollama", "Voice Assistant", "NLP"],
      github: "https://github.com/panendrajadav/Voxfusion",
      highlight: false,
    },
    {
      title: "EcocycleHub",
      description: "IoT-based Android app developed at HCLTech for automating campus bicycle booking, tracking, and returns using smart locks. Promotes sustainable commuting and reduces campus emissions.",
      tags: ["Java", "Android", "IoT", "Firebase"],
      github: "https://github.com/panendrajadav/EcocycleHub",
      highlight: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Building impactful solutions across Blockchain, AI, Cloud and Mobile Development.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className={`
                  bg-card border border-border rounded-3xl p-8 
                  transition-all duration-300 relative overflow-hidden
                  group-hover:shadow-accent/20 group-hover:shadow-2xl
                  ${project.highlight ? 'md:col-span-1' : 'md:col-span-1'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                        aria-label="View on GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/panendrajadav?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
