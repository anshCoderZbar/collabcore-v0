import React from "react";

import { BsArrowDown, BsArrowUp, BsInfoLg } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";

export const InsightsCard = ({ details }) => {
  return (
    <div class="card card-stats mb-4 mb-xl-0">
      <div class="card-body">
        <div class="row">
          <div className="col-8">
            <div className="d-flex align-items-center gap-2">
              <h5 class="card-title ">{details?.heading}</h5>
              <div className="insights_info_icon">
                <BsInfoLg />
              </div>
            </div>
            <span class="insights_numbers">{details?.numbers}</span>
          </div>
          <div class="col-4 d-flex justify-content-end">
            <div
              class="icon icon-shape  rounded-circle "
              style={{ background: details?.bgColor, color: details?.color }}
            >
              {details?.icon}
            </div>
          </div>
        </div>
        <p class="mt-1 mb-0  text-sm fw-semibold">
          {details?.inc && (
            <span style={{ color: "#10af65" }}>
              <BsArrowUp />
              {details?.inc}
            </span>
          )}
          {details?.dec && (
            <span style={{ color: "#a44242" }}>
              <BsArrowDown />
              {details?.dec}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
