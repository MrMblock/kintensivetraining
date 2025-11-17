const ExpandableCard = ({ id, title, points, isExpanded, onToggle, prefix = "" }) => {
  return (
    <div
      className="flex flex-col items-center p-8 bg-red-500/10 border border-red-500/30 rounded-[15px] cursor-pointer hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onToggle()}
    >
      <h3 className="font-poppins font-bold ss:text-[32px] text-[24px] text-white mb-4 text-center">
        {prefix && <span className="text-red-500">{prefix} </span>}
        {title}
      </h3>
      {isExpanded && (
        <ul className="space-y-3 w-full animate-fadeIn">
          {points.map((point, idx) => (
            <li key={idx} className="text-dimWhite font-poppins text-center text-[14px]">
              • {point}
            </li>
          ))}
        </ul>
      )}
      {!isExpanded && (
        <span className="text-white font-semibold text-sm">Cliquez pour en savoir plus</span>
      )}
    </div>
  );
};

export default ExpandableCard;
