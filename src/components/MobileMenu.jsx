import menuLeaf from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";
import mobileLogo from "../../Jasons Tree/assets/images/mobileLogo.png";
import mobileMenuButton from "../../Jasons Tree/assets/svg/mobileMenuButton.svg";

const MobileMenu = ({ isOpen, onClose, onNavigate }) => {
  const navItems = [
    { label: "Home", key: "home", style: "AvantBold text-3xl" },
    { label: "About us", key: "about" },
    { label: "Why Choose us", key: "why-us" },
    { label: "Services", key: "services" },
    { label: "Gallery", key: "gallery" },
    { label: "Contact us", key: "contact" },
  ];

  return (
    <div
      className={`mobileMenu flex-col justify-start items-start fixed top-0 left-0 gap-16 w-full h-screen bg-[#356020] z-[99999] p-8 transition-all duration-300 ${isOpen ? "flex" : "hidden"}`}
      aria-hidden={!isOpen}
    >
      <div className="flex w-full justify-between items-center">
        <img src={mobileLogo} alt="Mobile Logo" className="w-20" />
        <button
          type="button"
          onClick={onClose}
          className="flex justify-start font-light items-center gap-2 sm:hidden text-white text-lg"
          aria-label="Close mobile menu"
        >
          <img src={mobileMenuButton} alt="" className="w-5" />
          Menu
        </button>
      </div>

      <div className="flex flex-col justify-start items-start gap-6 pl-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.key}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.(item.key);
            }}
            className={`${item.style ?? "AvantLight text-2xl"} text-white flex justify-start items-center gap-2`}
            aria-label={`Go to ${item.label}`}
          >
            <img src={menuLeaf} alt="" className={`w-8 ${item.key !== "services" ? "hidden" : ""}`} />
            {item.label}
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="mx-auto px-4 py-3 text-xl font-bold AvantBold bg-[#6DC642] rounded-2xl text-white rounded-tr-none transition ease-in duration-150 hover:bg-white hover:text-[#6DC642]"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default MobileMenu;

