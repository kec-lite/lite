import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const sponsors = ["Broadway Infosys", "Evolve IT", "Aether", "Edusanjal", "Programiz"];

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/kec.lite/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61555896277399",
    },
  ];

  const quickLinks = ["About Us", "Events", "Schedule", "Sponsors"];

  return (
    <footer className="border-border/50 border-t px-4 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-muted-foreground font-heading mb-6 text-center text-sm">
            SUPPORTED BY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-18">
            {sponsors.map((sponsor) => (
              <span
                key={sponsor}
                className="text-muted-foreground/40 hover:text-muted-foreground text-lg font-bold tracking-wider transition-colors"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>

        <div className="border-border/50 border-t pt-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <a href="#" className="group mb-4 inline-flex items-center gap-2">
                <div className="from-primary shadow-primary/25 flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br to-orange-600 shadow-lg">
                  <span className="font-heading text-sm font-bold text-white">
                    K
                  </span>
                </div>
                <span className="text-foreground font-heading text-lg font-bold">
                  KEC <span className="text-primary">LITE</span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kantipur Engineering College&apos;s annual tech fest celebrating
                the brightest minds in engineering.
              </p>
            </div>

            <div>
              <h4 className="text-foreground font-heading mb-4 font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-heading mb-4 font-semibold">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground flex items-center gap-3 text-sm">
                  <MapPin className="text-primary h-4 w-4 shrink-0" />
                  Dhapakhel, Lalitpur
                </li>
                <li className="text-muted-foreground flex items-center gap-3 text-sm">
                  <Phone className="text-primary h-4 w-4 shrink-0" />
                  01-5229204
                </li>
                <li className="text-muted-foreground flex items-center gap-3 text-sm">
                  <Mail className="text-primary h-4 w-4 shrink-0" />
                  lite@kec.edu.np
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-heading mb-4 font-semibold">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    target={href ? "_blank" : "_self"}
                    rel={href ? "noopener noreferrer" : undefined}
                    className="bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary flex h-10 w-10 items-center justify-center rounded-full transition-all"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-border/50 mt-12 flex justify-between border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2082 Kantipur Engineering College. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Developed with ❤️ by KEC Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
