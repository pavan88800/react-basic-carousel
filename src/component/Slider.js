import React from "react";

const Slider = ({ el, active }) => {
  return (
    <div className={`${active ? "active" : "hide"}`}>
      <img src={el.url} alt={el.label} />
    </div>
  );
};

export default Slider;
