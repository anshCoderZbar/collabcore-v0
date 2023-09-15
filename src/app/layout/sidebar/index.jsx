import React from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "app/mock/sidebar";

import logo from "app/assets/logo.png";
import { CgDarkMode } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

export const Sidebar = () => {
  return (
    <div className="dashboard_sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <p>General</p>
          {SidebarData?.map((menu) => {
            return (
              <li
                className={`${
                  window?.location?.pathname === menu?.slug ? "side_active" : ""
                }`}
              >
                <div className="d-flex gap-2 align-items-center   ">
                  <div className="icon">{menu?.icon}</div>
                  <Link to={menu?.slug}>{menu?.name}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-links side_sec">
        <ul className="nav-items">
          <p>Preferences</p>
          <li>
            <div className="d-flex gap-2 align-items-center">
              <div className="icon">
                <CgDarkMode />
              </div>
              <button className="side_btn">Dark Mode</button>
            </div>
          </li>
          <li>
            <div className="d-flex gap-2 align-items-center">
              <div className="icon">
                <CiSettings />
              </div>
              <button className="side_btn">Settings</button>
            </div>
          </li>
          <li>
            <div className="d-flex gap-2 align-items-center">
              <div className="icon">
                <TbLogout />
              </div>
              <button className="side_btn">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
