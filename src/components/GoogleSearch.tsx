import { motion } from "framer-motion";
import { getImageUrl } from "@/utils/assets";

export const GoogleSearch = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Find Me on Google.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When you search "Panendra Jadav" on Google, you'll find me listed as an aspiring computer engineer and tech enthusiast from India, recognized for my hands-on work in AI/ML, Android development, IoT, and cybersecurity.
              </p>
              <p>
                Google highlights my involvement with Microsoft for Startups, GDG Bangalore, and several real-world projects that showcase my practical learning approach.
              </p>
              <p>
                My search results also display my professional profile, including experience at KPVDR BOTSAPI Pvt. Ltd., an internship at HCLTech, and various projects ranging from Bluetooth-based communication apps to AI tools and blockchain systems.
              </p>
              <p>
                Additionally, my hackathon participation and engineering contributions show up, reflecting my passion for building and solving real problems.
              </p>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[10px] shadow-2xl transition-all duration-300 group-hover:shadow-accent/20 group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]" />
              <img
                src={getImageUrl("search.png")}
                alt="Google Search Results for Panendra Jadav"
                className="w-full h-auto transition-transform duration-300 relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};