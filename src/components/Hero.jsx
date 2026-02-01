import { ArrowRight, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-glass-stack relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3B82F64D]/30 bg-[#1E3A8A4D]/30 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-sm font-medium text-[##BFDBFE]">
            THE FUTURE OF ENGINEERING IS HERE
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          KEC{" "}
          <span className="from-primary to-primary bg-linear-to-r via-orange-400 bg-clip-text text-transparent">
            LITE
          </span>
        </h1>

        {/* Year Badge */}
        <div className="mb-6">
          <span className="font-heading text-3xl font-bold tracking-wider text-[#BFDBFE]">
            2082
          </span>
        </div>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#9CA3AF] sm:text-xl">
          Experience the convergence of innovation, technology, and creativity
          at Nepal&apos;s premier engineering festival.
        </p>

        {/* CTA Buttons */}
        <div className="mb-24 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#events"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-lg font-semibold text-black hover:bg-white/90"
          >
            Explore Events
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#registration"
            className="text-foreground inline-flex items-center justify-center rounded-xl border border-white/10 bg-neutral-600/30 px-5 py-3 text-lg font-semibold backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
          >
            Register Now
          </a>
        </div>

        <div className="mb-8 h-px w-full bg-gray-700/80"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 sm:gap-16 md:grid-cols-4">
          <StatItem value="50+" label="Events" />
          <StatItem value="20+" label="Colleges" />
          <StatItem value="15+" label="Competitions" />
          <StatItem value="5K+" label="Visitors" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }) => {
  return (
    <div>
      <div className="font-heading text-foreground group-hover:text-primary mb-1 text-3xl font-bold transition-colors sm:text-4xl md:text-5xl">
        {value}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default Hero;
