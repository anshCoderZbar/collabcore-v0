import { BiGridAlt } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { TbGraph } from "react-icons/tb";

export const SidebarData = [
  {
    id: 1,
    name: "dashboard",
    slug: "/dashboard",
    icon: <BiGridAlt />,
  },
  {
    id: 2,
    name: "projects",
    slug: "/projects",
    icon: <IoLayersOutline />,
  },
  {
    id: 3,
    name: "messages",
    slug: "/messages",
    icon: <TbMessageDots />,
  },
  {
    id: 4,
    name: "calander",
    slug: "/calander",
    icon: <CiCalendarDate />,
  },
  {
    id: 5,
    name: "insights",
    slug: "/insights",
    icon: <TbGraph />,
  },
];
