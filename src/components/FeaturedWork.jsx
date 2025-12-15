import bgGreen from "../../Jasons Tree/assets/images/bggreen.png";
import fwLeaf from "../../Jasons Tree/assets/images/fwLeaf.png";
import fw1 from "../../Jasons Tree/assets/images/fw-1.png";
import fw2 from "../../Jasons Tree/assets/images/fw-2.png";
import fw3 from "../../Jasons Tree/assets/images/fw-3.png";
import fw4 from "../../Jasons Tree/assets/images/fw-4.png";
import fw5 from "../../Jasons Tree/assets/images/fw-5.png";
import fw6 from "../../Jasons Tree/assets/images/fw-6.png";

const FeaturedWork = () => (
  <div className="relative section5 py-5 sm:py-10 w-full -z-20 gap-5 flex flex-col justify-center overflow-hidden">
    <img className="absolute w-[55%] -z-10 sm:left-0 top-16 sm:top-0" src={bgGreen} alt="" />
    <img 
      className="absolute -right-1 w-[22%] sm:w-[15%] top-7 z-[9990] cursor-pointer" 
      style={{
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-15px, -15px) rotate(-12deg) scale(1.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
      }}
      src={fwLeaf} 
      alt="" 
    />

    <h1 className="text-black sm:text-white Akria text-2xl sm:text-4xl pl-12 scroll-animate fade-left">
      featured work
    </h1>

    <div className="flex flex-col gap-5">
      <div className="flex gap-6">
        <div className="w-[35%] sm:w-[28%] overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw1} 
            alt="" 
          />
        </div>
        <div className="w-[35%] sm:w-[28%] overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw2} 
            alt="" 
          />
        </div>
        <div className="w-[28%] max-sm:hidden overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw3} 
            alt="" 
          />
        </div>
      </div>
      <div className="flex gap-6 items-center justify-end">
        <div className="w-[35%] sm:w-[28%] overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw4} 
            alt="" 
          />
        </div>
        <div className="w-[35%] sm:w-[29%] overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw5} 
            alt="" 
          />
        </div>
        <div className="w-[27%] max-sm:hidden overflow-hidden rounded-lg group cursor-pointer">
          <img 
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            src={fw6} 
            alt="" 
          />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedWork;

