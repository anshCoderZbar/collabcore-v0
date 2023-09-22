import { AllUsers } from "app/mock/chat";
import React from "react";

export const Users = () => {
  return (
    <ul className="messages-page__list p-0">
      {AllUsers?.map((el, i) => {
        return (
          <li
            key={i}
            className="messaging-member messaging-member--new messaging-member--online"
          >
            <div className="messaging-member__wrapper">
              <div className="messaging-member__avatar">
                <img src={el?.img} alt="users" loading="lazy" />
                {el?.active ? <div className="user-status"></div> : null}
              </div>

              <span className="messaging-member__name">{el?.userName}</span>
              <span className="messaging-member__message">
                {el?.lastMessage}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
