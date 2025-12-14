import bannerLeaf from "../../Jasons Tree/assets/images/bannerleafimage.png";
import bannerImage from "../../Jasons Tree/assets/images/banner-1.png";

const Banner = () => (
  <div className="relative section4 w-full py-8 sm:py-14 mt-12 sm:mt-7 flex items-center justify-center">
    <img
      className="absolute -top-16 -left-1 z-10 sm:w-[12%] w-[30%]"
      src={bannerLeaf}
      alt=""
    />
    <div className="relative bg-[#6DC642] w-[93%] py-8 sm:py-16 flex flex-col sm:flex-row text-center pl-5 rounded-2xl">
      <div className="w-fit h-fit flex flex-col gap-5 items-center">
        <h1 className="text-white text-xl sm:text-4xl Akria">
          24/7 Emergency <br />
          Response Available
        </h1>
        <p className="text-white AvantLight text-sm px-5 sm:px-0">
          Immediate dispatch for fallen trees, storm damage, and hazards.
        </p>
        <button
          type="button"
          className="py-2 w-fit bg-[#356020] AvantBold text-white px-6 rounded-b-2xl rounded-tl-2xl hover:bg-white hover:text-[#356020] transition ease-in duration-150 cursor-pointer"
        >
          Call (805)535-3739
        </button>
      </div>
      <img
        className="sm:absolute w-full sm:w-[55%] -right-5 -bottom-[72px] pt-5 sm:pt-0"
        src={bannerImage}
        alt=""
      />
    </div>
  </div>
);

export default Banner;

