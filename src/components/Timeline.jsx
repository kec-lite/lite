const timelineDays = [
  { title: "AI Videography", date: "February 8, 2026", link: "" },
  { title: "3D Printing Workshop", date: "February 9, 2026", link: "" },
  { title: "Game Dev Session", date: "February 10, 2026", link: "" },
  { title: "Maze Solver Workshop", date: "February 13, 2026", link: "" },
  { title: "Capture The Flag", date: "February 19, 2026", link: "" },
  { title: "Hack-a-LITE", date: "February 20, 2026", link: "" },
  { title: "NLP Explained", date: "February 22, 2026", link: "" },
  { title: "Attack and Defense", date: "February 22, 2026", link: "" },
  { title: "Code War", date: "February 23, 2026", link: "" },
  { title: "Survey Rush", date: "February 23, 2026", link: "" },
  { title: "UI/UX Workshop", date: "February 24, 2026", link: "" },
  { title: "AutoCAD Competition", date: "February 24, 2026", link: "" },
  { title: "Maze Competition", date: "February 24, 2026", link: "" },
  { title: "Circuit Debugging", date: "February 24, 2026", link: "" },
  { title: "Shake Table", date: "February 25, 2026", link: "" },
  { title: "Integration Bee", date: "February 25, 2026", link: "" },
  { title: "Popsicle Bridge", date: "February 25, 2026", link: "" },
  { title: "Robo Soccer", date: "February 25, 2026", link: "" },
  { title: "Robo Race", date: "February 25, 2026", link: "" },
  { title: "Project Demonstration", date: "February 26, 2026", link: "" },
  { title: "Trace the Code", date: "February 26, 2026", link: "" },
  { title: "Templatathon", date: "", link: "" },
];

const Timeline = () => {
  const scrollToEvent = (eventName) => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="timeline" className="bg-[#020617] px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground font-heading mb-4 text-4xl font-bold md:text-5xl">
            Event Timeline
          </h2>
          <p className="text-muted-foreground">Click on an event to register</p>
        </div>

        <div className="relative">
          <div className="from-primary via-primary/50 to-border absolute top-0 bottom-0 left-4 w-0.5 bg-linear-to-b md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {timelineDays.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute top-2 left-4 z-10 flex h-4 w-4 -translate-x-1.5 items-center justify-center md:left-1/2 md:-translate-x-2">
                  <div className="border-background bg-primary shadow-primary/25 h-4 w-4 rounded-full border-4 shadow-lg" />
                </div>

                <div
                  className={`ml-12 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-primary/5 block w-full rounded-2xl border p-5 text-left transition-all hover:shadow-xl"
                  >
                    <h3 className="text-foreground group-hover:text-primary font-heading text-lg font-semibold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {item.date}
                    </p>
                  </a>
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
