import { useState } from "react";
import { ArrowRight, Users, ChevronDown, ChevronUp } from "lucide-react";
import { events } from "../lists/events";

const categories = ["All", "Electronics", "Computer", "Civil", "Extra"];

const categoryColors = {
  Electronics: "bg-blue-500",
  Computer: "bg-purple-500",
  Civil: "bg-amber-500",
  Extra: "bg-emerald-500",
  All: "bg-orange-500",
};

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
    // <section id="events" className="bg-[#0F172A] px-4 py-24">
    <section id="events" className="bg-[#020617] px-4 py-24">
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
          {displayedEvents.map((event) => {
            const CardWrapper = event.click ? "a" : "div";
            const cardProps = event.click
              ? {
                  href: event.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={event.title}
                {...cardProps}
                className={`group border-border/50 block overflow-hidden rounded-2xl border bg-[#1E293B] transition-all duration-300 ${
                  event.click
                    ? "hover:border-primary/50 hover:shadow-primary/5 cursor-pointer hover:shadow-xl"
                    : "cursor-not-allowed opacity-65"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`h-full w-full object-cover transition-transform duration-500 ${
                      event.click ? "group-hover:scale-110" : ""
                    }`}
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
                  <div
                    className={`inline-flex items-center gap-1 text-sm font-medium ${
                      event.click ? "text-primary" : "text-primary/80"
                    }`}
                  >
                    {event.click ? "Register Now" : "Registration Opening Soon"}
                    {event.click && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
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
