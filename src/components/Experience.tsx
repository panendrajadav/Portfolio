import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      role: "Microsoft For Startups",
      position: "Founder's Hub Member",
      period: "Feb 25 - Present",
      description: "Building innovative solutions with Microsoft's startup ecosystem. Access to Azure credits, technical resources, and mentorship.",
    },
    {
      role: "KPVDR BOTSAPI Pvt Ltd",
      position: "Software Engineer - Python",
      period: "Aug 24 - Jan 25",
      description: "At KPVDR BOTSAPI LLC, I worked as a Software Engineer – Python, contributing to backend development and building Python modules, while also working on BlackArch and other security-scanning tools to support efficient automation and smooth project delivery.",
    },
    {
      role: "HCLTech",
      position: "Software Developer Intern",
      period: "Jan 24 - Apr 24",
      description: "At HCLTech, I worked on EcoCycle Hub, an IoT-based solution that automates campus bicycle booking, tracking, and returns using smart locks and real-time availability — promoting sustainable commuting and reducing manual processes",
    },
  ];

  const learning = [
    "Agentic AI systems and autonomous agents",
    "Advanced Web3 and smart contract development",
    "LangChain and AI orchestration frameworks",
    "System design and scalable architectures",
  ];

  const buildingNext = [
    "Multi-agent AI systems for complex workflows",
    "Cross-chain DeFi applications",
    "Open-source contributions to AI/ML tools",
    "Educational content for aspiring developers",
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Experience */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full before:ring-4 before:ring-accent/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.position}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning & Building */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Currently Learning</h3>
              <ul className="space-y-3">
                {learning.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-accent mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">What I Want to Build Next</h3>
              <ul className="space-y-3">
                {buildingNext.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-accent mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
