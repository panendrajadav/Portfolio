import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-14 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-7"
        >
          Hi there! 👋
        </motion.h1>
        <motion.div
          className="p-4 md:p-6 -mt-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img
            src="https://i.pinimg.com/originals/98/59/12/98591272861e66a02eecf5dae0450c73.gif"
            alt="Greeting Animation"
            className="w-90 h-90 md:w-100 md:h-100 mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};