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

        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="slider-bg-1 background  ">
          <article className="h-[450px] relative  w-full">
            <div className="absolute top-40 md:top-20 left-0 md:left-5 shadow-md max-w-full md:max-w-[40%] mt-10 md:bg-white text-white md:text-black py-2 md:py-4 px-1 md:px-2 ml-1 md:ml-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">
                Welcome to My Portfolio
              </h1>
              <p className="text-center mt-4 text-sm md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider-bg-2 background text-white ">
          <article className="h-[450px] relative  w-full">
            <div className="absolute top-40 md:top-20 left-0 md:left-5 shadow-md max-w-full md:max-w-[40%] mt-10 md:bg-white text-white md:text-black py-2 md:py-4 px-1 md:px-2 ml-1 md:ml-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">
                Welcome to My Portfolio
              </h1>
              <p className="text-center mt-4 text-sm md:text-lg">
                Discover my projects, skills, and experiences.
              </p>
            </div>

          </article>
        </SwiperSlide>
        <SwiperSlide className="slider-bg-3 background text-white ">
          <article className="h-[450px] relative  w-full">
            <div className="absolute top-40 md:top-20 left-0 md:left-5 shadow-md max-w-full md:max-w-[40%] mt-10 md:bg-white text-white md:text-black py-2 md:py-4 px-1 md:px-2 ml-1 md:ml-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">
                Welcome to My Portfolio
              </h1>
              <p className="text-center mt-4 text-sm md:text-lg">
                Discover my projects, skills, and experiences.
              </p>
            </div>

          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default header
