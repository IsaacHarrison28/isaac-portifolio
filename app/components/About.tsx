"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutMe } from "@/app/lib/data";
import { Code2, LineChart, Trophy, MapPin } from "lucide-react";

export default function About() {
  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Get to know the developer behind the code. Here is a glimpse into my
          journey, my current focus, and what I do when I step away from the
          keyboard.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image & Quick Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col items-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src="/avatar_2.png"
              alt="Isaac Harrison Tembo"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-col gap-3 mt-6 w-full max-w-sm">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <MapPin className="text-primary" size={20} />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-foreground">Lusaka, Zambia.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
              <Code2 className="text-primary" size={20} />
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p className="font-medium text-foreground">
                  BSc Computer Science
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Story Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* The Journey  */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-background border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 size={80} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2">
              <Code2 size={24} /> My Journey & Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutMe.journey}
            </p>
          </motion.div>

          {/* Current Excitement */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <LineChart size={60} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
              <LineChart size={20} /> Current Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {aboutMe.excitement}
            </p>
          </motion.div>

          {/* The Human Side */}
          <motion.div
            variants={itemVariants}
            className="bg-background border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={60} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
              <Trophy size={20} /> Beyond the Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {aboutMe.humanSide}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
