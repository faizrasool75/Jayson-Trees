import serviceSvg1 from "../../Jasons Tree/assets/svg/serviceSvg1.svg";
import serviceSvg2 from "../../Jasons Tree/assets/svg/serviceSvg2.svg";
import serviceSvg3 from "../../Jasons Tree/assets/svg/serviceSvg3.svg";
import serviceLeaf1 from "../../Jasons Tree/assets/images/serviceleaf-1.png";
import serviceLeaf2 from "../../Jasons Tree/assets/images/serviceleaf-2.png";
import serviceCard1 from "../../Jasons Tree/assets/images/servicecardimage-1.png";
import serviceCard2 from "../../Jasons Tree/assets/images/servicecard-image-2.png";
import serviceCard3 from "../../Jasons Tree/assets/images/servicecard-image-3.png";

const coreServices = [
  {
    number: "01.",
    title: "Tree Care & Maintenance",
    description:
      "Professional trimming, pruning, and shaping to keep your trees healthy, safe, and beautifully maintained.",
    image: serviceCard1,
    icon: serviceSvg1,
  },
  {
    number: "02.",
    title: "Removal, Clearing & Cleanups",
    description:
      "Safe tree removals, stump grinding, and complete cleanups for residential and commercial properties.",
    image: serviceCard2,
    icon: serviceSvg2,
  },
  {
    number: "03.",
    title: "Special & Commercial Services",
    description:
      "Advanced palm care, fire-safety cleanups, and full commercial maintenance for retail centers and complexes.",
    image: serviceCard3,
    icon: serviceSvg3,
  },
];

const CoreServices = () => (
  <div className="section_3 w-full overflow-hidden pt-0">
    <div className="relative w-full flex flex-col gap-3 justify-center items-center pb-10 sm:pb-28 text-center">
      <img
        className="absolute w-[20%] sm:w-[12%] top-16 sm:top-10 sm:-top-7 -left-5 sm:left-36"
        src={serviceLeaf1}
        alt=""
      />
      <h1 className="Akria text-2xl sm:text-4xl font-[#0F0F0F]">
        Our <span className="text-[#6DC642]">Core Services</span>
      </h1>
      <p className="AvantLight font-semibold font-sm sm:font-base">
        We offer over
        <strong className="AvantBold text-sm text-[#0F0F0F]">30 specialized tree services,</strong>
        grouped for easy understanding:
      </p>
    </div>

    <div className="relative flex flex-col sm:flex-row gap-16 sm:gap-8 justify-center items-center sm:items-start w-full">
      <img
        className="absolute -right-1 -top-10 w-[10%]"
        src={serviceLeaf2}
        alt=""
      />
      {coreServices.map((service) => (
        <div
          key={service.number}
          className="card gap-4 h-full w-[85%] sm:w-[28%] bg-white relative flex flex-col"
        >
          <div className="absolute bg-[#6DC642] w-10 h-10 rounded-full -top-1 -left-1 flex items-center justify-center">
            <img className="w-[80%] h-[70%]" src={service.icon} alt="" />
          </div>
          <img className="w-full h-full object-cover mb-3" src={service.image} alt="" />
          <h1 className="text-2xl sm:text-4xl AvantBold font-semibold text-[#0F0F0F]">
            {service.number}
          </h1>
          <h1 className="text-2xl AvantBold text-[#0F0F0F]">{service.title}</h1>
          <p className="AvantLight leading-6 font-bold text-sm text-[#0F0F0F]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default CoreServices;

