import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { getImageUrl } from "@/utils/assets";

export const Certifications = () => {
  const getCompanyLogo = (issuer: string) => {
    if (issuer === "Google Cloud") return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg";
    if (issuer === "Cisco") return "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg";
    if (issuer === "Cognizant") return getImageUrl("cognizant.png");
    return null;
  };

  const certifications = [
    {
      title: "Cisco IT Credentials",
      issuer: "Cisco",
      link: "https://www.credly.com/badges/3346a74a-eb6f-4eae-b62a-6ca152d2179f/linked_in_profile"
    },
    {
      title: "Artificial Intelligence",
      issuer: "Cognizant",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_XseTQtCiPtAFt9moa_1716201866894_completion_certificate.pdf"
    },
    {
      title: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      link: "https://www.skills.google/public_profiles/2dcd1667-4ecc-42a7-b5a5-7abf0922ecb2/badges/10078798?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/32ba135a-2141-4492-b7e6-36a9bb570404"
    },
    {
      title: "Analyze Speech and Language with Google APIs",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/f36d5696-a59d-4eae-abb4-74a33c74e423"
    },
    {
      title: "Analyze Sentiment with Natural Language API",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/d4629ac1-d988-4c11-bacc-1db389fa0754"
    },
    {
      title: "Create a Secure Data Lake on Cloud Storage",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/08705f16-e956-4841-b5c3-bb32dbb58d91"
    },
    {
      title: "Deploy Kubernetes Applications on Google Cloud",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/c7eb416e-58db-4f97-85fa-af674b9bc79f"
    },
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/a7d8e209-6075-4ce0-a771-b350bc6f3d51"
    },
    {
      title: "Implement DevOps Workflows in Google Cloud",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/9fd6bd21-d541-4ee1-a834-30c30feec07a"
    },
    {
      title: "Store, Process, and Manage Data on Google Cloud - Command Line",
      issuer: "Google Cloud",
      link: "https://www.credly.com/earner/earned/badge/a1e53652-2a9d-4ed0-a70c-3c9fa7ebc06a"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
        <p className="text-lg text-muted-foreground">
          Professional certifications and skill badges earned from industry leaders
        </p>
      </motion.div>

      <div className="w-full overflow-x-auto scrollbar-hide pt-20 pb-8">
        <div className="flex animate-marquee space-x-6 px-6">
          {[...certifications, ...certifications, ...certifications].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex-shrink-0 w-80 relative group cursor-pointer"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 relative overflow-visible group-hover:shadow-accent/20 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getCompanyLogo(cert.issuer) && (
                          <img 
                            src={getCompanyLogo(cert.issuer)!} 
                            alt={cert.issuer} 
                            className="w-6 h-6 object-contain"
                          />
                        )}
                        <h3 className="text-lg font-bold line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground ml-9">
                        {cert.issuer}
                      </p>
                    </div>
                    <FiExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <div className="mt-4 relative z-10">
                    <span className="inline-flex items-center px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                      Verified Certificate
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};