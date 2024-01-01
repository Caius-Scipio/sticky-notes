import React from "react";

const StickyNote = ({ id, color, value, onDelete }) => {
  return (
    <li
      id={id}
      style={{ backgroundColor: color }}
      className="sticky"
      onClick={() => onDelete(id)}
    >
      <span className="sticky-text">{value}</span>
    </li>
  );
};

export default StickyNote;