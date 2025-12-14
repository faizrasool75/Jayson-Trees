import lastLeaf from "../../Jasons Tree/assets/images/lastLeafHeroPage.png";
import leafTwo from "../../Jasons Tree/assets/images/leaf-2.png";
import whyLeaf1 from "../../Jasons Tree/assets/images/whyChoseleaf-3.png";
import whyLeaf2 from "../../Jasons Tree/assets/images/whychoseleaf-4.png";
import leafIcon from "../../Jasons Tree/assets/svg/mobildeMenuLeafsvg.svg";

const WhyChooseSection = ({ heading, highlighted, bodyDesktop, bodyMobile, imageMain, imageOverlay, bulletItems }) => (
  <div className="w-full min-h-screen pt-16 sm:pt-[120px] pb-0 relative">
    <img src={lastLeaf} alt="" className="w-28 sm:w-44 absolute top-[0%] sm:top-[-22%] right-0" />
    <img src={leafTwo} alt="" className="w-28 absolute top-[38%] left-0" />
    <div className="w-full justify-between gap-8 flex relative max-sm:flex-col">
      <div className="w-full sm:w-1/2 min-h-[80dvh] flex flex-col gap-5 py-6 px-4 sm:pl-20">
        <h2 className="text-2xl sm:text-4xl Akria max-sm:text-center">
          {heading} <span className="text-[#6DC642]">{highlighted}</span>
        </h2>
        <p className="AvantLight leading-6 text-sm hidden sm:block">
          {bodyDesktop}
        </p>
        <p className="AvantLight leading-6 text-sm text-center sm:hidden">
          {bodyMobile}
        </p>
        {bulletItems && (
          <div className="flex flex-col justify-start items-center sm:items-start gap-3">
            {bulletItems.map((item) => (
              <p key={item} className="flex justify-start text-lg sm:text-base items-center AvantBold gap-2">
                <img src={leafIcon} alt="" className="w-5" />
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="w-full sm:w-1/2 min-h-full relative">
        <img src={whyLeaf1} alt="" className="w-28 absolute bottom-[15%] left-[-6%]" />
        <img src={whyLeaf2} alt="" className="w-28 absolute bottom-[5%] left-[-6%]" />
        <div className="absolute w-full h-[90%] transform -translate-y-1/2 top-1/2 right-0 rounded-tl-full rounded-bl-full bg-[#356020] z-[-1]" />
        <div className="w-[45%] sm:w-[60%] h-[50%] sm:h-[60dvh] relative ml-32 sm:ml-28 z-[10]">
          <img src={imageMain} alt="" className="w-full h-full object-fill" />
          <div className="w-[60%] sm:w-[60%] h-[70%] absolute bottom-[-20%] left-[-24%] rounded-2xl overflow-hidden">
            <img src={imageOverlay} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhyChooseSection;

