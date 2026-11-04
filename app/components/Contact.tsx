"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import {
  LinkedinIcon as Linkedin,
  GithubIcon as Github,
} from "@/app/components/Icons";
import { personalInfo } from "@/app/lib/data";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMACESSKEY as string,
    );

    formData.append(
      "subject",
      `New Portfolio Message from ${formData.get("name")}`,
    );

    formData.append("from_name", formData.get("name") as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi,
          my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="bg-primary/5 border border-primary/10 p-8 rounded-3xl h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">
              Let's build something <span className="text-primary">great</span>{" "}
              together.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently looking for new opportunities. If you have a project
              that needs a dedicated Full-Stack Engineer, let's talk!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-background p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-foreground">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-background p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-foreground">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="bg-background p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://www.linkedin.com/in/isaac-harrison"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-background rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin width={20} height={20} />
              </a>
              <a
                href="https://github.com/IsaacHarrison28"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-background rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-primary hover:text-white transition-all"
              >
                <Github width={20} height={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-background border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Isaac Harrison"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="isaacharrison2808@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Hello Isaac, I'd like to talk about..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={20} /> Message Sent Successfully!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send size={18} />
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
