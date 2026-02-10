import { Building2, Zap, Radio, Code } from "lucide-react";

const disciplines = [
  {
    icon: Building2,
    title: "Civil",
    description:
      "Infrastructure, sustainable design, and urban development shaping our physical world.",
    items: ["Surveying", "Model Making"],
    color: "#EAB308",
  },
  {
    icon: Zap,
    title: "Electronics",
    description:
      "Embedded systems, robotics, and circuit design powering the future of automation.",
    items: ["Robotics", "IoT Projects"],
    color: "#3B82F6",
  },
  {
    icon: Radio,
    title: "Communication",
    description:
      "Networking, signal processing, and telecommunications connecting the globe.",
    items: ["5G Technology", "Signal Systems"],
    color: "#22C55E",
  },
  {
    icon: Code,
    title: "Computer",
    description:
      "Software engineering, AI, and data science solutions driving us to the digital age.",
    items: ["Web Development", "Machine Learning"],
    color: "#A855F7",
  },
];

const Disciplines = () => {
  return (
    // <section id="disciplines" className="bg-[#020617] px-4 py-24">
    <section
      id="disciplines"
      className="bg-linear-to-b from-[#012D71] via-[#0C3B7E] to-[#1E477C] px-4 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground font-heading mb-4 text-4xl font-bold md:text-5xl">
            Engineering Disciplines
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Exploring the four pillars of innovation at KEC
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;
            return (
              <div
                key={discipline.title}
                className={`group border-border/50 relative overflow-hidden rounded-2xl border bg-[#1E1E1E] p-6 transition-all duration-300 hover:border-(--hover-color) hover:shadow-xl`}
                style={{ "--hover-color": discipline.color }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${discipline.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div
                    style={{
                      backgroundColor: `${discipline.color}10`,
                      color: discipline.color,
                    }}
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-foreground font-heading mb-3 text-xl font-semibold">
                    {discipline.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {discipline.description}
                  </p>
                  <ul className="space-y-2">
                    {discipline.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-center gap-2 text-sm"
                      >
                        <span
                          style={{ backgroundColor: discipline.color }}
                          className="h-1.5 w-1.5 rounded-full"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
