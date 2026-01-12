import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6 text-gum-pink tracking-tighter">
            Gowtham.dev
          </h2>
          <p className="text-xl max-w-md text-gray-400">
            Crafting digital experiences with precision and passion. Always open
            to interesting conversations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-gum-yellow">Navigation</h3>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <Link href="/" className="hover:text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-white hover:underline"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-white hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-gum-teal">Connect</h3>
          <div className="flex gap-4">
            <a
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              className="p-2 bg-white text-black rounded-lg hover:bg-gum-pink transition-colors"
            >
              <Github />
            </a>
            <a
              href={DATA.contact.social.X.url}
              target="_blank"
              className="p-2 bg-white text-black rounded-lg hover:bg-gum-pink transition-colors"
            >
              <Twitter />
            </a>
            <a
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              className="p-2 bg-white text-black rounded-lg hover:bg-gum-pink transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href={DATA.contact.social.email.url}
              target="_blank"
              className="p-2 bg-white text-black rounded-lg hover:bg-gum-pink transition-colors"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="font-mono text-[10px] md:text-xs border border-gray-700 px-2 py-1 rounded">
            Last deployed: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
    </footer>
  );
}
