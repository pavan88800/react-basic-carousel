import React, { useEffect, useState } from "react";
import Slider from "./Slider";
const Carousel = ({
  data,
  onHover,
  autoPlay,
  showDots,
  transitionDuration,
  actionColor
}) => {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(true);
  let timer;
  const handleDot = (index) => {
    setActive(index);
  };

  const handleNext = () => {
    if (active < data.length - 1) {
      setActive(active + 1);
    }
  };

  const handleAutoPlay = () => {
    if (pause) {
      if (active < data.length - 1) {
        setActive(active + 1);
      } else {
        setActive(0);
      }
    }
  };

  const handelMouseHover = () => {
    if (onHover) {
      setPause(false);
    }
  };

  const handelMouseLeave = () => {
    if (onHover) {
      setPause(true);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timer = setTimeout(
        handleAutoPlay,
        transitionDuration ? transitionDuration : 3000
      );
    }
    return () => clearTimeout(timer);
  }, [active, pause, autoPlay]);

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div
      onMouseLeave={() => handelMouseLeave()}
      onMouseOver={() => handelMouseHover()}
      className="image-container"
    >
      {data.map((el, index) => {
        return <Slider key={el.id} el={el} active={active === index} />;
      })}

      {showDots && (
        <div className="dot-container">
          {data.map((el, index) => (
            <div
              onClick={() => handleDot(index)}
              style={{
                backgroundColor:
                  active === index
                    ? actionColor
                      ? actionColor
                      : "#000"
                    : "#fff"
              }}
              key={index}
              className="dot"
            />
          ))}
        </div>
      )}

      <div className="container-navigation">
        <button
          style={{ backgroundColor: actionColor ? actionColor : "#000" }}
          onClick={() => handlePrev()}
          className="navigation next"
        >
          &lt;
        </button>
        <button
          style={{ backgroundColor: actionColor ? actionColor : "#000" }}
          onClick={() => handleNext()}
          className="navigation prev"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  data: [],
  onHover: false,
  autoPlay: false,
  showDots: false,
  transitionDuration: 3000,
  actionColor: "#000"
};

export default Carousel;
