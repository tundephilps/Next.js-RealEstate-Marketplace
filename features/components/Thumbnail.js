import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/free-mode";

import "swiper/css/thumbs";

const Thumbnail = ({ photos }) => {
  const [thumbsSwiper, setThumbSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          heigth: "15rem",
        }}
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />

      <Swiper
        onSwiper={setThumbSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Thumbnail;
