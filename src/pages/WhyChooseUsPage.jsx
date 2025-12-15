import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SlidingText from "../components/SlidingText";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/newBgedited.png";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";

const items = [
  { title: "24/7 Emergency Response", body: "Rapid crews for storm damage, hazardous limbs, and urgent commercial needs.", tone: "dark", icon: serviceSvg2 },
  { title: "Free Estimates", body: "Same-day site visits and transparent scopes for residential and commercial clients.", tone: "light", icon: serviceSvg1 },
  { title: "Commercial Tree Specialists", body: "Shopping centers, retail plazas, HOAs, and corporate campuses handled with precision.", tone: "dark", icon: serviceSvg3 },
  { title: "Fully Licensed & Insured", body: "California State License, bonded, insured, and safety-led crews on every job.", tone: "light", icon: serviceSvg2 },
  { title: "Experienced Crew", body: "Decades of combined climbing, rigging, and crane coordination experience.", tone: "dark", icon: serviceSvg1 },
  { title: "15+ Expert Tree Services", body: "Tree trimming LA, palm tree trimming Los Angeles, removals, planting, and more.", tone: "light", icon: serviceSvg3 },
  { title: "Family-Owned Business", body: "You work directly with a family team that treats every property like our own.", tone: "dark", icon: serviceSvg2 },
];

const WhyChooseUsPage = () => {
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
        title="Why Choose Jayson's Tree Service"
        subtitle="Trusted Tree Experts Serving Los Angeles & Orange County with disciplined safety, crisp communication, and reliable scheduling."
        badge="Commercial Specialists"
        image={heroDesktop}
        ctas={[
          { label: "Book an Appointment", onClick: () => onNavigate?.("contact") },
          { label: "Call Now", href: "tel:+13237933516" },
        ]}
      />

      <SlidingText text="24/7 Emergency Response • Free Estimates • Licensed & Insured • Commercial Tree Specialists • Palm Tree Trimming Los Angeles" />

      <section className="px-5 sm:px-16 py-12 sm:py-20 bg-white/80 text-[#0F0F0F] border border-white/30 shadow-xl backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <article
              key={item.title}
              className="p-6 rounded-3xl border border-gray-200 shadow-xl flex flex-col gap-3 h-full bg-white/90 text-[#0F0F0F]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                </div>
                <h3 className="Akria text-xl leading-tight">{item.title}</h3>
              </div>
              <p className="AvantLight text-sm sm:text-base leading-7 text-[#2C2C2C]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-18 bg-[#6DC642] text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="AvantBold uppercase text-sm">Ready in Los Angeles & Orange County</p>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Emergency-ready crews, free estimates, and spotless cleanups
            </h2>
            <p className="AvantLight text-base sm:text-lg leading-7 text-white/90 mt-3">
              Commercial Tree Services Los Angeles property teams trust for safe removals, palm tree trimming Los Angeles loves for clean resort looks, and routine Tree Trimming LA homeowners rely on for curb appeal.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-72">
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
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;

