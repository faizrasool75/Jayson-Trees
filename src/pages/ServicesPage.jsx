import { useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import ContactForm from "../components/ContactForm";

import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/servicepageHero.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";
import serviceLeaf from "../../Jasons Tree/assets/images/servicepageleaf-1.png";
import mwp1 from "../../Jasons Tree/assets/images/mwp-1.png";
import mwp2 from "../../Jasons Tree/assets/images/mwp-2.png";
import mwp3 from "../../Jasons Tree/assets/images/mwp-3.png";
import tc1 from "../../Jasons Tree/assets/images/tc-1.png";
import tc2 from "../../Jasons Tree/assets/images/tc-2.png";
import tc3 from "../../Jasons Tree/assets/images/tc-3.png";
import tc4 from "../../Jasons Tree/assets/images/tc-4.png";
import tc5 from "../../Jasons Tree/assets/images/tc-5.png";
import newM1 from "../../Jasons Tree/assets/images/newM-1.png";
import newM2 from "../../Jasons Tree/assets/images/newM-2.png";
import newM3 from "../../Jasons Tree/assets/images/newM-3.png";
import newM4 from "../../Jasons Tree/assets/images/newM-4.png";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";

const serviceCategories = [
  {
    title: "Tree Care & Maintenance",
    icon: serviceSvg1,
    tone: "dark",
    accent: tc1,
    accentSmall: tc2,
    description:
      "Healthy trees reduce risk and boost curb appeal. Perfect for homes, shopping centers, and retail properties.",
    bullets: [
      "Tree Trimming",
      "Tree Pruning",
      "Tree Shaping / Topping",
      "Tree Health & Maintenance",
      "Crown Reduction",
      "Crown Thinning",
      "Hedge Trimming",
      "Deadwood Removal",
      "Tree Planting",
    ],
  },
  {
    title: "Removal, Clearing & Cleanups",
    icon: serviceSvg2,
    tone: "light",
    accent: tc3,
    accentSmall: tc4,
    description:
      "Safe, controlled removals with spotless debris hauling for residential blocks and commercial complexes.",
    bullets: [
      "Tree Removal",
      "Stump Removal",
      "Stump Grinding",
      "Lot / Land Clearing",
      "Brush Removal",
      "Storm Damage Cleanup",
      "Yard Cleanup",
      "Hauling & Debris Removal",
    ],
  },
  {
    title: "Special & Commercial Services",
    icon: serviceSvg3,
    tone: "dark",
    accent: tc5,
    accentSmall: newM1,
    description:
      "Built for commercial timelines and specialty palms. We keep shopping centers and campuses tenant-ready.",
    bullets: [
      "Palm Tree Trimming",
      "Palm Tree Skinning",
      "Fire Protection Cleanups",
      "24/7 Emergency Tree Services",
      "Emergency Tree Removal",
      "Commercial Tree Maintenance",
      "Shopping Center Tree Services",
      "Tree Trimming LA crews on-call",
    ],
  },
];

const crewStrip = [mwp1, mwp2, mwp3];

const ServicesPage = () => {
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
      <div className="w-full h-[65vh] sm:h-[80vh] relative z-[99]">
        <div className="w-full h-full relative overflow-hidden">
          <img src={serviceHero} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center gap-4 sm:gap-6 px-5 sm:px-16 z-[50] max-w-4xl">
            <p className="text-white AvantBold uppercase text-xs sm:text-sm tracking-[0.2em]">
              Licensed • Insured • Commercial & Residential
            </p>
            <h1 className="text-3xl sm:text-5xl Akria text-white leading-tight">
              Professional Tree Services across Los Angeles & Orange County
            </h1>
            <p className="AvantLight text-sm sm:text-lg text-white/90 leading-7">
              From Tree Removal Los Angeles emergencies to Palm Tree Trimming Los Angeles resorts love, our crews keep properties safe, clear, and guest-ready.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("highlightContactForm"));
                }}
                className="px-6 py-3 text-base sm:text-lg font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-white hover:text-[#6DC642] hover:shadow-xl hover:scale-105 hover:-translate-y-1 inline-block"
              >
                Book an Appointment
              </a>
              <a
                href="tel:+18055353739"
                className="px-6 py-3 text-base sm:text-lg font-bold AvantBold bg-white/10 border border-white/40 rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-white hover:text-[#0F0F0F] hover:shadow-xl hover:scale-105 hover:-translate-y-1 inline-block"
              >
                Call (805) 535-3739
              </a>
            </div>
          </div>
        </div>
      </div>

      <SlidingText text="Los Angeles County Tree Service  •  Commercial Tree Services Los Angeles  •  Palm Tree Trimming Los Angeles  •  24/7 Emergency Tree Service LA" />

      <section className="relative px-5 sm:px-16 py-12 sm:py-16 overflow-hidden">
        <img src={mwp1} alt="" className="absolute top-[10%] right-[5%] w-16 sm:w-24 opacity-20 pointer-events-none" />
        <img src={mwp2} alt="" className="absolute bottom-[15%] left-[3%] w-14 sm:w-20 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="flex flex-col gap-3">
            <p className="AvantBold uppercase text-sm text-[#6DC642]">Commercial & Residential</p>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Complete tree care for homes, shopping centers, and corporate campuses
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
              We schedule around guests, tenants, and deliveries. Expect clear communication, contained work zones, and immaculate cleanups on every Tree Trimming LA, removal, or palm project.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="px-3 py-2 rounded-full bg-[#0F0F0F]/90 text-white text-sm AvantBold">Licensed & Insured</span>
              <span className="px-3 py-2 rounded-full bg-[#6DC642]/10 text-[#356020] text-sm AvantBold border border-[#6DC642]/40">24/7 Emergency</span>
              <span className="px-3 py-2 rounded-full bg-white text-[#0F0F0F] text-sm AvantBold border border-gray-200">Commercial Specialists</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={serviceWhyImage} alt="Crew trimming trees" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-8 w-40 sm:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img src={serviceWhyOverlay} alt="Team with equipment" className="w-full h-full object-cover" />
            </div>
            <img src={serviceLeaf} alt="" className="absolute -top-10 right-0 w-20 sm:w-28 opacity-90" />
          </div>
        </div>
      </section>

      {serviceCategories.map((category, idx) => (
        <section
          key={category.title}
          className="relative px-5 sm:px-16 py-12 sm:py-16 bg-white/80 text-[#0F0F0F] border border-white/40 shadow-xl backdrop-blur-sm overflow-hidden"
        >
          <img src={idx % 2 === 0 ? mwp1 : mwp3} alt="" className="absolute top-[15%] right-[8%] w-16 sm:w-24 opacity-15 pointer-events-none" />
          <img src={mwp2} alt="" className="absolute bottom-[20%] left-[5%] w-14 sm:w-20 opacity-20 pointer-events-none" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F0F0F]/10 border border-[#0F0F0F]/20 flex items-center justify-center shadow-lg">
                  <img src={category.icon} alt="" className="w-6 h-6" />
                </div>
                <p className={`AvantBold uppercase text-sm ${category.tone === "dark" ? "text-[#6DC642]" : "text-[#356020]"}`}>
                  {category.title}
                </p>
              </div>
              <h3 className="Akria text-3xl sm:text-4xl leading-tight">{category.title}</h3>
              <p className={`AvantLight text-base sm:text-lg leading-7 ${category.tone === "dark" ? "text-white/80" : "text-[#2C2C2C]"}`}>
                {category.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.bullets.map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 AvantLight text-sm sm:text-base leading-6"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#6DC642]" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new Event("highlightContactForm"));
                  }}
                  className={`px-5 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    category.tone === "dark"
                      ? "bg-[#6DC642] text-white hover:bg-white hover:text-[#6DC642]"
                      : "bg-[#0F0F0F] text-white hover:bg-[#6DC642]"
                  }`}
                >
                  Get Free Estimate
                </button>
                <a
                  href="tel:+18055353739"
                  className={`px-5 py-3 text-sm sm:text-base AvantBold rounded-2xl rounded-tr-none transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    category.tone === "dark"
                      ? "bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#0F0F0F]"
                      : "bg-white border border-gray-200 text-[#0F0F0F] hover:border-[#6DC642]"
                  }`}
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={category.accent} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-6 w-40 sm:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img src={category.accentSmall} alt={`${category.title} detail`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 sm:px-16 py-10 bg-white/80 text-[#0F0F0F] border border-white/40 shadow-xl backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center gap-4 sm:gap-6 overflow-hidden">
          {crewStrip.map((img) => (
            <div key={img} className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <img src={img} alt="Crew at work" className="w-full h-48 sm:h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-16 bg-[#6DC642] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 items-center">
          <div className="sm:col-span-2">
            <p className="AvantBold uppercase text-sm">Service Areas</p>
            <h3 className="Akria text-3xl sm:text-4xl leading-tight">Los Angeles County • Orange County • Irvine</h3>
            <p className="AvantLight text-base sm:text-lg leading-7 text-white/90 mt-2">
              Fast response for commercial, HOA, municipal, and residential clients. Emergency Tree Service LA teams on standby 24/7.
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
              className="px-6 py-3 text-lg AvantBold bg-[#0F0F0F]/90 text-white rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              (323) 793-3516
            </a>
          </div>
        </div>
      </section>

      <Banner />
      <FeaturedWork />
      <ClientReviews />
      <ContactForm />

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default ServicesPage;

