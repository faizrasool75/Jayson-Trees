import useScrollProgress from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-[999] overflow-hidden pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#6DC642] to-[#5AB032] transition-all duration-300 ease-out origin-left shadow-lg"
        style={{ 
          width: `${progress * 100}%`,
          boxShadow: '0 0 10px rgba(109, 198, 66, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;

