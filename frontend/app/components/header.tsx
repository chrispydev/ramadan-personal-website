"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  id: string;
  type: "video" | "image";
  poster?: string | any; // shown in the slide
  src?: string | undefined; // only for video (public path: /videos/...)
  img?: string | any; // for image slides (public path: /images/...)
  title?: string;
  description?: string;
};

const slides: Slide[] = [
  {
    id: "v1",
    type: "video",
    poster: "/slider/slider1.jpg",
    src: "/videos/video1.mp4",
    title: "Welcome to My Portfolio",
    description: "Watch my journey and projects in action.",
  },
  {
    id: "v2",
    type: "video",
    poster: "/slider/slider2.jpg",
    src: "/videos/video2.mp4",
    title: "Project Showcase",
    description: "I commissioned a CHPS compound at Forster Home Nsuonano.",
  },
  {
    id: "v3",
    type: "video",
    poster: "/slider/slide3.jpg",
    src: "/videos/video3.mp4",
    title: "Discover My Projects",
    description: "Environmental initiative \n\ In the up to the 2020 campaign",
  },
];

export default function HeroSliderWithModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const swiperRef = useRef<any | null>(null);

  // Stop/start autoplay & page scroll when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      swiperRef.current?.autoplay?.stop?.();
      // user clicked play -> give the video element a moment to mount, then play
      setTimeout(() => {
        videoRef.current?.play().catch(() => {
          /* autoplay might fail in edge cases; user can press play */
        });
      }, 50);
    } else {
      document.body.style.overflow = "";
      swiperRef.current?.autoplay?.start?.();
      if (videoRef.current) {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch {
          /* ignore */
        }
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleOpenVideo = (src?: string) => {
    if (!src) return;
    setCurrentVideoSrc(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentVideoSrc(null);
  };

  return (
    <>
      <div className="w-full mx-auto h-[450px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-full relative">
              <article className="h-[450px] relative w-full">
                {/* background (poster or image) */}
                {slide.type === "video" ? (
                  <Image
                    width={450}
                    height={550}
                    src={slide.poster}
                    alt={slide.title ?? "video poster"}
                    className="absolute top-0 left-0 w-full h-full object-cover bg-center"
                    draggable={false}
                  />
                ) : (
                  <Image
                    width={800}
                    height={450}
                    src={slide.img}
                    alt={slide.title ?? "slide image"}
                    className="absolute top-0 left-0 w-full h-full object-cover bg-center"
                    draggable={false}
                  />
                )}

                {/* dark overlay for readability */}
                <div className="absolute inset-0 bg-black/35"></div>

                {/* content box (title/description) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
                  <p className="mt-3 text-sm md:text-lg max-w-2xl">{slide.description}</p>

                  {/* If it's a video slide show the big play button */}
                  {slide.type === "video" && slide.src && (
                    <button
                      onClick={() => handleOpenVideo(slide.src)}
                      className="mt-6 inline-flex items-center justify-center bg-white/95 text-black rounded-full w-16 h-16 shadow-lg hover:scale-105 transform transition"
                      aria-label={`Play ${slide.title ?? "video"}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M5.5 3.5v17l14-8.5-14-8.5z" />
                      </svg>
                    </button>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isOpen && currentVideoSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            // close if clicked outside the player box
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={handleClose}
              aria-label="Close video"
              className="absolute top-2 right-2 z-50 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
            >
              ✕
            </button>

            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full h-full object-cover"
              playsInline
            >
              <source src={currentVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

