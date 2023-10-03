import React, { useState } from "react";
import { useAtom } from "jotai";

import { openChatRoom } from "store/ChatRoom";
import { AiOutlineSearch } from "react-icons/ai";

import { AllUsers } from "app/mock/chat";

export const Users = () => {
  const [, setShowChat] = useAtom(openChatRoom);
  const [tabs, setTabs] = useState({
    recent: true,
    request: false,
    archive: false,
  });
  const [userInput, setUserInput] = useState("");

  const filterUser = AllUsers?.filter((data) => {
    return data?.userName.toLowerCase().includes(userInput.toLocaleLowerCase());
  });

  return (
    <>
      <div className="messages-page__search mb-0 px-3 pb-3">
        <div className="custom-form__search-wrapper">
          <input
            type="text"
            className="form-control custom-form"
            placeholder="Search"
            value={userInput}
            onChange={(e) => setUserInput(e?.target?.value)}
          />
          <div className="search_chat_icon">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="messages-page__header mb-0 px-4 pt-3 pb-3">
        <span className="messages-page__title">Messages</span>
      </div>
      <div className="px-4">
        <div className="radio_container">
          <input
            type="radio"
            name="radio"
            id="recent"
            onClick={() =>
              setTabs({ recent: true, request: false, archive: false })
            }
          />
          <label htmlFor="recent" className={tabs.recent ? "lable_active" : ""}>
            Recent
          </label>
          <input
            type="radio"
            name="radio"
            id="requests"
            onClick={() =>
              setTabs({ recent: false, request: true, archive: false })
            }
          />
          <label
            htmlFor="requests"
            className={tabs.request ? "lable_active" : ""}
          >
            Requests
          </label>
          <input
            type="radio"
            name="radio"
            id="archive"
            onClick={() =>
              setTabs({ recent: false, request: false, archive: true })
            }
          />
          <label
            htmlFor="archive"
            className={tabs.archive ? "lable_active" : ""}
          >
            Archive
          </label>
        </div>
      </div>
      <ul className="messages-page__list p-0">
        {filterUser?.map((el, i) => {
          return (
            <li
              key={i}
              onClick={() => setShowChat(true)}
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
    </>
  );
};
