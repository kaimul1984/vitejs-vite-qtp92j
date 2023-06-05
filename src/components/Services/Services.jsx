import React from "react";
import { AiOutlineRight, AiOutlineCluster } from "react-icons/ai";

const items = [
  {
    icon: <AiOutlineCluster />,
    title: "construction management",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adofficiis eveniet nemo",
  },
  {
    icon: <AiOutlineCluster />,
    title: "landscape design",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adofficiis eveniet nemo",
  },
  {
    icon: <AiOutlineCluster />,
    title: "interior design",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adofficiis eveniet nemo",
  },
  {
    icon: <AiOutlineCluster />,
    title: "urban planing",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adofficiis eveniet nemo",
  },
];

export default function Services() {
  return (
    <div className="w-full h-auto lg:h-screen flex items-center justify-center bg-[url('assets/bg1.jpeg')] bg-center bg-cover bg-no-repeat">
      <div className="w-screen mx-5 lg:max-w-[1420px]  flex flex-col xl:flex-row z-40 ">
        <div className="left flex-[4.5] p-5 ">
          <h5 className="uppercase tracking-wide">what we offer</h5>
          <h2 className="font-medium text-[2em] lg:text-[4em]  my-5 leading-[1.3]">
            providing solutions for construction, management and restoration.
          </h2>
          <p className="mb-5">
            We are a long-established, independent building services and home
            improvements company. We have a wealth of experience working as main
            building contractors on all kinds of projects, big and small, from
            home maintenance and improvements to extensions, refurbishments and
            new builds.
          </p>
          <button className="mt-5">view more</button>
        </div>
        <div className="right flex-[5.5] p-5 grid content-center grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="group min-w-[350px] h-[300px]  bg-white-300 shadow-[0_0_10px_1px_gray] bg-[url('assets/box_image1.jpeg')] bg-center bg-cover bg-no-repeat relative after:absolute after:w-full after:h-full after:bg-white hover:after:bg-black hover:after:opacity-60 after:transition-all after:duration-700 hover:text-white "
            >
              <div className="absolute z-50 w-full h-full  flex flex-col items-center justify-around p-5">
                <span className="text-[3em] text-orange-400 group-hover:text-white">
                  {item.icon}
                </span>
                <h3 className="text-[2em] lg:text-[1.5em] ">{item.title}</h3>
                <p>{item.info}</p>
                <div className="w-9 h-9 bg-orange-400 rounded-full flex items-center justify-center">
                  <AiOutlineRight className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
