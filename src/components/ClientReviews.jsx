import { useEffect, useRef, useState } from "react";
import Angi from "../../Jasons Tree/assets/svg/Angi.svg";
import Reviews from "../../Jasons Tree/assets/svg/Reviews.svg";
import reviewArrowNext from "../../Jasons Tree/assets/images/reviewArrow-2.png";
import reviewArrowPrev from "../../Jasons Tree/assets/images/reviewArrow1.png";

const slides = [Reviews, Reviews, Reviews];

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="section6 h-fit py-20 w-full flex flex-col sm:flex-row px-5 sm:px-16 -z-10">
      <div className="w-full sm:w-[50%] flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row w-full items-center gap-10">
          <h1 className="text-[#0F0F0F] Akria text-2xl sm:text-4xl font-bold text-center sm:text-start">
            CLIENT <br />
            REVIEWS
          </h1>
          <img className="w-[40%] sm:w-[27%]" src={Angi} alt="Angi Reviews" />
        </div>
        <p className="AvantLight text-sm text-[#0F0F0F]">
          Our clients consistently highlight our fast response times, <br />
          professional crew, and high-quality results. From homeowners <br />
          to large commercial property managers, we’re trusted across <br />
          Los Angeles and Orange County for reliable, safe, and <br />
          efficient tree services.
        </p>
        <a
          href="tel:+18055353739"
          className="bg-[#6DC642] py-2 px-4 w-fit h-fit rounded-b-2xl rounded-tl-2xl AvantBold text-white hover:bg-white/70 hover:border-2 hover:border-[#0F0F0F] hover:text-[#356020] hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-block"
        >
          Book an Appointment
        </a>
      </div>
      <div className="sm:w-[50%] w-full pt-10 z-0">
        <div className="relative review-slider">
          {slides.map((slide, index) => {
            const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
            const nextIndex = (activeIndex + 1) % slides.length;
            let stateClass = "";
            if (index === activeIndex) {
              stateClass = "active";
            } else if (index === prevIndex) {
              stateClass = "prev";
            } else if (index === nextIndex) {
              stateClass = "next";
            }
            return (
              <div key={index} className={`review-slide ${stateClass}`}>
                <img className="bg-white w-full" src={slide} alt="Review slide" />
              </div>
            );
          })}
          <button
            type="button"
            onClick={handlePrev}
            className="swiper-button-prev rounded-full w-10 h-10 pl-5 text-transparent bg-[#6DC642] flex items-center justify-center absolute top-30 left-0"
            aria-label="Previous review"
          >
            <img src={reviewArrowPrev} alt="Previous" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="swiper-button-next rounded-full w-10 h-10 pl-5 text-transparent bg-[#6DC642] flex items-center justify-center absolute top-30 right-0"
            aria-label="Next review"
          >
            <img src={reviewArrowNext} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;


