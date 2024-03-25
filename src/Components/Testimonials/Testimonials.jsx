import React, { useContext } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../context"; // Import theme context

const Testimonials = () => {
  const { state } = useContext(themeContext);
  const darkMode = state.darkMode;

  const clients = [
    {
      name: "Moses",
      review:
        "Working with them as a web developer was an absolute pleasure.",
    },
    {
      name: "Jesse",
      review:
        "I'm incredibly impressed with their web development skills. The website created are visually stunning.",
    },
  ];

  return (
    <div className={`t-wrapper ${darkMode ? "dark" : ""}`} id="testimonials">
      <div className="t-heading">
        <span style={{ color: darkMode ? "red" : "#333" }}>Testimonials</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}
      <Swiper>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.name}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
