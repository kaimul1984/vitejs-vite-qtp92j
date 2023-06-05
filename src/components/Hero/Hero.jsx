"use client";

import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
 
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Button from "../constant/Button";

const data = [
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

export default function Hero() {
  return (
    <Swiper
      // install Swiper modules

      modules={[Navigation, Pagination,  Autoplay, A11y]}
      // autoplay={{
      //   delay: 4500,
      //   disableOnInteraction: false,
      // }}
      speed={600}
      parallax={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //className="relative"
    >
     
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-r from-cyan-100 to-blue-500/0"
        >
          <Image
            src={item.image}
            alt="slide1"
            width={1000}
            height={500}
            priority
            className="aspect-auto w-full h-[700px] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-blue-300"
          />
          <div className="container flex items-center justify-between absolute z-10">
            <div className="left">
              <h1
                className=" w-[500px] text-black font-[900] text-4xl"
                data-swiper-parallax="-3000"
              >
                {item.Headline}
              </h1>
              <p
                className=" w-[500px] my-10 text-lg text-blue-700"
                data-swiper-parallax="-2000"
              >
                {item.Subheadline}
              </p>
              <div className="btn flex gap-5">
                <Button title="learn more" />
                <Button title="get a qoute" />
              </div>
            </div>
            <div className="right" data-swiper-parallax="-1000">
              <Image
                src={"/img4.png"}
                alt="slide1"
                width={200}
                height={100}
                priority
                className=" w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



// import React from "react";
// import { BsCodeSlash, BsBarChart, BsFillPeopleFill } from "react-icons/bs";

// const items = [
//   {
//     id: 1,
//     icon: <BsBarChart />,
//     title: "analyze your data",
//     info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque aspernatur voluptas quibusdam mollitia ratione, non cumque! Sint, natus alias.",
//   },
//   {
//     id: 1,
//     icon: <BsCodeSlash />,
//     title: "customized plan",
//     info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque aspernatur voluptas quibusdam mollitia ratione, non cumque! Sint, natus alias.",
//   },
//   {
//     id: 1,
//     icon: <BsFillPeopleFill />,
//     title: "implement solution",
//     info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque aspernatur voluptas quibusdam mollitia ratione, non cumque! Sint, natus alias.",
//   },
// ];

// export default function Hero() {
//   return (
//     <div className="hero w-screen h-auto flex items-center justify-center bg-[url('assets/main-banner.jpeg')] bg-right bg-no-repeat bg-cover relative after:absolute after:w-full afetr:h-full after:left-0 after:top-0 after:bg-gradient-to-r from-cyan-500 to-blue-500">
//       <div className="container  w-[1280px] h-auto flex flex-col  justify-between">
//         <div className="content mt-[190px]">
//           <h1 className="text-white font-bold text-5xl w-[500px] tracking-wide">
//             leading big data analytics company
//           </h1>
//           <p className="text-white w-[350px] my-8">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
//             eaque aspernatur voluptas quibusdam mollitia ratione, non cumque!
//             Sint, natus alias.
//           </p>
//           <button className="btn">get started</button>
//         </div>
//         <div className="cards mt-20 w-full flex flex-col md:flex-row items-center justify-between  mb-10">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="card w-[350px]  bg-slate-950/30 border border-dotted text-white flex gap-5 p-4 rounded-md"
//             >
//               <div className="w-[40px] h-[40px] rounded-full flex-[.2] bg-red-400 flex items-center justify-center">
//                 {item.icon}
//               </div>
//               <div className="info flex-[.8]">
//                 <h3 className="font-bold text-xl mb-3">{item.title}</h3>
//                 <p className="text-sm">{item.info}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
