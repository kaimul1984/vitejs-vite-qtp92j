"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const items = [
  {
    id: "home",
    title: "home",
    link: "/",
  },
  {
    id: "about",
    title: "about",
    link: "pages/about",
  },

  {
    id: "services",
    title: "services",
    link: "pages/services",
  },
  {
    id: "projects",
    title: "projects",
    link: "pages/projects",
  },
  {
    id: "contact",
    title: "contact",
    link: "pages/contact",
  },
];

const Navbar = () => {
const [open, setOpen] = useState(false);
const [selected, setSelected] = useState("home");

const handleNavLink = (id) => {
  setOpen(false);
  setSelected(id);
};
  return (
    <div className="navbar w-screen h-[70px] linear_gradient  ">
      {/* linear_gradient class from global css */}
      <nav className="max-w-[1320px]  h-full px-7 m-auto flex items-center justify-between relative z-10">
        <div className="logo">
          <Link href="/">logo</Link>
        </div>
        <ul
          open={open}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 md:bg-none w-[50%]  h-screen  md:h-5 absolute md:relative top-0 right-[-400px] md:right-0 open:right-0 flex flex-col md:flex-row gap-5 items-center justify-center md:justify-end  transition-all ease-linear"
        >
          <div className=" absolute top-2 right-2 md:hidden">
            <AiOutlineClose
              className="fill-white text-4xl"
              onClick={() => setOpen(false)}
            />
          </div>
          {items.map((item) => (
            <li key={item.id}>
              {/* animation class from global css */}
              <Link
                href={`${item.link}`}
                className={`animation  text-white ${
                  item.id === selected ? "active" : ""
                }`}
                onClick={() => handleNavLink(item.id)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className="block  sm:hidden md:hidden lg:hidden"
        >
          <AiOutlineBars className="fill-white text-4xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
