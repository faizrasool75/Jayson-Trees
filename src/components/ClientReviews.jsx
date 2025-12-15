import { useEffect, useRef, useState } from "react";
import Angi from "../../Jasons Tree/assets/svg/Angi.svg";

const reviews = [
  {
    text: "Fast, professional and great pricing. They cleaned everything perfectly.",
    author: "Maria R.",
    rating: 5,
    location: "Los Angeles, CA"
  },
  {
    text: "Excellent service! The crew was professional and the cleanup was thorough. Highly recommend!",
    author: "John D.",
    rating: 5,
    location: "Orange County, CA"
  },
  {
    text: "Quick response for emergency tree removal. Great job and fair price. Will use again!",
    author: "Sarah M.",
    rating: 5,
    location: "Irvine, CA"
  },
];

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
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
    <div className="section6 h-fit py-20 w-full px-5 sm:px-16 -z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-10 items-center">
          {/* Left Side - Info */}
          <div className="w-full sm:w-[45%] flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row w-full items-center gap-6 sm:gap-10">
              <h1 className="text-black Akria text-3xl sm:text-4xl font-bold text-center sm:text-start leading-tight">
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
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('highlightContactForm'));
              }}
              className="bg-[#6DC642] py-3 px-6 w-fit h-fit rounded-b-2xl rounded-tl-2xl AvantBold text-white hover:bg-white hover:text-[#356020] hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
            >
              Book an Appointment
            </a>
          </div>

          {/* Right Side - Reviews Slider */}
          <div className="w-full sm:w-[55%]">
            <div className="relative bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl">
              {/* Stars */}
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#6DC642]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Content */}
              <div className="relative min-h-[200px]">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <p className="Akria text-xl sm:text-2xl text-[#0F0F0F] text-center mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="border-t-2 border-gray-200 pt-4 mt-4">
                      <p className="AvantBold text-base text-[#0F0F0F] text-center">
                        — {review.author}
                      </p>
                      <p className="AvantLight text-sm text-[#6DC642] text-center mt-1">
                        {review.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      resetAutoplay();
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-[#6DC642] w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
