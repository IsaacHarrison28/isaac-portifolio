"use client";
import { ArrowUp } from "lucide-react";
import {
  LinkedinIcon as Linkedin,
  GithubIcon as Github,
} from "@/app/components/Icons";
import { personalInfo } from "@/app/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="font-bold text-2xl text-primary w-fit">
              Isaac Harrison
              <span className="text-foreground">.</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Engineer crafting scalable digital experiences. Always
              open to discussing new projects and opportunities.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/isaac-harrison"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-background rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin width={18} height={18} />
              </a>
              <a
                href="https://github.com/IsaacHarrison28"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-background rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="GitHub"
              >
                <Github width={18} height={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm text-right"
            >
              {personalInfo.email}
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-right">
              {personalInfo.location}
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors group"
            >
              Back to Top
              <div className="p-2 bg-primary/10 rounded-full group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
