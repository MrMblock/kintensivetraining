const ExpandableCard = ({ id, title, points, isExpanded, onToggle, prefix }) => {
  return (
    <div
      className="bg-red-500/10 border border-red-500/30 p-6 rounded-[10px] cursor-pointer hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onToggle()}
    >
      <h3 className="font-poppins font-semibold text-[18px] text-white mb-4 flex items-center justify-between">
        <span>{prefix} {title}</span>
        <span className="text-white transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </h3>
      {isExpanded && (
        <ul className="space-y-2 animate-fadeIn">
          {points.map((point, idx) => (
            <li key={idx} className="text-dimWhite font-poppins flex items-start">
              <span className="text-secondary mr-3">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableCard;
