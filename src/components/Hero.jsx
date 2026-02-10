import { ArrowRight, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-[#012D71] via-[#0E3C7F] to-[#1E4880] pt-16">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* <div className="pointer-events-none absolute top-32 left-0 z-10 h-80 w-90 rounded-full bg-[#2563EB33]/75 blur-[50px]"></div>
        <div className="pointer-events-none absolute top-32 right-0 z-10 h-80 w-90 rounded-full bg-[#EA580C1A] blur-[50px]"></div> */}

        {/* Badge */}
        <div className="mt-6 mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#1E3A8A4D]/30 px-4 py-2 backdrop-blur-sm sm:mt-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0A8EFD] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0A8EFD]" />
          </span>
          <span className="text-sm font-medium text-[##BFDBFE]">
            THE FUTURE OF ENGINEERING IS HERE
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="bg-linear-to-l from-[#1E1E1E]/20 via-white via-15% to-white bg-clip-text text-transparent">
            KEC LITE
          </span>
        </h1>

        {/* Year Badge */}
        <div className="mb-6">
          <span className="font-heading text-4xl font-semibold tracking-tight text-white">
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

        <div className="mb-8 h-px w-full bg-white/15"></div>

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
