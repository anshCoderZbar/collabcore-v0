import React from "react";
import { Link } from "react-router-dom";

import "styles/Dashboard.css";

import { DashboardCard } from "app/common/Dashboard/DashboardCard";
import { DashboardCardData } from "app/mock/Dashboard";

import { BsCheck2All } from "react-icons/bs";
import { Notification } from "app/common/Dashboard/Notification";
import { useToken } from "lib/utils/UseToken";

export const Dashboard = () => {
  return (
    <div className="project_dashboard">
      <div className="container">
        <div className="d-flex align-items-center  top_head">
          <h2>Home/</h2>
          <Link to={"/"}>Dashboard</Link>
        </div>
        <div className="page_heading">
          <h1>Dashboard</h1>
        </div>
        <div className="row page_head_vs">
          {DashboardCardData?.map((elm, i) => {
            return <DashboardCard elm={elm} key={i} />;
          })}
        </div>
        <div className="notification_sec">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Notifications</h2>
            <button className="border-0 bg-transparent text-center">
              <BsCheck2All /> Mark all as read
            </button>
          </div>
          <div className="notifications">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};
