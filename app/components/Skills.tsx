import { skills } from "@/app/lib/data";

export default function Skills() {
  const categories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "Cloud & Tools", items: skills.tools },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/50"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-background p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-lg font-bold mb-4 text-primary">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
