import React from "react";
import "./ButtonSquare.scss"; // Import file SCSS

function ButtonSquare({ icon, label }) {
  return (
    <button className="button-square">
      <div className="button-content">
        <img src={`/images/${icon}`} className="button-icon" alt={label} />
        <p className="button-label">{label}</p>
      </div>
    </button>
  );
}

export default ButtonSquare;
