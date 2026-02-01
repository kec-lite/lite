import { Lightbulb, Users, Trophy, Cpu } from "lucide-react";

const About = () => {
  const features = [
    { icon: Cpu, label: "Innovation", color: "#60A5FA" },
    { icon: Users, label: "Collaboration", color: "#FB923C" },
    { icon: Trophy, label: "Competition", color: "#C084FC" },
    { icon: Lightbulb, label: "Creativity", color: "#4ADE80" },
  ];

  return (
    <section id="about" className="bg-[#0F172A] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-foreground font-heading mb-6 text-4xl leading-tight font-bold md:text-5xl">
              Innovating for a
              <br />
              <span className="from-primary bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
                Better Tomorrow
              </span>
            </h2>

            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              KEC LITE is the annual technological festival of Kantipur
              Engineering College. It serves as a platform for young minds to
              showcase their innovative ideas, compete in high-level technical
              events, and collaborate across disciplines.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              From robotics to civil structures, from software solutions to
              communication systems, we celebrate engineering in all its forms.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {features.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${color}20`, color: color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="border-border/50 bg-background/5 relative overflow-hidden rounded-2xl border shadow-2xl shadow-gray-600/50">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="bg-primary/20 absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl blur-2xl" />
            <div className="absolute -top-6 -right-6 -z-10 h-40 w-40 rounded-2xl bg-orange-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
