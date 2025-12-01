import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql, SiScikitlearn, 
  SiGit, SiPandas, SiNumpy, SiSolidity, SiAndroid, SiHuggingface
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export const TechStack = () => {
  const CosmosIcon = ({ className }: { className?: string }) => (
    <img src="./cosmos.png" alt="Cosmos DB" className={className} />
  );

  const AzureIcon = ({ className }: { className?: string }) => (
    <img src="./azure.png" alt="Microsoft Azure" className={className} />
  );

  const ArchIcon = ({ className }: { className?: string }) => (
    <img src="./arch.png" alt="BlackArch Linux" className={className} />
  );

  const GCPIcon = ({ className }: { className?: string }) => (
    <img src="./gcp.png" alt="Google Cloud Platform" className={className} />
  );

  const techCategories = [
    {
      title: "Languages & Environments",
      techs: [
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Java", icon: FaJava, color: "text-[#007396]" },
        { name: "Solidity", icon: SiSolidity, color: "text-[#363636]" },
        { name: "BlackArch Linux", icon: ArchIcon, color: "text-[#000000]" },
        { name: "Google Cloud", icon: GCPIcon, color: "text-[#4285F4]" },
        { name: "Microsoft Azure", icon: AzureIcon, color: "text-[#0078D4]" },
      ],
    },
    {
      title: "Frontend & Mobile Development",
      techs: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Android", icon: SiAndroid, color: "text-[#3DDC84]" },
      ],
    },
    {
      title: "Backend & Database",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        // Use the CosmosIcon component to render the cosmos.png image
        { name: "Cosmos DB", icon: CosmosIcon, color: "text-[#0078D4]" },
      ],
    },

    {
      title: "ML & Data Science",
      techs: [
        { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
        { name: "Transformers", icon: SiHuggingface, color: "text-[#FFD21E]" },
        { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
        { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">Tech Stack.</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-20">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-3xl font-bold text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.15 + techIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <tech.icon className={`w-16 h-16 md:w-20 md:h-20 ${tech.color} transition-all group-hover:drop-shadow-lg`} />
                    <span className="text-foreground font-medium text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
