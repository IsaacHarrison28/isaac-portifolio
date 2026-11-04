export const personalInfo = {
  name: "Isaac Harrison Tembo",
  role: "Full-Stack Engineer",
  headline: "Crafting Scalable Digital Experiences",
  description:
    "Hi, I'm Isaac, a Full-Stack Engineer with a strong foundation in Computer Science and hands-on experience building production-grade web, mobile and desktop applications.",
  location: "Lusaka, Zambia",
  email: "isaacharrison2808@gmail.com",
  phone: "+260 77 9688852",
  stats: [
    { value: "2+", label: "Years of Experience" },
    { value: "10+", label: "Technologies Mastered" },
  ],
};

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Figma",
    "Next.js",
    "React Native",
  ],
  backend: ["Node.js", "Express", "Java", "REST APIs", "GraphQL", "Python"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
  tools: ["AWS (Amplify, S3, AppSync)", "Git", "GitHub", "Power Query"],
};

export const experience = [
  {
    title: "Founder",
    company: "Sate Online Services",
    date: "August 2025 - Present",
    location: "Lusaka, Zambia",
    points: [
      "Founded a software development studio specializing in freelance web development projects, mobile app development, and system integrations for clients across various industries.",
      "Successfully delivered client projects on time, within budget, and to the highest quality standards, resulting in customer satisfaction and referrals.",
      "Implemented agile development methodologies, ensuring efficient project management and collaboration with clients.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Hero Control Systems LLC",
    date: "April 2024 - August 2025",
    location: "Lusaka, Zambia (Remote)",
    points: [
      "Developed a commercial educational platform used by 6+ schools in Zambia (Virtual Labs).",
      "Engineered an offline-first quiz functionality for desktop.",
      "Built and maintained a CRM system for nationwide corporate clients.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Hero Control Systems LLC",
    date: "April 2023 - November 2023",
    location: "Lusaka, Zambia (Remote)",
    points: [
      "Pioneered an internal employee and inventory management application.",
      "Assisted in designing the backend architecture for scalability.",
    ],
  },
];

export const aboutMe = {
  journey:
    "I fell in love with full-stack development because of what is achievable with this skill set. I don't just build interesting UIs that catch the user's eye; I design the backend infrastructure that ensures the application is functional, reliable, and delivers seamless services the user never has to worry about.",
  excitement:
    "I am currently exploring the world of Data Science and Data Analysis. I'm fascinated by how data helps businesses make informed decisions. Data is crucial for understanding impact and results, and I love the challenge of simplifying complex datasets into actionable insights.",
  humanSide:
    "Away from software engineering, I prioritize staying active. You'll usually find me working out at the gym, playing football (soccer!), exploring new places, watching YouTube, or listening to music. These hobbies keep me energized and balanced.",
};

export const projects = [
  {
    id: "satedocs",
    title: "SateDocs",
    type: "Personal Project",
    description:
      "A secure and intuitive web application, in its simplest form, designed to allow users to freely transform images into PDFs. Built with a focus on seamless user experience and robust backend architecture. More featured are being added to add more functionality according to different needs and solve different problems related to document editing and organization.",
    image: "/satedocs-screenshot.png",
    liveUrl: "https://sate-docs.vercel.app/",
    githubUrl: "https://github.com/IsaacHarrison28/SateDocs",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    hasVideo: false,
  },
  {
    id: "kip",
    title: "Kip",
    type: "Personal Project",
    description:
      "An innovative platform built to solve a unique problem; it allows users to store their links from different sources e.g. social media sources or articles all in one place so they can easily find them whenever needed. Watch the video demo to see how Kip handles real-time data and delivers a flawless user experience from front to back.",
    image: "/kip-thumbnail.png",
    videoUrl: "https://www.youtube.com/embed/lfNzrDgvQeA",
    liveUrl: "https://kip-eosin.vercel.app",
    githubUrl: "https://github.com/IsaacHarrison28/Kip",
    techStack: [
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Render",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Supabase",
    ],
    hasVideo: true,
  },
];
