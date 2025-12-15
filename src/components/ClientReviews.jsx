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
    }, 3000);
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
    // Faster autoplay - 3 seconds instead of 5
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="section6 h-fit py-20 w-full flex flex-col sm:flex-row px-5 sm:px-16 gap-10 -z-10">
      <div className="w-full sm:w-[50%] flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-10">
          <h1 className="text-[#0F0F0F] Akria text-3xl sm:text-4xl font-bold text-center sm:text-start leading-tight">
            CLIENT <br />
            REVIEWS
          </h1>
          <img className="w-[40%] sm:w-[30%] hover:scale-105 transition-transform duration-300" src={Angi} alt="Angi Reviews" />
        </div>
        <p className="AvantLight text-base sm:text-lg leading-7 text-[#2C2C2C] font-medium">
          Our clients consistently highlight our fast response times, <br className="hidden sm:block" />
          professional crew, and high-quality results. From homeowners <br className="hidden sm:block" />
          to large commercial property managers, we're trusted across <br className="hidden sm:block" />
          Los Angeles and Orange County for reliable, safe, and <br className="hidden sm:block" />
          efficient tree services.
        </p>
        <a
          href="tel:+18055353739"
          className="bg-[#6DC642] py-3 px-6 w-fit h-fit rounded-b-2xl rounded-tl-2xl AvantBold text-white hover:bg-white hover:text-[#356020] hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
        >
          Book an Appointment
        </a>
      </div>
      <div className="sm:w-[60%] w-full pt-10 sm:pt-0 z-0 px-12 sm:px-16">
        <div className="relative review-slider bg-white rounded-2xl overflow-hidden p-4">
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
                <img className="w-full rounded-lg" src={slide} alt="Review slide" />
              </div>
            );
          })}
          <button
            type="button"
            onClick={handlePrev}
            className="swiper-button-prev rounded-full w-12 h-12 text-transparent bg-[#6DC642] sm:hidden flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 hover:bg-[#5AB032] hover:scale-110 transition-all duration-300 shadow-lg z-10"
            aria-label="Previous review"
          >
            <img src={reviewArrowPrev} alt="Previous" className="w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="swiper-button-next rounded-full w-12 h-12 text-transparent bg-[#6DC642] sm:hidden flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 hover:bg-[#5AB032] hover:scale-110 transition-all duration-300 shadow-lg z-10"
            aria-label="Next review"
          >
            <img src={reviewArrowNext} alt="Next" className="w-4" />
          </button>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  resetAutoplay();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[#6DC642] w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;


