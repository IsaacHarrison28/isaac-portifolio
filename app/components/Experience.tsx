import { experience } from "@/app/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Professional <span className="text-primary">Experience</span>
      </h2>

      <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-0">
        {experience.map((job, index) => (
          <div key={index} className="mb-10 ml-8 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background"></span>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="text-primary font-medium mb-2">{job.company}</div>
              <div className="text-sm text-gray-500 mb-4">
                {job.date} | {job.location}
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
