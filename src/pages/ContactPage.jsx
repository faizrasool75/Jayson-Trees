import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import HeroSection from "../components/HeroSection";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/servicepageHero.png";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import footerLeaf from "../../Jasons Tree/assets/images/footerleaf-1.png";
import mwp1 from "../../Jasons Tree/assets/images/mwp-1.png";
import mwp2 from "../../Jasons Tree/assets/images/mwp-2.png";
import mwp3 from "../../Jasons Tree/assets/images/mwp-3.png";

const ContactPage = () => {
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
        title="Book an Appointment"
        subtitle="Free Estimates • 24/7 Emergency Response Available - Get professional tree care for your Los Angeles or Orange County property."
        badge="24/7 Emergency Response Available"
        image={serviceHero}
        ctas={[
          { label: "Book an Appointment", onClick: () => window.dispatchEvent(new Event("highlightContactForm")) },
          { label: "Call (805) 535-3739", href: "tel:+18055353739" },
        ]}
      />

      <SlidingText text="24/7 Emergency Tree Service LA  •  Free Estimates  •  Palm Tree Trimming Los Angeles  •  Commercial Tree Services Los Angeles" />

      <section className="relative px-5 sm:px-16 py-12 sm:py-16 bg-white/80 border border-white/40 shadow-xl backdrop-blur-sm overflow-hidden">
        <img src={mwp1} alt="" className="absolute top-[10%] right-[7%] w-16 sm:w-24 opacity-20 pointer-events-none" />
        <img src={mwp2} alt="" className="absolute bottom-[15%] left-[5%] w-14 sm:w-20 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
            <div className="w-14 h-14 rounded-full bg-[#6DC642] flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Get in touch with us
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 max-w-2xl">
              Ready to schedule Tree Removal Los Angeles, Palm Tree Trimming Los Angeles, or commercial maintenance? Contact our team for fast, professional service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-3xl bg-white/90 shadow-lg border border-gray-100 flex flex-col gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="AvantBold uppercase text-sm text-[#6DC642]">Phone</p>
              <a href="tel:+18055353739" className="AvantBold text-xl hover:text-[#6DC642] transition-colors">
                (805) 535-3739
              </a>
              <a href="tel:+13237933516" className="AvantBold text-xl hover:text-[#6DC642] transition-colors">
                (323) 793-3516
              </a>
              <p className="AvantLight text-sm text-[#2C2C2C]">24/7 Emergency Response</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/90 shadow-lg border border-gray-100 flex flex-col gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="AvantBold uppercase text-sm text-[#6DC642]">Service Areas</p>
              <p className="AvantLight text-base text-[#2C2C2C]">Los Angeles County</p>
              <p className="AvantLight text-base text-[#2C2C2C]">Orange County</p>
              <p className="AvantLight text-base text-[#2C2C2C]">Irvine & surrounding cities</p>
              <p className="AvantLight text-sm text-[#2C2C2C] mt-2">Licensed • Insured • Bonded</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/90 shadow-lg border border-gray-100 flex flex-col gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <p className="AvantBold uppercase text-sm text-[#6DC642]">Email & Hours</p>
              <a href="mailto:info@jaysonstreeservice.com" className="AvantBold text-base hover:text-[#6DC642] transition-colors">
                info@jaysonstreeservice.com
              </a>
              <p className="AvantLight text-sm text-[#2C2C2C]">Standard: 7am – 7pm</p>
              <p className="AvantLight text-sm text-[#2C2C2C]">Emergency: 24/7 dispatch</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="relative px-5 sm:px-16 py-10 sm:py-14 bg-white/80 border border-white/40 shadow-xl backdrop-blur-sm overflow-hidden">
        <img src={mwp3} alt="" className="absolute top-[20%] right-[12%] w-18 sm:w-26 opacity-15 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-white/90 text-[#0F0F0F] rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <img src={bannerLeaf} alt="" className="absolute -right-8 -top-10 w-32 sm:w-40 opacity-40" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6DC642]/10 border border-[#6DC642]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6DC642]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="AvantBold uppercase text-sm text-[#6DC642]">Emergency Ready</p>
            </div>
            <h2 className="Akria text-2xl sm:text-3xl leading-tight relative z-10">
              Need a crew now? We are one call away.
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7 relative z-10">
              Hazardous limbs, storm damage, blocked driveways, or commercial access routes—our emergency tree service LA teams mobilize quickly with lift, crane, and chipper support.
            </p>
            <div className="flex flex-wrap gap-3 relative z-10">
              <a
                href="tel:+18055353739"
                className="px-6 py-3 text-base AvantBold bg-[#6DC642] rounded-2xl rounded-tr-none text-white hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                (805) 535-3739
              </a>
              <a
                href="tel:+13237933516"
                className="px-6 py-3 text-base AvantBold bg-[#0F0F0F] rounded-2xl rounded-tr-none text-white hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                (323) 793-3516
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2746123736!2d-118.74137277477829!3d34.02073049552527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b3e0c6a1ed%3A0x5f8d650f4b35ab17!2sLos%20Angeles%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1734220800000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing Los Angeles County"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 py-12 sm:py-16 bg-[#6DC642] text-white relative overflow-hidden">
        <img src={footerLeaf} alt="" className="absolute -left-10 -top-8 w-32 sm:w-44 opacity-70" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="sm:col-span-2 flex flex-col gap-3">
            <p className="AvantBold uppercase text-sm">Ready to Schedule?</p>
            <h2 className="Akria text-3xl sm:text-4xl leading-tight">
              Professional tree care starts with a free estimate
            </h2>
            <p className="AvantLight text-base sm:text-lg text-white/90">
              Whether you need Commercial Tree Services Los Angeles property managers trust, emergency Tree Removal Los Angeles response, or Palm Tree Trimming Los Angeles—we're ready with free estimates and rapid scheduling.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+18055353739"
              className="px-6 py-3 text-lg AvantBold bg-white text-[#356020] rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
            >
              (805) 535-3739
            </a>
            <a
              href="tel:+13237933516"
              className="px-6 py-3 text-lg AvantBold bg-[#0F0F0F] text-white rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
            >
              (323) 793-3516
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-0">
        <Footer onNavigate={onNavigate} />
      </section>
    </div>
  );
};

export default ContactPage;

