import React from 'react'
import { useRef } from 'react';
import Slider from 'react-slick';

const SliderConstruction = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    adaptiveHeight: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const slider1 = useRef(null);

    const previous = () => {
        slider1.current.slickNext();
    };

    const next = () => {
        slider1.current.slickPrev();
    };
    return (
        <Slider ref={slider1} {...settings} className="wrapper__slider-construction">
            <div className="items">
                <img src="./../images/rn (1).png" className='images__construction' alt="" />
            </div>
            <div className="items">
                <img src="./../images/rn (3).png" className='images__construction' alt="" />
            </div>
            <div className="items">
                <img src="./../images/rn (2).png" className='images__construction' alt="" />
            </div>
            <div className="items">
                <img src="./../images/rn (1).png" className='images__construction' alt="" />
            </div>
            <div className="items">
                <img src="./../images/rn (3).png" className='images__construction' alt="" />
            </div>
            <div className="items">
                <img src="./../images/rn (2).png" className='images__construction' alt="" />
            </div>
        </Slider>
    )
}

export default SliderConstruction