import heroDesktop from "../../Jasons Tree/assets/images/servicepageHero.png";

const HeroSection = ({ title, subtitle, badge, ctas = [], image = heroDesktop }) => (
  <section className="w-full h-[65vh] sm:h-[80vh] relative overflow-hidden hero-section">
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-4 px-5 sm:px-16 z-10 max-w-4xl">
      {badge && (
        <p className="AvantBold uppercase text-xs sm:text-sm tracking-[0.25em] text-white/80">
          {badge}
        </p>
      )}
      <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] Akria text-white leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="AvantLight text-base sm:text-lg text-white/85 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        {ctas.map((cta) =>
          cta.href ? (
            <a
              key={cta.label}
              href={cta.href}
              className="px-6 py-3 text-base sm:text-lg font-bold AvantBold rounded-2xl rounded-tr-none transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl bg-white/10 border border-white/30 text-white"
            >
              {cta.label}
            </a>
          ) : (
            <button
              key={cta.label}
              type="button"
              onClick={cta.onClick}
              className="px-6 py-3 text-base sm:text-lg font-bold AvantBold bg-[#6DC642] rounded-2xl rounded-tr-none text-white transition-all duration-300 hover:bg-white hover:text-[#6DC642] hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              {cta.label}
            </button>
          )
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
