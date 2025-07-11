import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent parent clicks (like a Link)
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}... `}
      <span
        onClick={toggleText}
        style={{ color: "blue", cursor: "pointer", marginLeft: 4 }}
      >
        {isExpanded ? "Show less" : "Read more"}
      </span>
    </span>
  );
};

export default ReadMore;
