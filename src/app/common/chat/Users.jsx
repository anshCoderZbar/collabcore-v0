import { AllUsers } from "app/mock/chat";
import React from "react";

export const Users = () => {
  return (
    <ul class="messages-page__list p-0">
      {AllUsers?.map((el) => {
        return (
          <li class="messaging-member messaging-member--new messaging-member--online">
            <div class="messaging-member__wrapper">
              <div class="messaging-member__avatar">
                <img src={el?.img} alt="users" loading="lazy" />
                {el?.active ? <div class="user-status"></div> : null}
              </div>

              <span class="messaging-member__name">{el?.userName}</span>
              <span class="messaging-member__message">{el?.lastMessage}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
