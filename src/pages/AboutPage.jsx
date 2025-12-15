import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SlidingText from "../components/SlidingText";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/newBgedited.png";
import familyMain from "../../Jasons Tree/assets/images/whyChooseImage-1.png";
import familyCrew from "../../Jasons Tree/assets/images/whyChoseimage-2.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";
import footerLeaf from "../../Jasons Tree/assets/images/footerleaf-1.png";

const AboutPage = () => {
  const { onNavigate } = useOutletContext();

  return (
    <div
      className="main text-[#0F0F0F] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <HeroSection
        title="About Jayson's Tree Service"
        subtitle="Family-Owned • Licensed • Commercial & Residential Experts serving Los Angeles & Orange County with rapid response, careful planning, and spotless cleanups."
        badge="Family-Owned • Licensed • Insured"
        image={heroDesktop}
        ctas={[
          { label: "Book an Appointment", onClick: () => onNavigate?.("contact") },
          { label: "Call Now", href: "tel:+18055353739" },
        ]}
      />

      <SlidingText text="Family-Owned Business • Licensed & Insured • Commercial Tree Services Los Angeles • Tree Removal Los Angeles • 24/7 Emergency Response" />

      <section className="px-5 sm:px-16 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-[#6DC642] AvantBold uppercase text-sm">Company Story</p>
            <h2 className="Akria text-3xl sm:text-4xl text-[#0F0F0F] leading-tight">
              Decades of trusted tree care across Los Angeles & Orange County
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
              We are a family-owned crew specializing in Commercial Tree Services Los Angeles businesses rely on, along with detailed residential care. From emergency removals to preventative trimming, our experienced team pairs safety-first planning with immaculate cleanups.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white shadow-lg border border-gray-100">
                <p className="AvantBold text-[#0F0F0F]">Licensed & Insured</p>
                <p className="AvantLight text-sm text-[#2C2C2C]">California State License • Fully insured • Bonded</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 text-[#0F0F0F] shadow-lg border border-[#0F0F0F]/20">
                <p className="AvantBold text-[#0F0F0F]">24/7 Emergency Ready</p>
                <p className="AvantLight text-sm text-[#2C2C2C]">Storm damage, hazardous limbs, urgent clearance</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={familyMain} alt="Family owned tree service crew" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-6 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img src={familyCrew} alt="Crew at work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-20 bg-white/90 text-[#0F0F0F] border border-white/40 shadow-xl backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-[#6DC642] AvantBold uppercase text-sm">Mission • Values • Safety</p>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">Built for commercial precision, delivered with family care</h2>
            <ul className="space-y-3 AvantLight text-base leading-7 text-[#2C2C2C]">
              <li>• Safe, OSHA-aligned methods and certified climbers</li>
              <li>• Clear communication before, during, and after every job</li>
              <li>• Fast dispatch for Tree Removal Los Angeles properties need after storms</li>
              <li>• Respectful cleanups that leave properties ready for guests and tenants</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={serviceWhyImage} alt="Crew on commercial site" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <img src={serviceWhyOverlay} alt="Team equipment" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Why We’re Different",
              bullets: [
                "Commercial project specialists",
                "Palm Tree Trimming Los Angeles crews",
                "Dedicated safety lead on every job",
                "Free estimates and clear scope",
              ],
              tone: "light",
            },
            {
              title: "Certifications & Licensing",
              bullets: [
                "California State License",
                "Fully insured & bonded",
                "Lift & crane capable",
                "Traffic-safe work zones",
              ],
              tone: "dark",
            },
            {
              title: "Service Hours & Emergency",
              bullets: [
                "Standard hours: 7am – 7pm",
                "24/7 Emergency Tree Service LA",
                "Rapid response across Los Angeles County and Orange County",
                "Same-day assessments available",
              ],
              tone: "light",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`p-6 rounded-3xl shadow-lg border bg-white/90 text-[#0F0F0F] ${
                card.tone === "dark" ? "border-[#1f2b1a]" : "border-gray-100"
              }`}
            >
              <h3 className="Akria text-2xl mb-4">{card.title}</h3>
              <ul className="space-y-2 AvantLight text-sm sm:text-base leading-7">
                {card.bullets.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto bg-[#6DC642] text-white rounded-3xl overflow-hidden shadow-2xl relative">
          <img src={footerLeaf} alt="" className="absolute -left-6 -top-8 w-24 sm:w-32 opacity-80" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 p-8 sm:p-12">
            <div className="sm:col-span-2 flex flex-col gap-3">
              <p className="AvantBold uppercase text-sm">Los Angeles County Tree Service</p>
              <h2 className="Akria text-3xl sm:text-4xl leading-tight">
                Ready for a safe, clean, and professional tree service?
              </h2>
              <p className="AvantLight text-base sm:text-lg leading-7 text-white/90">
                Call now for Tree Trimming LA, Palm Tree Trimming Los Angeles, or full commercial maintenance. Free estimates, rapid scheduling, spotless results.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+18055353739"
                className="px-6 py-3 text-lg AvantBold bg-white text-[#356020] rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
              >
                (805) 535-3739
              </a>
              <a
                href="tel:+13237933516"
                className="px-6 py-3 text-lg AvantBold bg-[#0F0F0F] text-white rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
              >
                (323) 793-3516
              </a>
              <button
                type="button"
                onClick={() => onNavigate?.("contact")}
                className="px-6 py-3 text-base AvantBold bg-white/10 border border-white/40 rounded-2xl rounded-tr-none hover:bg-white hover:text-[#356020] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

