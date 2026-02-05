import { useState } from "react";
import { ArrowRight, Users, ChevronDown, ChevronUp } from "lucide-react";

const categories = ["All", "Electronics", "Computer", "Civil", "Extra"];

const categoryColors = {
  Electronics: "bg-blue-500",
  Computer: "bg-purple-500",
  Civil: "bg-amber-500",
  Extra: "bg-emerald-500",
  All: "bg-orange-500",
};

const events = [
  {
    title: "AI Videography",
    description:
      "A creative competition where participants use AI tools to produce innovative and engaging videos.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    category: "Extra",
    participants: "",
    link: "",
  },
  {
    title: "3D Printing Workshop",
    description:
      "A hands-on session teaching participants how to design and fabricate physical models using 3D printing technology for engineering prototypes.",
    image:
      "https://images.unsplash.com/photo-1631857507906-92cce79cfe50?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "",
    link: "",
  },
  {
    title: "Game Dev Session",
    description:
      "An interactive session introducing the fundamentals of game development, covering game design concepts, development tools, and basic workflows.",
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Maze Solver Workshop",
    description:
      "Learn to build and program autonomous robots that can navigate through complex mazes using sensors and algorithms.",
    image:
      "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "",
    link: "",
  },
  {
    title: "Capture The Flag",
    description:
      "A thrilling cybersecurity competition where teams solve security challenges to capture digital flags and earn points.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Hack-a-LITE",
    description:
      "An intense hackathon where teams collaborate to build innovative solutions and prototypes within a limited timeframe.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "NLP Explained",
    description:
      "Making sense of human language in AI - explore how machines understand, interpret, and generate human language.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Attack and Defense",
    description:
      "A cybersecurity battle where teams alternate between attacking opponent systems and defending their own infrastructure.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Code War",
    description:
      "An intense competitive programming battle where coders face off solving algorithmic challenges under time pressure.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Survey Rush",
    description:
      "A civil engineering field competition testing surveying skills, precision measurements, and land mapping techniques.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    category: "Civil",
    participants: "",
    link: "",
  },
  {
    title: "Integration Bee",
    description:
      "A fast-paced mathematics competition where participants race to solve integration problems with speed and accuracy.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    category: "Extra",
    participants: "",
    link: "",
  },
  {
    title: "UI/UX Workshop",
    description:
      "Learn the principles of user interface and user experience design, from wireframing to creating stunning prototypes.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Shake Table",
    description:
      "Design and build earthquake-resistant structures to withstand simulated seismic activity on a shake table.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    category: "Civil",
    participants: "",
    link: "",
  },
  {
    title: "AutoCAD Competition",
    description:
      "Showcase your CAD skills by creating precise technical drawings and 3D models under competitive conditions.",
    image:
      "https://images.unsplash.com/photo-1545670723-196ed0954986?w=400&h=300&fit=crop",
    category: "Civil",
    participants: "",
    link: "",
  },
  {
    title: "Popsicle Bridge",
    description:
      "Engineer and construct a bridge using only popsicle sticks, testing structural integrity and load-bearing capacity.",
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop",
    category: "Civil",
    participants: "",
    link: "",
  },
  {
    title: "Maze Competition",
    description:
      "Build autonomous robots that can navigate through intricate mazes in the shortest time possible.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "30",
    link: "",
  },
  {
    title: "Circuit Debugging",
    description:
      "Put your electronics troubleshooting skills to the test by identifying and fixing faults in complex circuits.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "30",
    link: "",
  },
  {
    title: "Robo Soccer",
    description:
      "Build and program robots to compete in an exciting robot soccer tournament against other teams.",
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "40",
    link: "",
  },
  {
    title: "Robo Race",
    description:
      "Design and build the fastest robot to race through challenging obstacle courses and beat the competition.",
    image:
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop",
    category: "Electronics",
    participants: "30",
    link: "",
  },
  {
    title: "Project Demonstration",
    description:
      "Showcase your innovative engineering projects to judges and peers, demonstrating technical excellence and creativity.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
    category: "All",
    participants: "",
    link: "",
  },
  {
    title: "Trace the Code",
    description:
      "Test your code comprehension skills by analyzing and predicting the output of complex code snippets.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
  {
    title: "Templatathon",
    description:
      "A design sprint where participants create stunning website templates and UI designs within a time limit.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
    category: "Computer",
    participants: "",
    link: "",
  },
];

const INITIAL_DISPLAY_COUNT = 6;

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredEvents = events.filter(
    (event) => activeCategory === "All" || event.category === activeCategory,
  );

  const displayedEvents = showAll
    ? filteredEvents
    : filteredEvents.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreEvents = filteredEvents.length > INITIAL_DISPLAY_COUNT;

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
                    ? `${categoryColors[category]} text-white shadow-lg`
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedEvents.map((event) => (
            <a
              key={event.title}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-border/50 hover:border-primary/50 hover:shadow-primary/5 block overflow-hidden rounded-2xl border bg-[#1E293B] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="from-card absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
                <div
                  className={`${categoryColors[event.category]} absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium text-white`}
                >
                  {event.category}
                </div>
              </div>
              <div className="p-6">
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
                <div className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                  Register
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {hasMoreEvents && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all hover:scale-105"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="h-5 w-5" />
                </>
              ) : (
                <>
                  Show More ({filteredEvents.length - INITIAL_DISPLAY_COUNT}{" "}
                  more)
                  <ChevronDown className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
