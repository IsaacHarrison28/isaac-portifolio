"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/app/components/Icons";
import { personalInfo } from "@/app/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {personalInfo.headline.split(" ").map((word, i) => (
              <span key={i} className={i > 1 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            {personalInfo.description}
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/isaac-harrison/"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/IsaacHarrison28"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </div>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl transform scale-110 -z-10"></div>

          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Image
              src="/avatar.JPG"
              alt="Isaac Harrison Tembo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
