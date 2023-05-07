import Image from "next/image";
import React from "react";
import avatar2 from "../../pages/Images/avatar2.jpeg";

import avatar3 from "../../pages/Images/avatar3.jpg";
import avatar1 from "../../pages/Images/avatar1.jpeg";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const Testimonial = () => {
  return (
    <section className="bg-gray-900">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
            <h1 className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
              “With Optimum Property Market place i have been able to easily get
              a lot of options
              <span className="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
                {" "}
                on diffrent properties that suite my taste{" "}
              </span>
              where needed, i am super happy to have closed a deal and now
              enjoying my luxury home.
            </h1>
            <div className="flex items-center justify-center  ">
              <Image
                src={avatar2}
                height="10px"
                className="rounded-[50%] shadow-lg "
                alt="Praveen Juge"
              />
            </div>
            <p className="text-base font-medium text-gray-200">Praveen Juge</p>
            <p className="text-xs font-medium text-gray-400">CEO, Birds</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
            <h1 className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
              Additionally, the customer support team was quick to respond to
              any questions
              <span className="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
                {" "}
                I had a great experience using{" "}
              </span>
              Optimum Real Estate Service and would highly recommend it to
              anyone looking for a new home. Keep up the good work!
            </h1>
            <div className="flex items-center justify-center  ">
              <Image
                src={avatar3}
                width={200}
                height={100}
                className="rounded-[50%] shadow-lg "
                alt="Praveen Juge"
              />
            </div>
            <p className="text-base font-medium text-gray-200">Praveen Juge</p>
            <p className="text-xs font-medium text-gray-400">CEO, Birds</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
            <h1 className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
              “One of the best decisions i ever made with my life
              <span className="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
                {" "}
                a superb customer service{" "}
              </span>
              with quick and efficent timing.
            </h1>
            <div className="flex items-center justify-center  ">
              <Image
                src={avatar1}
                width={250}
                height={250}
                className="rounded-[50%] shadow-lg "
                alt="Praveen Juge"
              />
            </div>
            <p className="text-base font-medium text-gray-200">Kunle Olaoye</p>
            <p className="text-xs font-medium text-gray-400">
              Marketer, ChipSteak
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
