// components/Portfolio.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/app/lib/data";
import { ExternalLink, Play } from "lucide-react";
import { GithubIcon as Github } from "@/app/components/Icons";
import VideoModal from "./VideoModal";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A selection of my recent personal work, showcasing my ability to build
          full-stack applications from concept to deployment.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          // Alternates layout: even index = image left, odd index = image right
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
            >
              {/* Image / Video Thumbnail Side */}
              <div className="w-full lg:w-3/5 group relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.hasVideo ? (
                    <button
                      onClick={() => setSelectedVideo(project.videoUrl!)}
                      className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Play size={20} fill="currentColor" /> Watch Demo
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ExternalLink size={20} /> Visit Live Site
                    </a>
                  )}
                </div>
              </div>

              {/* Text / Info Side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">
                  {project.type}
                </span>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors"
                    >
                      Source Code <Github height={18} width={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ""}
      />
    </section>
  );
}
