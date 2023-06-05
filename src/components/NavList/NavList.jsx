import React from "react";
import "./navList.scss";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import navItems from "./navListData";



const NavList = () => {
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            {navItem.icon}
            <Link to={navItem.link}>{navItem.title}</Link>
            <AiOutlineDown />
            {navItem.subNav && (
              <ul className="subNavList">
                {navItem.subNav.map((subNavItem) => (
                  <li key={subNavItem.id}>
                    {subNavItem.icon}
                    <Link to={subNavItem.link}>{subNavItem.title}</Link>
                    {subNavItem.image && (
                      <img src={subNavItem.image} alt={subNavItem.id} />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;

