import { motion } from "framer-motion";

export const VolunteerActivities = () => {
  const activities = [
    {
      title: "e-Yantra Competition - Team Lead",
      description: "Led my team in the e-Yantra robotics competition using Python and ML.",
      image: "/eyan.png"
    },
    {
      title: "AI/ML with Data Science Training & Internship",
      description: "Completed a 6-week AI/ML internship and built a Credit Card Fraud Detection model.",
      image: "/image.png"
    },
    
    {
      title: "Build with AI - Google Event",
      description: "Participated in Google's AI workshop and networking event",
      image: "/bulidwithai.png"
    },
    {
      title: "SAP Event",
      description: "Attended SAP technology conference and innovation showcase",
      image: "/sap.png"
    },
    {
      title: "Content Creator Event at MS Office",
      description: "Microsoft content creator meetup and collaboration session",
      image: "/content.png"
    },
    {
      title: "DevFest Extended at Apura Office by Google",
      description: "Google Developer Festival with tech talks and workshops",
      image: "/devfest.png"
    },
    {
      title: "Expert Live India at MS Office",
      description: "Microsoft Expert Live session with industry professionals",
      image: "/expert.png"
    },
    {
      title: "Google Arcade Cloud Facilitator Program 2024",
      description: "Completed cloud facilitator program and received swags",
      image: "/arcade.png"
    },
    {
      title: "Unisys Online Hackathon",
      description: "Reached pre-finals in Unisys innovation hackathon",
      image: "/unisys.png"
    },
    {
      title: "Arbitrum Open House Hackathon",
      description: "Participated in blockchain hackathon on Arbitrum network",
      image: "/openhouse.png"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Volunteer Activities</h2>
        <p className="text-lg text-muted-foreground">
          Events, hackathons, and community activities I've participated in
        </p>
      </motion.div>

      <div className="w-full overflow-hidden py-8">
        <div className="flex animate-marquee space-x-6 px-6">
          {[...activities, ...activities].map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex-shrink-0 w-80 relative group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl p-4 transition-all duration-300 relative overflow-hidden group-hover:shadow-accent/20 group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-32 object-cover rounded-lg mb-3 relative z-10"
                />
                <h3 className="text-sm font-bold mb-2 line-clamp-2 relative z-10">
                  {activity.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};