import { useState } from "react";
import HeroSection from "../components/HeroSection";
import SlidingText from "../components/SlidingText";
import mainBg from "../../Jasons Tree/assets/images/mainbg.png";
import heroDesktop from "../../Jasons Tree/assets/images/newBgedited.png";
import fw1 from "../../Jasons Tree/assets/images/fw-1.png";
import fw2 from "../../Jasons Tree/assets/images/fw-2.png";
import fw3 from "../../Jasons Tree/assets/images/fw-3.png";
import fw4 from "../../Jasons Tree/assets/images/fw-4.png";
import fw5 from "../../Jasons Tree/assets/images/fw-5.png";
import fw6 from "../../Jasons Tree/assets/images/fw-6.png";
import serviceCard1 from "../../Jasons Tree/assets/images/servicecardimage-1.png";
import serviceCard2 from "../../Jasons Tree/assets/images/servicecard-image-2.png";
import serviceCard3 from "../../Jasons Tree/assets/images/servicecard-image-3.png";
import serviceWhyImage from "../../Jasons Tree/assets/images/serviceWhy-1.png";
import serviceWhyOverlay from "../../Jasons Tree/assets/images/serviceWhy-2.png";

const galleryItems = [
  { src: fw1, category: "Commercial Projects", caption: "Retail plaza clearance • Commercial Tree Services Los Angeles" },
  { src: fw2, category: "Residential Work", caption: "Tree Trimming LA home with precise crown shaping" },
  { src: fw3, category: "Palm Tree Jobs", caption: "Palm Tree Trimming Los Angeles resort-style finish" },
  { src: fw4, category: "Emergency Response", caption: "Storm damage cleanup • Emergency Tree Service LA" },
  { src: fw5, category: "Crew & Equipment", caption: "Crane-assisted Tree Removal Los Angeles County" },
  { src: fw6, category: "Commercial Projects", caption: "Shopping center pruning & debris hauling" },
  { src: serviceCard1, category: "Residential Work", caption: "Healthy canopy lift for front-yard curb appeal" },
  { src: serviceCard2, category: "Crew & Equipment", caption: "Rigging and safety-first lowering on-site" },
  { src: serviceCard3, category: "Palm Tree Jobs", caption: "Palm skinning and shaping for clean silhouettes" },
  { src: serviceWhyImage, category: "Emergency Response", caption: "Rapid deployment after high winds" },
  { src: serviceWhyOverlay, category: "Crew & Equipment", caption: "Tracked equipment for tight commercial spaces" },
];

const categories = [
  "All",
  "Commercial Projects",
  "Residential Work",
  "Palm Tree Jobs",
  "Emergency Response",
  "Crew & Equipment",
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

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
        title="Our Work Gallery"
        subtitle="Commercial, Residential & Emergency Tree Projects - See how our licensed crews handle Tree Removal Los Angeles projects, detailed palm work, and fast emergency responses across Los Angeles County and Orange County."
        badge="Project Gallery"
        image={heroDesktop}
        ctas={[
          { label: "Book an Appointment", onClick: () => window.dispatchEvent(new Event("highlightContactForm")) },
          { label: "Call Now", href: "tel:+18055353739" },
        ]}
      />

      <SlidingText text="Commercial Projects • Residential Work • Palm Tree Trimming Los Angeles • Emergency Response • Tree Removal Los Angeles • Crew & Equipment" />

      <section className="px-5 sm:px-16 py-12 sm:py-14">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <p className="AvantBold uppercase text-sm text-[#6DC642]">Filter Projects</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-[#6DC642] text-white border-[#6DC642] shadow-lg"
                      : "bg-white text-[#0F0F0F] border-gray-200 hover:border-[#6DC642] hover:text-[#6DC642]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <figure
              key={`${item.src}-${item.category}`}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              onClick={() => setLightboxItem(item)}
            >
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="AvantBold text-sm uppercase text-[#6DC642]">{item.category}</p>
                <p className="AvantLight text-sm leading-6">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center px-4 animate-fadeIn"
          role="dialog"
          aria-label="Image preview"
        >
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#6DC642] text-xl AvantBold"
              aria-label="Close lightbox"
            >
              Close ✕
            </button>
            <div className="rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
              <img
                src={lightboxItem.src}
                alt={lightboxItem.caption}
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="bg-[#0F0F0F] text-white p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="AvantBold text-sm uppercase text-[#6DC642]">{lightboxItem.category}</p>
                  <p className="AvantLight text-base leading-6">{lightboxItem.caption}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="px-4 py-2 text-sm AvantBold bg-white text-[#0F0F0F] rounded-2xl rounded-tr-none hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

