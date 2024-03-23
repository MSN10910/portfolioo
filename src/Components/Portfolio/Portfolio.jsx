import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`} id="Portfolio">
      {/* Heading */}
      <h2 style={{ color: darkMode ? "red" : "" }} className="portfolio-heading">Recent Projects</h2>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://fitness-smoky-delta.vercel.app" className="project-link" target="_blank" rel="noopener noreferrer">
            <span>Fitness site</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/MSN10910/ecommerce" className="project-link" target="_blank" rel="noopener noreferrer">
            <span>E-commerce Project</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/MSN10910/Real-Estate" className="project-link" target="_blank" rel="noopener noreferrer">
            <span>Real Estate</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/MSN10910/Bookstore-MERN" className="project-link" target="_blank" rel="noopener noreferrer">
            <span>Bookstore</span>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
