import { useOutletContext } from "react-router-dom";
import ServiceGrid from "../components/ServiceGrid";
import Banner from "../components/Banner";
import FeaturedWork from "../components/FeaturedWork";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import ContactForm from "../components/ContactForm";

import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/servicepageHero.png";
import serviceHeroGreen from "../../Jasons Tree/assets/images/servicepagegreensvg.png";
import serviceHeroText from "../../Jasons Tree/assets/images/textserviceongreensvg.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";
import serviceLeaf from "../../Jasons Tree/assets/images/servicepageleaf-1.png";
import serviceCircleOne from "../../Jasons Tree/assets/images/servicepagecirlce-1.png";
import serviceCircleTwo from "../../Jasons Tree/assets/images/servicepagecircle-2.png";
import whyLeaf1 from "../../Jasons Tree/assets/images/whyChoseleaf-3.png";
import whyLeaf2 from "../../Jasons Tree/assets/images/whychoseleaf-4.png";
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

const treeCareCards = [
  {
    number: "01.",
    title: "Tree Trimming",
    description:
      "Maintain shape, remove hazards, and enhance growth. Our trimming services keep trees balanced, safe, and visually appealing for residential and commercial landscapes.",
    image: tc1,
  },
  {
    number: "02.",
    title: "Tree Pruning",
    description:
      "Increase sunlight, airflow, and overall tree health. We remove weak, diseased, or overcrowded branches to improve structure and long-term stability.",
    image: tc2,
  },
  {
    number: "03.",
    title: "Tree Shaping / Tree Topping",
    description:
      "Precise shaping for aesthetic appeal and controlled growth. Ideal for properties that need uniform appearance and improved tree form.",
    image: tc3,
  },
  {
    number: "04.",
    title: "Crown Reduction",
    description:
      "Safely reduce tree height and spread. Helps minimize storm risks and protects nearby structures while maintaining tree health.",
    image: tc4,
  },
  {
    number: "05.",
    title: "Tree Planting",
    description:
      "Professional planting services for residential and commercial properties. We help select the right species, ensure proper placement, and guide long-term care.",
    image: tc5,
  },
];

const maintenanceCards = [
  {
    number: "01.",
    title: "Crown Thinning",
    description:
      "Improve airflow and reduce canopy density. Reduces wind resistance and prevents limb breakage during storms.",
    image: newM1,
  },
  {
    number: "02.",
    title: "Tree Health & Maintenance",
    description:
      "Ongoing professional care for strong, healthy trees. Includes assessments, seasonal care, disease inspection, and long-term health planning.",
    image: newM2,
  },
  {
    number: "03.",
    title: "Hedge Trimming",
    description:
      "Clean, uniform, and professional hedge shaping. Perfect for property lines, entryways, and landscapes requiring polished appearance.",
    image: newM3,
  },
  {
    number: "04.",
    title: "Deadwood Removal",
    description:
      "Remove dangerous dead branches before they fall. Improves safety, prevents property damage, and promotes healthier tree growth.",
    image: newM4,
  },
];

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
    <div className="w-full h-[70vh] sm:h-[90vh] relative z-[99]">
      <div className="w-full h-full relative overflow-hidden">
        <div className="w-full h-full relative bg-gray-100">
          <div className="w-full h-full hidden sm:block">
            <img
              src={serviceHero}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div className="w-full h-full sm:hidden absolute top-0 left-0">
            <img
              src={serviceHero}
              alt=""
              className="w-full h-[110%] object-cover object-top"
              style={{ objectPosition: "center top" }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 sm:gap-8 px-4 sm:px-8 z-[50]">
            <h1 className="relative text-center text-2xl sm:text-3xl lg:text-4xl Akria text-[#0F0F0F] hero-heading">
              <span className="hero-text-line" style={{ animationDelay: '0.2s' }}>PROFESSIONAL RESIDENTIAL &</span><br />
              <span className="hero-text-line" style={{ animationDelay: '0.4s' }}>COMMERCIAL <span className="text-[#6DC642]">TREE CARE</span></span>
            </h1>
            <p className="AvantLight text-sm sm:text-base lg:text-lg text-center max-w-4xl leading-relaxed hero-text-line" style={{ animationDelay: '0.6s' }}>
              Keeping your trees healthy, safe, and beautifully shaped requires expert attention. At <br className="hidden sm:block" />
              Jayson's Tree Service, we provide a full range of maintenance solutions designed to <br className="hidden sm:block" />
              enhance property value, improve tree health, and maintain a clean, professional <br className="hidden sm:block" />
              appearance for homes, retail centers, and commercial properties.
            </p>
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('highlightContactForm'));
              }}
              className="px-6 py-3 text-base sm:text-lg font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-white hover:text-[#6DC642] hover:shadow-xl hover:scale-105 hover:-translate-y-1 z-[999] hero-text-line inline-block"
              style={{ animationDelay: '0.8s' }}
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>

    <SlidingText text="25% OFF  --  Palm Tree Services (10+ Palms)" />

    <div className="w-full h-fit sm:min-h-screen pt-16 sm:pt-40 relative max-sm:pb-10">
      <img
        src={whyLeaf1}
        alt=""
        className="w-28 sm:w-44 absolute top-[0%] sm:top-[-22%] right-0 z-[9990] cursor-pointer"
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(-15px, -15px) rotate(-12deg) scale(1.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        }}
      />
      <img
        src={whyLeaf2}
        alt=""
        className="w-28 absolute top-[38%] left-0 z-[9990] cursor-pointer"
        style={{
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        }}
      />
      <div className="w-full justify-between gap-8 flex relative max-sm:flex-col">
        <div className="w-full sm:w-1/2 min-h-fit sm:min-h-[80dvh] flex flex-col gap-5 py-6 px-4 sm:pl-20">
          <h2 className="text-2xl sm:text-4xl Akria max-sm:text-center">
            Why <span className="text-[#6DC642]">Tree Care</span> <br />
            Matters
          </h2>
          <p className="AvantLight leading-7 text-base sm:text-lg font-medium text-[#2C2C2C] hidden sm:block mt-10">
            Healthy, well-maintained trees reduce safety risks, enhance <br />
            curb appeal, prevent costly damage, and create a clean, <br />
            professional environment. From shaping to full seasonal <br />
            maintenance, our certified crew ensures your landscape stays <br />
            safe, thriving, and visually stunning year-round.
          </p>
          <p className="AvantLight leading-7 text-base font-medium text-[#2C2C2C] text-center sm:hidden mt-5">
            Healthy, well-maintained trees reduce safety risks, enhance
            curb appeal, prevent costly damage, and create a clean,
            professional environment. From shaping to full seasonal
            maintenance, our certified crew ensures your landscape stays
            safe, thriving, and visually stunning year-round.
          </p>
          
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('highlightContactForm'));
            }}
            className="mt-6 px-8 py-4 text-lg font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition-all duration-300 hover:bg-[#5AB032] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl self-center sm:self-start cursor-pointer inline-block"
          >
            Get Free Estimate
          </a>
        </div>
        <div className="w-full sm:w-1/2 min-h-full relative">
          <img
            src={serviceLeaf}
            alt=""
            className="w-28 absolute bottom-[15%] left-[-6%] z-[9990] cursor-pointer"
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            }}
          />
          <img
            src={serviceLeaf}
            alt=""
            className="w-28 absolute bottom-[5%] left-[-6%] z-[9990] cursor-pointer"
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            }}
          />
          <div className="absolute w-full h-[90%] transform -translate-y-1/2 top-1/2 right-0 bg-[#356020] z-[-1]" />
          <div className="w-[45%] sm:w-[60%] h-[50%] sm:h-[60dvh] relative ml-32 sm:ml-28 z-[10]">
            <img
              src={serviceWhyImage}
              alt=""
              className="w-full h-full object-fill"
            />
            <div className="w-[60%] sm:w-[60%] h-[70%] absolute bottom-[-20%] left-[-24%] rounded-2xl overflow-hidden">
              <img
                src={serviceWhyOverlay}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="service w-full h-fit pt-20 py-8">
      <h1 className="uppercase Akria text-2xl sm:text-4xl sm:pl-20 mb-5 max-sm:text-center">
        Tree Care
      </h1>
      <div className="w-full flex items-start justify-center gap-6 max-sm:flex-col max-sm:items-center max-sm:px-4 pr-4">
        <div className="relative w-[15%] h-[60vh] max-sm:hidden">
          <img 
            className="absolute w-[50%] z-[9990] cursor-pointer" 
            style={{
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(15px, -12px) rotate(12deg) scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            }}
            src={serviceLeaf} 
            alt="" 
          />
          <img
            className="absolute w-[25%] top-40"
            src={serviceCircleOne}
            alt=""
          />
          <img
            className="absolute w-[25%] bottom-24 left-6"
            src={serviceCircleTwo}
            alt=""
          />
        </div>
        <ServiceGrid cards={treeCareCards} defaultExpanded={0} />
      </div>
    </div>

    <div className="service w-full h-fit pt-20 py-8">
      <div className="w-full flex justify-end px-4 sm:px-20">
        <h1 className="w-fit uppercase Akria text-2xl sm:text-4xl mb-5 max-sm:text-center">
          MAINTENANCE <br /> SERVICES
        </h1>
      </div>
      <div className="w-full flex items-start justify-between gap-6 max-sm:flex-col-reverse max-sm:items-center max-sm:px-4 pl-4">
        <ServiceGrid cards={maintenanceCards} defaultExpanded={0} />
        <div className="relative w-[15%] h-[60vh] max-sm:hidden">
          <img
            className="absolute w-[60%] top-1/2 right-0"
            src={mwp3}
            alt=""
          />
          <img
            className="absolute w-[25%] top-[40%] right-0"
            src={mwp2}
            alt=""
          />
          <img
            className="absolute w-[25%] top-[20%] right-4"
            src={mwp1}
            alt=""
          />
        </div>
      </div>
    </div>

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

