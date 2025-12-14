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
    <img className="absolute -right-1 w-[22%] sm:w-[15%] top-7" src={fwLeaf} alt="" />

    <h1 className="text-black sm:text-white Akria text-2xl sm:text-4xl pl-12">
      featured work
    </h1>

    <div className="flex flex-col gap-5">
      <div className="flex gap-6">
        <img className="w-[35%] sm:w-[28%]" src={fw1} alt="" />
        <img className="w-[35%] sm:w-[28%]" src={fw2} alt="" />
        <img className="w-[28%] max-sm:hidden" src={fw3} alt="" />
      </div>
      <div className="flex gap-6 items-center justify-end">
        <img className="w-[35%] sm:w-[28%]" src={fw4} alt="" />
        <img className="w-[35%] sm:w-[29%]" src={fw5} alt="" />
        <img className="w-[27%] max-sm:hidden" src={fw6} alt="" />
      </div>
    </div>
  </div>
);

export default FeaturedWork;

