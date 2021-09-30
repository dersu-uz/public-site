const IndicatorSlide = () => (
  <div className="IndicatorSlide">
    <div className="flex flex-col items-center">
      <span className="font-sans text-dersu-white text-dersu-3xs uppercase mb-3">
        Desliza
      </span>
      <span className="h-[60px]">
        <span className="block w-0.5 animate-indicator-slide-grow bg-gradient-to-b from-white to-transparent"></span>
      </span>
    </div>
  </div>
)

export default IndicatorSlide
