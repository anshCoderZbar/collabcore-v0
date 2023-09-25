import React from "react";

import ReactApexChart from "react-apexcharts";

import { GrLineChart } from "react-icons/gr";

export const DashboardCard = ({ elm }) => {
  var options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    stroke: {
      curve: "straight",
    },
    series: [
      {
        name: "Series 1",
        color: elm?.color,
        data: [
          {
            x: new Date("2020-03-17T00:00:00.025385Z").getTime(),
            y: 0,
          },
          {
            x: new Date("2020-03-17T01:00:00.025385Z").getTime(),
            y: 5,
          },
          {
            x: new Date("2020-03-17T02:00:00.025385Z").getTime(),
            y: 3,
          },
          {
            x: new Date("2020-03-17T03:00:00.025385Z").getTime(),
            y: 2,
          },
          {
            x: new Date("2020-03-17T04:00:00.025385Z").getTime(),
            y: 0,
          },
          {
            x: new Date("2020-03-17T05:00:00.025385Z").getTime(),
            y: 0,
          },
          {
            x: new Date("2020-03-17T06:00:00.025385Z").getTime(),
            y: 0,
          },
          {
            x: new Date("2020-03-17T07:00:00.025385Z").getTime(),
            y: 56,
          },
          {
            x: new Date("2020-03-17T08:00:00.025385Z").getTime(),
            y: 22,
          },
          {
            x: new Date("2020-03-17T09:00:00.025385Z").getTime(),
            y: 35,
          },
          {
            x: new Date("2020-03-17T10:00:00.025385Z").getTime(),
            y: 20,
          },
          {
            x: new Date("2020-03-17T11:00:00.025385Z").getTime(),
            y: 25,
          },
          {
            x: new Date("2020-03-17T12:00:00.025385Z").getTime(),
            y: 30,
          },
          {
            x: new Date("2020-03-17T13:00:00.025385Z").getTime(),
            y: 32,
          },
          {
            x: new Date("2020-03-17T14:00:00.025385Z").getTime(),
            y: 43,
          },
          {
            x: new Date("2020-03-17T15:00:00.025385Z").getTime(),
            y: 41,
          },
          {
            x: new Date("2020-03-17T16:00:00.025385Z").getTime(),
            y: 42,
          },
          {
            x: new Date("2020-03-17T17:00:00.025385Z").getTime(),
            y: 56,
          },
          {
            x: new Date("2020-03-17T18:00:00.025385Z").getTime(),
            y: 78,
          },
          {
            x: new Date("2020-03-17T19:00:00.025385Z").getTime(),
            y: 50,
          },
          {
            x: new Date("2020-03-17T20:00:00.025385Z").getTime(),
            y: 45,
          },
          {
            x: new Date("2020-03-17T21:00:00.025385Z").getTime(),
            y: 10,
          },
          {
            x: new Date("2020-03-17T22:00:00.025385Z").getTime(),
            y: 15,
          },
          {
            x: new Date("2020-03-17T23:00:00.025385Z").getTime(),
            y: 5,
          },
          {
            x: new Date("2020-03-17T23:00:00.025385Z").getTime(),
            y: 3,
          },
        ],
      },
    ],
  };

  return (
    <div className="col-lg-4  col-sm-6">
      <div className="dashboard_head_card ">
        <div className="card_top">
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="card_text">
                  <h3>{elm?.heading}</h3>
                  <p>{elm?.data}</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ReactApexChart
                options={options}
                series={options?.series}
                type="line"
              />
            </div>
          </div>
          <div className="d-flex align-items-center sub_details gap-3">
            <div className="card_icon ">
              <GrLineChart />
            </div>
            <div className="detail_data">
              <p>
                <span>{elm?.lastMonthPerc}</span> vs last Month
              </p>
            </div>
          </div>
        </div>
        <div className="card_bottom">
          <div className="d-flex justify-content-between align-items-center">
            <p>Total Earning this month</p>
            <button>View Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};
