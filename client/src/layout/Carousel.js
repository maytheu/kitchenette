import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Carousel(props) {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slider = () => {
    return props.slider.map((slide, i) => {
      return (
        <div key={i} className="slider">
          <Link to={slide.link}>
            <img src={slide.img} alt={slide.caption} />
            <div className="slider-caption">
              <div className="caption">{slide.caption}</div>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="slider">
      <Slider {...settings}>{slider()}</Slider>
    </div>
  );
}

export default Carousel;
