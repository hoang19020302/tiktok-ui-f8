import React from "react";
import "./Avatar.scss";

function Avatar({
  src,
  imgHeight = "50px",
  imgWidth = "50px",
  imgBorderRadius = "50%",
}) {
  return (
    <div className="avatar-container">
      <img
        src={src}
        alt="Avatar"
        className="avatar-image"
        style={{
          width: imgWidth,
          height: imgHeight,
          borderRadius: imgBorderRadius,
        }}
      />
    </div>
  );
}

export default Avatar;
