import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SlidingText from "../components/SlidingText";
import Footer from "../components/Footer";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/newBgedited.png";
import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";
import tc1 from "../../Jasons Tree/assets/images/tc-1.png";
import tc2 from "../../Jasons Tree/assets/images/tc-2.png";
import mwp1 from "../../Jasons Tree/assets/images/mwp-1.png";
import mwp2 from "../../Jasons Tree/assets/images/mwp-2.png";
import mwp3 from "../../Jasons Tree/assets/images/mwp-3.png";

const items = [
  {
    title: "24/7 Emergency Response",
    body: "Rapid crews for storm damage, hazardous limbs, and urgent commercial needs. Emergency Tree Service LA teams dispatch immediately with lift and crane support.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Free Estimates",
    body: "Same-day site visits and transparent scopes for residential and commercial clients. No hidden fees, no surprises—just clear pricing.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Commercial Tree Specialists",
    body: "Shopping centers, retail plazas, HOAs, and corporate campuses handled with precision. Commercial Tree Services Los Angeles property teams rely on.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Fully Licensed & Insured",
    body: "California State License, bonded, insured, and safety-led crews on every job. Complete coverage for your property and peace of mind.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Experienced Crew",
    body: "Decades of combined climbing, rigging, and crane coordination experience. Tree Trimming LA and Tree Removal Los Angeles experts you can trust.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    title: "15+ Expert Tree Services",
    body: "Tree trimming LA, palm tree trimming Los Angeles, removals, stump grinding, planting, and more. Complete tree care solutions.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    title: "Family-Owned Business",
    body: "You work directly with a family team that treats every property like our own. Personal care with professional results.",
    svg: (
      <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
  },
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

      <section className="relative px-5 sm:px-16 py-12 sm:py-20 bg-white/80 text-[#0F0F0F] border border-white/40 shadow-xl backdrop-blur-sm overflow-hidden">
        <img src={mwp1} alt="" className="absolute top-[15%] right-[8%] w-16 sm:w-24 opacity-20 pointer-events-none" />
        <img src={mwp2} alt="" className="absolute bottom-[20%] left-[5%] w-14 sm:w-20 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="w-14 h-14 rounded-full bg-[#6DC642] flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight max-w-3xl">
              What makes us the trusted choice across Los Angeles & Orange County
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 max-w-2xl">
              From Tree Trimming LA neighborhoods to large-scale Commercial Tree Services Los Angeles, we deliver technical expertise with approachable, family-level service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {items.map((item, index) => (
              <article
                key={item.title}
                className="p-6 rounded-3xl border border-gray-200 shadow-xl flex flex-col gap-3 h-full bg-white/90 text-[#0F0F0F] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#6DC642]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#6DC642] hover:scale-110 group">
                  <div className="transition-all duration-300 group-hover:text-white">
                    {item.svg}
                  </div>
                </div>
                <h3 className="Akria text-xl leading-tight">{item.title}</h3>
                <p className="AvantLight text-sm sm:text-base leading-7 text-[#2C2C2C]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 bg-white/80 border border-white/40 shadow-xl backdrop-blur-sm overflow-hidden">
        <img src={mwp3} alt="" className="absolute top-[10%] left-[3%] w-18 sm:w-26 opacity-15 pointer-events-none" />
        <img src={mwp1} alt="" className="absolute bottom-[15%] right-[10%] w-16 sm:w-24 opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img src={serviceWhyImage} alt="Professional crew on commercial site" className="w-full h-96 sm:h-[500px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105" />
            </div>
            <div className="absolute -bottom-8 -right-6 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
              <img src={serviceWhyOverlay} alt="Team with equipment" className="w-full h-40 sm:h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6DC642] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#6DC642] AvantBold uppercase text-sm">Proven Track Record</p>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Trusted by homeowners and commercial property managers alike
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Retail & Shopping Centers:</strong> Traffic-safe setups, after-hours scheduling, and guest-friendly crews for high-traffic properties.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Residential Properties:</strong> Careful pruning, respectful cleanup, and neighbor-friendly approaches that preserve curb appeal.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">HOAs & Complexes:</strong> Scheduled maintenance, clear scope documentation, and tenant-considerate work zones.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
                  <strong className="AvantBold">Emergency Response:</strong> Palm Tree Trimming Los Angeles resorts need or storm cleanup—we dispatch rapidly with full equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-18 bg-[#6DC642] text-white relative overflow-hidden">
        <img src={bannerLeaf} alt="" className="absolute -left-10 -top-8 w-32 sm:w-44 opacity-70" />
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="AvantBold uppercase text-sm">Ready in Los Angeles & Orange County</p>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Call now or book your free estimate
            </h2>
            <p className="AvantLight text-base sm:text-lg leading-7 text-white/90 mt-3">
              Whether you need Tree Removal Los Angeles emergency response, Palm Tree Trimming Los Angeles for commercial properties, or scheduled Tree Trimming LA maintenance—our crews are ready with free estimates and rapid scheduling.
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
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      <section id="contact">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default WhyChooseUsPage;

