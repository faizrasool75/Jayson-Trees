import { useState } from "react";

const ServiceGrid = ({ cards, defaultExpanded = 0, className = "", onCardClick }) => {
  const [expandedIndex, setExpandedIndex] = useState(defaultExpanded);

  const handleCardClick = (index) => {
    const nextIndex = index === expandedIndex ? expandedIndex : index;
    setExpandedIndex(nextIndex);
    if (onCardClick) {
      onCardClick(index);
    }
  };

  return (
    <div className={`w-full flex items-start justify-center gap-6 max-sm:flex-col max-sm:items-center ${className}`}>
      {cards.map((card, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <article
            key={card.title}
            onClick={() => handleCardClick(index)}
            className={`service-card w-full rounded-2xl pb-5 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:-translate-y-2 overflow-hidden group ${
              isExpanded ? "sm:w-[30%] shadow-lg" : "sm:w-[15%]"
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="overflow-hidden rounded-2xl">
              <img 
                className={`w-full h-[70dvh] object-cover mb-3 transition-all duration-700 ${
                  isExpanded ? "scale-100" : "scale-100 group-hover:scale-110 group-hover:rotate-2"
                }`} 
                src={card.image} 
                alt={card.title} 
              />
            </div>
            <div className="card-content px-2 py-4 gap-3 flex flex-col justify-start items-start">
              <h1 className="text-2xl sm:text-4xl AvantBold font-semibold text-[#0F0F0F] transition-colors duration-300 group-hover:text-[#6DC642]">
                {card.number}
              </h1>
              <h1 className="text-xl AvantBold text-[#0F0F0F] transition-all duration-300 group-hover:translate-x-2">
                {card.title}
              </h1>
              <p className={`AvantLight font-bold text-sm leading-6 text-[#0F0F0F] transition-opacity duration-500 ${
                isExpanded ? "block opacity-100" : "block sm:hidden opacity-0 sm:opacity-0"
              }`}>
                {card.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ServiceGrid;

