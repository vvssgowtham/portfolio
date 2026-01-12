import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Experience Section */}
      <div id="experience" className="mb-24 scroll-mt-24">
        <div className="mb-12 border-l-8 border-gum-yellow pl-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {(DATA.work as readonly any[]).map((role, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 p-8 border-2 border-black rounded-[30px] bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-shadow"
            >
              <div className="flex-shrink-0">
                {role.logoUrl ? (
                  <div className="w-16 h-16 relative rounded-full border-2 border-black overflow-hidden bg-gray-100">
                    <Image
                      src={role.logoUrl}
                      alt={role.company}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full border-2 border-black bg-gum-teal flex items-center justify-center text-white font-bold text-2xl">
                    {role.company[0]}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-2xl font-black">{role.company}</h3>
                  <span className="font-mono text-sm border border-black px-2 py-1 rounded bg-gum-bg">
                    {role.start} - {role.end}
                  </span>
                </div>
                <p className="text-lg font-bold text-gum-teal mb-4">
                  {role.title}
                </p>
                <p className="text-lg text-gray-700 font-medium">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section within Bento */}
      <div
        id="skills"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 scroll-mt-24"
      >
        <div className="p-10 border-2 border-black rounded-[30px] bg-gum-yellow shadow-[4px_4px_0px_0px_#000] flex flex-col justify-center">
          <h3 className="text-4xl font-black mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-lg hover:-translate-y-1 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="p-10 border-2 border-black rounded-[30px] bg-black text-white shadow-[4px_4px_0px_0px_#ccc] flex flex-col justify-center">
          <h3 className="text-4xl font-black mb-6 text-gum-pink">
            Let's Connect
          </h3>
          <p className="text-xl font-medium mb-8">
            Currently looking for new opportunities. If you have a project in
            mind or just want to say hi, feel free to reach out!
          </p>
          <a
            href={DATA.contact.email}
            className="self-start px-8 py-3 bg-white text-black font-black text-xl rounded-full border-2 border-white hover:bg-gum-pink hover:border-gum-pink transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>

      {/* Projects Header & Grid (Moved to bottom as per "Experience, Skills, Projects" visual hierarchy? No, strictly navbar order. But typically sections follow navbar order. The user asked for "Navbar order should be Experience, Skills, Projects". I should probably reorder the sections too to match the navbar flow for better UX, or just keep them as is. Usually top-to-bottom matches left-to-right. I'll move Experience up, Skills middle, Projects bottom in the BentoGrid to match the requested navbar order.)
      
      Wait, currently BentoGrid has "Projects" at the top. 
      If I change Navbar to [Experience, Skills, Projects], the user expects to scroll down and see Experience first? Or maybe not.
      "There are modifications required in the sense keep my projects, experience and required ones" -> User wants specific content.
      "navbar order should be experience, skills, projects" -> User specifically asked for NAVBAR order.
      I'll reorder the SECTIONS to match logically: Experience -> Skills -> Projects.
      */}

      {/* Reordering content to: Experience -> Skills -> Projects */}

      {/* Projects Header - MOVED DOWN */}
      <div id="projects" className="scroll-mt-24">
        <div className="mb-16 border-l-8 border-gum-pink pl-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Selected Work
          </h2>
          <p className="text-xl mt-2 font-medium">
            Things I've built that I'm proud of.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {(DATA.projects as readonly any[]).map((project, i) => {
            const colors = ["bg-gum-pink", "bg-gum-yellow", "bg-gum-teal"];
            const color = colors[i % colors.length];

            return (
              <Link
                href={project.href}
                target="_blank"
                key={i}
                className={`group relative flex flex-col justify-between p-8 min-h-[400px] border-2 border-black rounded-[30px] bg-white transition-all hover:-translate-y-2 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_#000]`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 ${color} rounded-[28px] transition-opacity`}
                />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className={`inline-block w-12 h-12 rounded-full border-2 border-black ${color}`}
                    ></span>
                    <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-600 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-black rounded-full text-sm font-bold bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 border border-black rounded-full text-sm font-bold bg-white">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
