import { Clock, MapPin } from "lucide-react";

const timelineEvents = [
  {
    day: "Day 01",
    date: "Opening",
    title: "Inauguration & Kickoff",
    description:
      "Official opening ceremony, keynote by the dean of the Civil department and Project Exhibition set-up.",
    time: "9:00 AM",
    location: "Main Hall",
  },
  {
    day: "Day 02",
    date: "Competition",
    title: "Robo Wars & Gaming",
    description:
      "The final is up with Robo Wars Wars, Robo Soccer, and E-Sports Tournaments.",
    time: "10:00 AM",
    location: "Ground",
  },
  {
    day: "Day 03",
    date: "Closing",
    title: "Prize Distribution",
    description:
      "Final competitions, project presentations, and awards ceremony for all events.",
    time: "2:00 PM",
    location: "Auditorium",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="bg-[#020617] px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground font-heading mb-4 text-4xl font-bold md:text-5xl">
            Event Timeline
          </h2>
          <p className="text-muted-foreground">
            Three days of non-stop innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="from-primary via-primary/50 to-border absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-2 left-4 z-10 flex h-4 w-4 -translate-x-1.5 items-center justify-center md:left-1/2 md:-translate-x-2">
                  <div className="border-background bg-primary shadow-primary/25 h-4 w-4 rounded-full border-4 shadow-lg" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-primary/5 rounded-2xl border p-6 transition-all hover:shadow-xl">
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                        {event.day}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-foreground font-heading mb-2 text-xl font-semibold">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-3 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="bg-secondary text-muted-foreground inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium">
                        <Clock className="text-primary h-3.5 w-3.5" />
                        {event.time}
                      </span>
                      <span className="bg-secondary text-muted-foreground inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium">
                        <MapPin className="text-primary h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
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
