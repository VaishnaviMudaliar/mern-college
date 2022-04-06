import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Syllabus",
    path: "/syllabus",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text"
  },
  {
    title: "Academic Calendars",
    path: "/academic_calendar",
    icon: <AiIcons.AiFillCalendar />,
    cName: "nav-text"
  },
  {
    title: "Results",
    path: "/results",
    icon: <RiIcons.RiFilePaper2Fill />,
    cName: "nav-text"
  },
  {
    title: "Accredition",
    path: "/accredition",
    icon: <FaIcons.FaPencilAlt />,
    cName: "nav-text"
  }
];
