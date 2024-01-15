import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import Banner1 from "../assets/slider/banner-1.png";
import Banner2 from "../assets/slider/banner-2.png";

const SimpleSlider = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  return (
    <div className="w-full my-4">
      <Slider {...settings}>
        <div>
          <img src={Banner1} className="rounded-lg" alt="" />
        </div>
        <div>
          <img src={Banner2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
