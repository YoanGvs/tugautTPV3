import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

const SliderConstruction = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          adaptiveHeight: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4500,
        },
      },
    ],
  };

  const slider1 = useRef(null);

  const previous = () => {
    slider1.current.slickNext();
  };

  const next = () => {
    slider1.current.slickPrev();
  };
  return (
    <div className="wrapper__slider-construction-marquee position-relative">
      <div className="wrapper__slider-construction-fade wrapper__slider-construction-fade--left" />
      <div className="wrapper__slider-construction-fade wrapper__slider-construction-fade--right" />
      <Slider
        ref={slider1}
        {...settings}
        className="wrapper__slider-construction"
      >
        <div className="items">
          <img
            src="./../images/TTP1.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP2.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP3.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP4.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP5.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP6.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP7.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP8.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP9.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP10.webp"
            className="images__construction"
            alt=""
          />
        </div>
        <div className="items">
          <img
            src="./../images/TTP11.webp"
            className="images__construction"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderConstruction;
