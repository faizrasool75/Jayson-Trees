import { useOutletContext } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import serviceHero from "../../Jasons Tree/assets/images/servicepageHero.png";
import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import HeroSection from "../components/HeroSection";

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

      <section className="px-5 sm:px-16 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-100 flex flex-col gap-2">
            <p className="AvantBold uppercase text-sm text-[#6DC642]">Phone</p>
            <a href="tel:+18055353739" className="AvantBold text-xl hover:text-[#6DC642] transition-colors">
              (805) 535-3739
            </a>
            <a href="tel:+13237933516" className="AvantBold text-xl hover:text-[#6DC642] transition-colors">
              (323) 793-3516
            </a>
            <p className="AvantLight text-sm text-[#2C2C2C]">24/7 Emergency Response</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/80 text-[#0F0F0F] shadow-lg border border-white/40 flex flex-col gap-2 backdrop-blur-sm">
            <p className="AvantBold uppercase text-sm text-[#6DC642]">Service Areas</p>
            <p className="AvantLight text-base text-[#2C2C2C]">Los Angeles County</p>
            <p className="AvantLight text-base text-[#2C2C2C]">Orange County</p>
            <p className="AvantLight text-base text-[#2C2C2C]">Irvine & surrounding cities</p>
            <p className="AvantLight text-sm text-[#2C2C2C] mt-2">Licensed • Insured • Bonded</p>
          </div>
          <div className="p-6 rounded-3xl bg-white shadow-lg border border-gray-100 flex flex-col gap-2">
            <p className="AvantBold uppercase text-sm text-[#6DC642]">Email & Hours</p>
            <a href="mailto:info@jaysonstreeservice.com" className="AvantBold text-base hover:text-[#6DC642] transition-colors">
              info@jaysonstreeservice.com
            </a>
            <p className="AvantLight text-sm text-[#2C2C2C]">Standard: 7am – 7pm</p>
            <p className="AvantLight text-sm text-[#2C2C2C]">Emergency: 24/7 dispatch</p>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="px-5 sm:px-16 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-white/90 text-[#0F0F0F] rounded-3xl p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden border border-white/40 shadow-xl backdrop-blur-sm">
            <img src={bannerLeaf} alt="" className="absolute -right-8 -top-10 w-32 sm:w-40 opacity-60" />
            <p className="AvantBold uppercase text-sm text-[#6DC642]">Emergency Ready</p>
            <h2 className="Akria text-2xl sm:text-3xl leading-tight">
              Need a crew now? We are one call away.
            </h2>
            <p className="AvantLight text-base sm:text-lg text-[#2C2C2C] leading-7">
              Hazardous limbs, storm damage, blocked driveways, or commercial access routes—our emergency tree service LA teams mobilize quickly with lift, crane, and chipper support.
            </p>
            <button
              type="button"
              onClick={() => onNavigate?.("contact")}
              className="px-6 py-3 text-base AvantBold bg-[#6DC642] rounded-2xl rounded-tr-none text-white hover:-translate-y-1 hover:scale-105 hover:shadow-xl transition-all duration-300 w-fit"
            >
              Book an Appointment
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2746123736!2d-118.74137277477829!3d34.02073049552527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b3e0c6a1ed%3A0x5f8d650f4b35ab17!2sLos%20Angeles%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1734220800000!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing Los Angeles County"
            ></iframe>
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

