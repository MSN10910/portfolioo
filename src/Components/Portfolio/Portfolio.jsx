import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Estate from "../../img/Estate.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/travel1.png";
import { themeContext } from "../../context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}></span>
      <span style={{ color: darkMode ? "red" : "" }}>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://fitness-smoky-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={Sidebar} alt="Project 1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://estatereal.pages.dev/" target="_blank" rel="noopener noreferrer">
            <img src={Estate} alt="Project 2" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/MSN10910/ecommerce" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="Project 3" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://travel-1-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={HOC} alt="Project 4" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
