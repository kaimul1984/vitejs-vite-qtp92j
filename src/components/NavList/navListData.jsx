import phoneBrandsImages from "../../assets/images/navbar/index";

import {
  AiOutlineBars,
  AiOutlineMobile,
  AiOutlineAppstore,
  AiOutlineLaptop,
  AiOutlineTablet,
  AiOutlineCamera,
  AiFillApi,
} from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { GiDeliveryDrone } from "react-icons/gi";


const navItems = [
  {
    id: 1,
    icon: <AiOutlineBars />,
    title: "Products",
    link: "/products",
    subNav: [
      {
        id: 2,
        icon: <AiOutlineMobile />,
        title: "Mobile phones",
        link: "/products/mobile",
      },
      {
        id: 3,
        icon: <AiOutlineLaptop />,
        title: "laptop&computer",
        link: "/products/pants",
      },
      {
        id: 4,
        icon: <AiOutlineTablet />,
        title: "tablets",
        link: "/products/shoes",
      },
      {
        id: 5,
        icon: <AiOutlineMobile />,
        title: "ipad",
        link: "/products/shoes",
      },
      {
        id: 6,
        icon: <AiOutlineCamera />,
        title: "cameras",
        link: "/products/shoes",
      },
      {
        id: 7,
        icon: <ImHeadphones />,
        title: "audio",
        link: "/products/shoes",
      },
      {
        id: 8,
        icon: <GiDeliveryDrone />,
        title: "drones",
        link: "/products/shoes",
      },
      {
        id: 9,
        icon: <AiFillApi />,
        title: "accessories",
        link: "/products/shoes",
      },
    ],
  },
  {
    id: 10,
    icon: <AiOutlineAppstore />,
    title: "brand",
    link: "/products/brand",
    subNav: [
      {
        id: "apple",
        image: phoneBrandsImages.apple,
        link: "/products/mobile",
      },
      {
        id: "samsung",
        image: phoneBrandsImages.samsung,
        link: "/products/laptop",
      },
      {
         id: "oppo",
        image: phoneBrandsImages.oppo,
        link: "/products/tablet",
      },
      {
         id: "nokia",
        image: phoneBrandsImages.nokia,
        link: "/products/shoes",
      },
      {
         id: "moto",
        image: phoneBrandsImages.moto,
        link: "/products/shoes",
      },
      {
         id: "tcl",
        image: phoneBrandsImages.tcl,
        link: "/products/shoes",
      },
      {
        id: "jabra",
        image: phoneBrandsImages.jabra,
        link: "/products/shoes",
      },
      {
        id: "huawei",
        image: phoneBrandsImages.huawei,
        link: "/products/shoes",
      },
    ],
  },
  {
    id: 11,
    title: "mobile phones",
    link: "/products/mobile",
  },
  {
    id: 12,
    title: "trending tech",
    link: "/products/trending",
  },
];
export default navItems;