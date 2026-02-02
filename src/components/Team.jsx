import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Rajev Sharma",
    role: "Event Coordinator",
    image: "",
  },
  {
    name: "Priya Adhikari",
    role: "Technical Lead",
    image: "",
  },
  {
    name: "Rohan Gupta",
    role: "Management Lead",
    image: "",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-[#0F172A] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground font-heading mb-4 text-4xl font-bold md:text-5xl">
            The Team
          </h2>
          <p className="text-muted-foreground">The minds behind KEC LITE</p>
        </div>

        <div className="mb-12">
          <div className="mb-8 flex flex-col gap-3">
            <h3 className="text-primary font-heading text-xl font-semibold tracking-wider uppercase">
              Core Committee
            </h3>

            <div className="h-px w-60 bg-neutral-600/40"></div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group border-border/50 hover:border-primary/50 hover:shadow-primary/5 rounded-2xl border bg-[#020617]/50 p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <div className="border-primary/30 group-hover:border-primary group-hover:shadow-primary/20 relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-foreground font-heading mb-1 text-lg font-bold">
                  {member.name}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  {member.role}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary flex h-9 w-9 items-center justify-center rounded-lg transition-all"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
