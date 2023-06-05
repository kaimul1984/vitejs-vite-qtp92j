"use client";

import Image from "next/image";
import slider1 from "../../public/slider1.jpeg";
import slider2 from "../../public/slider2.jpeg";
import slider3 from "../../public/slider3.jpeg";
import slider4 from "../../public/slider4.jpeg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const items = [
  
  {
    id: 1,
    image: "/hero.jpeg",
    Headline: "Expert Building Maintenance Services for All Your Needs",
    Subheadline: "Providing Quality Maintenance and Repair Services Since 1995",
  },
  {
    id: 2,
    image: "/hero.jpeg",
    Headline: "Keep Your Building Looking Its Best",
    Subheadline:
      "Trust Our Experienced Maintenance Team to Keep Your Property in Top Condition",
  },
  {
    id: 3,
    image: "/hero.jpeg",
    Headline: "Affordable and Reliable Building Maintenance Solutions",
    Subheadline:
      "We Offer Cost-Effective Solutions for All Your Building Maintenance Needs",
  },

];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
    // let slides = setInterval(() => {
    //   setSlideIndex(slideIndex + 1);
    // }, 9000);

    // return () => {
    //   clearInterval(slides);
    // };
  }, [slideIndex]);

  const move = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className="slider w-full  h-[17em] md:h-[30em] lg:h-[650px]
    flex items-center justify-center"
    >
      <div className="container max-w-[1920px] w-full h-full bg-cyan-200 relative">
        <div className="slides w-full h-full relative overflow-hidden ">
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`slide w-full h-full absolute top-0 left-0   transition-[clip-path] duration-3000 ease-linear after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:opacity-[.1] ${
                slideIndex === itemIndex ? "clip" : "opacity-0"
              }`}
            >
              <div className="image w-full aspect-[16/9] max-h-full ">
                <Image src={item.image} alt="" className="w-full h-full" />
              </div>
              <div className="slide_info"></div>
            </div>
          ))}

          <div className="radio_btn flex gap-2 absolute bottom-5 left-[50%]  translate-x-[-50%] ">
            {Array.from({ length: 4 }).map((i, index) => (
              <div
                onClick={() => move(index)}
                key={index}
                className={`w-5 h-5 rounded-full ${
                  slideIndex === index ? "bg-red-700 " : "bg-cyan-700"
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="arrow_btn ">
            <FaAngleLeft
              onClick={() => setSlideIndex(slideIndex - 1)}
              className="text-5xl  absolute left-0 top-2/4  translate-y-[-50%] "
            />
            <FaAngleRight
              onClick={() => setSlideIndex(slideIndex + 1)}
              className=" text-5xl   absolute right-0 top-2/4  translate-y-[-50%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;


// slider2

// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectCube,
//   Autoplay,
//   Parallax,
// } from "swiper";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-cube";
// import "swiper/css";

// import img1 from '../assets/main-banner.jpeg'

// export default function Slider() {
//   return (
//     <Swiper
//       effect={"cube"}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//       modules={[
//         Navigation,
//         Pagination,
//         Scrollbar,
//         A11y,
//         EffectCube,
//         Autoplay,
//         Parallax,
//       ]}
//     //   autoplay={{
//     //     delay: 4500,
//     //     disableOnInteraction: false,
//     //   }}
//       parallax={true}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//     >
//       <div slot="container-start" data-swiper-parallax="-103%"></div>
//       <SwiperSlide>
//         <div className="content relative w-screen ">
//           <div className="img w-full h-full">
//             <img className="w-full h-full" src={img1} alt="" />
//           </div>
//           <div className="text absolute top-[40%] left-20">
//             <h1 className="text-5xl mb-5" data-swiper-parallax="-5000">
//               slide1
//             </h1>
//             <p className="text-red-300" data-swiper-parallax="-5000">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
//               molestiae?
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="content relative w-screen ">
//           <div className="img w-full h-full">
//             <img className="w-full h-full" src={img1} alt="" />
//           </div>
//           <div
//             className="text absolute top-[40%] left-20"
//             data-swiper-parallax="-5000"
//           >
//             <h1 className="text-5xl mb-5">slide2</h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
//               molestiae?
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="content relative w-screen ">
//           <div className="img w-full h-full">
//             <img className="w-full h-full" src={img1} alt="" />
//           </div>
//           <div
//             className="text absolute top-[40%] left-20"
//             data-swiper-parallax="-5000"
//           >
//             <h1 className="text-5xl mb-5">slide3</h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
//               molestiae?
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="content relative w-screen ">
//           <div className="img w-full h-full">
//             <img className="w-full h-full" src={img1} alt="" />
//           </div>
//           <div
//             className="text absolute top-[40%] left-20"
//             data-swiper-parallax="-5000"
//           >
//             <h1 className="text-5xl mb-5">slide4</h1>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
//               molestiae?
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }
