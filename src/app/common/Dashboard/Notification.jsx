import React from "react";

import { Notifications } from "app/mock/Dashboard";

export const Notification = () => {
  const date = new Date();
  const day = date.getDate().toString();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString();
  const today =
    day + "-" + (month.toString().length < 2 ? "0" : "") + month + "-" + year;

  const yesterdayDate = new Date(date);
  yesterdayDate.setDate(date.getDate() - 1);
  const yesterdayDay = yesterdayDate.getDate().toString();
  const yesterdayMonth = yesterdayDate.getMonth() + 1;
  const yesterdayYear = yesterdayDate.getFullYear().toString();
  const yesterday =
    yesterdayDay +
    "-" +
    (yesterdayMonth.toString().length < 2 ? "0" : "") +
    yesterdayMonth +
    "-" +
    yesterdayYear;

  const uniqueDate = [...new Set(Notifications?.map((data) => data?.date))];
  const groupByDate = uniqueDate?.map((date) => {
    return {
      date: date,
      elm: Notifications?.filter((data) => data.date === date),
    };
  });

  return (
    <>
      {groupByDate?.map((data) => {
        let dateTxt = data?.date;
        if (data?.date === today) {
          dateTxt = "Today";
        } else if (data?.date === yesterday) {
          dateTxt = "Yesterday";
        } else {
          dateTxt = data?.date;
        }
        return (
          <>
            <div className="date">
              <span>{dateTxt}</span>
            </div>
            {data?.elm?.map((elm, i) => {
              return (
                <div key={i} className={`notification_wrapper `}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center notification_details">
                      {elm?.img && <img src={elm?.img} alt="logo" />}
                      <p dangerouslySetInnerHTML={{ __html: elm?.heading }} />
                    </div>
                    <div className="time_stamp">
                      {elm?.unread && <span></span>}
                      <p>2h ago</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </>
  );
};
