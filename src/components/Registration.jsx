import { CircleCheckBig, Users, Gift } from "lucide-react";

const features = [
  {
    icon: CircleCheckBig,
    title: "Simple Registration",
    description: "Fill out the form and get your digital pass instantly.",
  },
  {
    icon: Users,
    title: "Team Participation",
    description: "Register as a team for hackathons and robo events.",
  },
  {
    icon: Gift,
    title: "Win Big",
    description: "Cash prizes and trophies, and goodies for winners.",
  },
];

const Registration = () => {
  return (
    <section id="registration" className="bg-[#0F172A] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-foreground font-heading mb-6 text-4xl font-bold md:text-5xl">
                Join the{" "}
                <span className="from-primary bg-linear-to-r to-orange-400 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Ready to showcase your skills? Register now for KEC LITE 2032.
                Whether you&apos;re competing or visiting, be part of the
                biggest tech fest.
              </p>

              <div className="space-y-2">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-3 p-4 transition-all">
                    <div className="text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E293B]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-heading mb-1 font-semibold">
                        {title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-border/50 rounded-2xl border bg-[#1E293BB2] p-6 shadow-xl md:p-8">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-neutral-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="John Doe"
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-neutral-400"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="98XXXXXXXX"
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="college"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    College / Institution
                  </label>
                  <input
                    type="text"
                    id="college"
                    placeholder="Kantipur Engineering College"
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>

                <div class="relative">
                  {" "}
                  <label
                    htmlFor="event"
                    className="mb-2 block text-sm font-medium text-neutral-400"
                  >
                    Select Event
                  </label>
                  <select
                    id="event"
                    className="border-border w-full appearance-none rounded-xl border bg-[#1A1D29] px-4 py-3 text-white transition-colors focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/20 focus:outline-none"
                  >
                    <option value="">General Visitor</option>
                    <option value="hackathon">24hr Hackathon</option>
                    <option value="roborace">Robo Race</option>
                    <option value="robosoccer">Robo Soccer</option>
                    <option value="projectdemo">Project Demo</option>
                    <option value="techquiz">Tech Quiz</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 top-7 right-4 flex items-center">
                    <svg
                      class="h-4 w-4 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group bg-primary hover:bg-primary/90 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-lg font-semibold text-white"
                >
                  Submit Registration
                </button>
                <p className="text-center text-sm text-neutral-400">
                  Registration closes 2 days before the event.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
