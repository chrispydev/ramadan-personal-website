'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const header = () => {
  return (
    <div className="w-full mx-auto h-[500px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="slider-bg-1 background text-white">
          <article className="h-[450px] ">
            <div className="shadow-md max-w-[40%] mt-10 bg-white text-black py-4 px-2 ml-4">
              <h1 className="text-4xl font-bold text-center mt-10">
                Welcome to My Portfolio
              </h1>
              <p className="text-center mt-4 text-lg">
                Discover my projects, skills, and experiences.
              </p>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <h2 className="text-2xl font-bold">Explore My Projects</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 h-64 flex items-center justify-center">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default header
