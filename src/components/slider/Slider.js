import React from "react";
import { motion } from "framer-motion";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products";
function Slider() {
  return (
    <div className="s-container">
      <Swiper
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        loop={true}
        slidesPerGroup={1}
        spaceBetween={40}
      >
        {SliderProducts.map((product, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{product.name}</span>
                <span>{product.detail}</span>
              </div>
              <span>{product.price}$</span>
              <div>Shop Now</div>
            </div>
            <img src={product.img} alt={product.name} className="product_img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
