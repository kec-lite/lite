import { useState } from "react";
import { ArrowRight, Users } from "lucide-react";

const categories = ["All", "Electronics", "Computer", "Civil"];

const events = [
  {
    title: "Robo Race",
    description:
      "Design and build a robot capable of traversing a challenging track in the fastest time.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    prize: "Rs. 15,000",
    category: "Electronics",
    participants: "2-4",
  },
  {
    title: "24hr Hackathon",
    description:
      "Solve real-world problems through code creation in this intense 24-hour coding marathon.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    prize: "Rs. 35,000",
    category: "Computer",
    participants: "3-5",
  },
  {
    title: "Project Demo",
    description:
      "Showcase your innovative projects and demonstrate your engineering prowess.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    prize: "Rs. 25,000",
    category: "All",
    participants: "1-4",
  },
  {
    title: "Robo Soccer",
    description:
      "Build a robot to compete in this exciting robot soccer tournament.",
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=300&fit=crop",
    prize: "Rs. 15,000",
    category: "Electronics",
    participants: "2-4",
  },
  {
    title: "Tech Quiz",
    description:
      "Test your knowledge across all domains of technology and engineering.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    prize: "Rs. 8,000",
    category: "All",
    participants: "2-3",
  },
  {
    title: "Code Sprint",
    description: "Fast-paced coding challenges for competitive programmers.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    prize: "Rs. 15,000",
    category: "Computer",
    participants: "1-2",
  },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = events.filter(
    (event) => activeCategory === "All" || event.category === activeCategory,
  );

  return (
    <section id="events" className="bg-[#0F172A] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-foreground font-heading mb-4 text-4xl font-bold md:text-5xl">
              Featured Events
            </h2>
            <p className="text-muted-foreground">
              Compete, learn, and win exciting prizes
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary shadow-primary/25 text-white shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.title}
              className="group border-border/50 bg-card hover:border-primary/50 hover:shadow-primary/5 overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="from-card absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                <div className="bg-primary absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium text-white">
                  {event.category}
                </div>
              </div>
              <div className="bg-[#1E293B] p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-foreground font-heading text-xl font-semibold">
                    {event.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Users className="h-3.5 w-3.5" />
                    {event.participants}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1.5 text-sm font-semibold text-white">
                    Prize: {event.prize}
                  </span>
                  <a
                    href="#registration"
                    className="group/btn text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium transition-colors"
                  >
                    Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
