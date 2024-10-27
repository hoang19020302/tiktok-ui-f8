// HeaderSmall.jsx
import React from "react";
import "./HeaderSmall.scss"; // Đảm bảo tạo style riêng cho component này

function HeaderSmall({ title, onBack }) {
  return (
    <div className="header-small">
      <div className="first-comp-hs">
        <button className="back-button" onClick={onBack}>
          &#8592; {/* Hoặc biểu tượng back icon */}
        </button>
        <h3 className="title">{title}</h3>
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

export default HeaderSmall;
