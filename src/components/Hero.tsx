import { DATA } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row border-b-2 border-black">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-20 bg-gum-bg md:border-r-2 md:border-black">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-outline text-white md:text-black">
          BUILDING <br />
          <span className="text-gum-pink bg-black px-2">SCALABLE</span> <br />
          SYSTEMS.
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-xl mb-12">
          I'm{" "}
          <span className="underline decoration-wavy decoration-gum-teal underline-offset-4">
            {DATA.name}
          </span>
          .{DATA.description}
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="gumroad-button bg-gum-yellow hover:bg-black hover:text-white text-xl px-8 py-4"
          >
            View Projects
          </a>
          <a
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            className="gumroad-button bg-white hover:bg-gum-teal hover:text-white text-xl px-8 py-4"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right Visual */}
      <div className="flex-1 bg-gum-black flex items-center justify-center relative overflow-hidden p-10">
        {/* Abstract shapes / "Cartoon" element */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative z-10 w-full max-w-sm aspect-square bg-gum-pink border-4 border-white rounded-full flex items-center justify-center shadow-[10px_10px_0px_0px_#fff]">
          <div className="w-3/4 h-3/4 bg-gum-yellow border-4 border-black rounded-full flex items-center justify-center animate-pulse">
            <div className="text-9xl">🚀</div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_#fff] rotate-[-5deg]">
          <p className="font-bold font-mono">Full Stack Dev</p>
        </div>
        <div className="absolute top-20 left-10 bg-gum-teal text-white border-2 border-white p-3 shadow-[4px_4px_0px_0px_#000] rotate-[5deg]">
          <p className="font-bold font-mono">System Design</p>
        </div>
      </div>
    </section>
  );
}
