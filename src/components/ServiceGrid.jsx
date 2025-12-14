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
            className={`service-card w-full rounded-2xl pb-5 transition-all duration-300 cursor-pointer ${isExpanded ? "sm:w-[30%]" : "sm:w-[15%]"}`}
          >
            <img className="w-full h-[70dvh] object-cover mb-3 rounded-2xl" src={card.image} alt={card.title} />
            <div className="card-content px-2 py-4 gap-3 flex flex-col justify-start items-start">
              <h1 className="text-2xl sm:text-4xl AvantBold font-semibold text-[#0F0F0F]">{card.number}</h1>
              <h1 className="text-xl AvantBold text-[#0F0F0F]">{card.title}</h1>
              <p className={`AvantLight font-bold text-sm leading-6 text-[#0F0F0F] ${isExpanded ? "block" : "block sm:hidden"}`}>
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

