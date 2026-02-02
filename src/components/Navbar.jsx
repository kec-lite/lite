import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#disciplines", label: "Disciplines" },
    { href: "#events", label: "Events" },
    { href: "#timeline", label: "Schedule" },
    { href: "#team", label: "Team" },
  ];

  return (
    <nav className="border-border/50 fixed top-0 right-0 left-0 z-50 border-b bg-[#1A2436]  backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <div className="group flex items-center gap-2">
            <div className="from-primary shadow-primary/25 flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br to-orange-600 shadow-lg">
              <span className="font-heading text-sm font-bold text-white">
                K
              </span>
            </div>
            <span className="text-foreground font-heading text-lg font-bold">
              KEC <span className="text-primary">LITE</span>
            </span>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-muted-foreground px-4 py-2 text-sm font-medium text-white transition duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#registration"
              className="bg-primary hover:bg-primary/75 ml-4 inline-flex items-center justify-center rounded-3xl px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Register Now
            </a>
          </div>

          <button
            type="button"
            className="text-foreground hover:bg-secondary inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-border/50 border-t py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg px-4 py-3 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#registration"
                className="bg-primary shadow-primary/25 mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
