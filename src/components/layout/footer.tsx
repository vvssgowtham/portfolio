import { Container } from "@/components/ui/container";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} V V S S Gowtham Korupolu. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://github.com/vvssgowtham"
              target="_blank"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/vvssgowtham"
              target="_blank"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* Add Twitter/X if applicable or other social */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
