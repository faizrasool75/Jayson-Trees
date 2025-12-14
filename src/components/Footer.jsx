import footerLeaf1 from "../../Jasons Tree/assets/images/footerleaf-1.png";
import footerLeaf2 from "../../Jasons Tree/assets/images/footerleaf-2.png";
import footerLogo from "../../Jasons Tree/assets/images/footerlogo.png";
import phoneIcon from "../../Jasons Tree/assets/svg/phone.svg";
import clockIcon from "../../Jasons Tree/assets/svg/clock.svg";
import emailIcon from "../../Jasons Tree/assets/svg/email.svg";

const Footer = () => (
  <div className="relative footer w-full flex items-center justify-center text-white AvantLight pt-0 sm:pt-10">
    <img
      className="absolute w-[20%] sm:w-[12%] left-0 -top-10 sm:-top-18 z-20"
      src={footerLeaf1}
      alt=""
    />
    <img className="absolute w-[10%] bottom-0 right-0" src={footerLeaf2} alt="" />
    <div className="bg-[#356020] w-full max-sm:px-4 sm:w-[90%] h-full rounded-t-[20px] sm:rounded-t-[100px] pb-6">
      <div className="footertop h-fit w-full flex flex-col sm:flex-row items-center sm:items-end justify-between pt-[25px] sm:pt-[25px]">
        <img className="w-[50%] sm:w-[25%] pl-0 sm:pl-20" src={footerLogo} alt="Logo" />
        <div className="w-full sm:w-[65%] flex flex-wrap pt-10 sm:pt-0 gap-8 sm:gap-5 justify-between pr-5 text-sm font-semibold">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase AvantBold">Quick Links</h1>
            <h2>About Us</h2>
            <h2>Why Choose Us</h2>
            <h2>Gallery</h2>
            <h2>Contact Us</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase AvantBold">SERVICE AREAS</h1>
            <h2>Los Angeles County</h2>
            <h2>Orange County</h2>
            <h2>Irvine</h2>
            <h2>Surrounding Cities</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img className="w-[7%]" src={phoneIcon} alt="Phone" />
              <h1 className="text-lg">(805)535-3739</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={phoneIcon} alt="Phone" />
              <h1 className="text-lg">(805) 501-6923</h1>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={clockIcon} alt="Clock" />
              <span className="leading-tight">
                <h1>
                  <span className="uppercase AvantBold">24/7 </span>Emergency
                </h1>
                <h1>Response Available</h1>
              </span>
            </div>
            <div className="flex gap-2">
              <img className="w-[7%]" src={emailIcon} alt="Email" />
              <h1 className="AvantLight font-lg font-semibold">info@jaysonstreeservice.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-start items-center text-center sm:justify-between sm:px-10 py-10 gap-10 text-sm">
        <div className="text-center">
          <h1 className="AvantBold">
            Professional Commercial & <br />
            Residential Tree Care
          </h1>
          <p>
            Serving Los Angeles & Orange County <br />
            • 24/7 Emergency Response
          </p>
        </div>
        <div>
          <h1 className="AvantBold">Ready to schedule your service?</h1>
          <p className="hidden sm:block">
            Book your free estimate and get fast, reliable tree care <br />
            for your home or commercial property.
          </p>
          <p className="sm:hidden block">
            Book your free estimate and get fast, reliable tree care for
            your home or commercial property.
          </p>
        </div>
        <button
          type="button"
          className="bg-[#6DC642] py-2 px-4 w-fit h-fit rounded-b-full rounded-tl-full AvantBold hover:bg-white/70 hover:border-2 hover:border-[#0F0F0F] hover:text-[#356020] transition-all delay-100 cursor-pointer"
        >
          Book an Appointment
        </button>
      </div>

      <div className="w-full flex flex-col sm:flex-row text-center justify-between text-xs sm:px-20">
        <p>Privacy Policy | Your Privacy Choices</p>
        <p>
          © 2025 JAYSON'S TREE SERVICE . All Rights Reserved.
          <span className="text-[#6DC642]">Web Design</span> By Latin Branding
        </p>
      </div>
    </div>
  </div>
);

export default Footer;

