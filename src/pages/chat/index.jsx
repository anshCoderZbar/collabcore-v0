import React from "react";

import "styles/chat.css";

import { AiOutlineSearch } from "react-icons/ai";
import { Users } from "app/common/chat/Users";
import { ChatRoom } from "app/common/chat/ChatRoom";

import { useAtom } from "jotai";
import { openChatRoom } from "store/ChatRoom";
import { UserProfile } from "app/common/chat/UserProfile";
import { openUserProfile } from "store/ChatRoom";

export const Chat = () => {
  const [showChat] = useAtom(openChatRoom);
  const [openProfile] = useAtom(openUserProfile);

  return (
    <div className="chat_page">
      <div className="home-page__content messages-page">
        <div className="container-fluid h-100">
          <div className="row px-0 g-0 h-100">
            <div className="col-12 col-md-4 col-lg-5 col-xl-3 px-0 messages-page__list-scroll">
              <div className="messages-page__search mb-0 px-3 pb-3">
                <div className="custom-form__search-wrapper">
                  <input
                    type="text"
                    className="form-control custom-form"
                    placeholder="Search"
                  />
                  <div className="search_chat_icon">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
              <div className="messages-page__header mb-0 px-4 pt-3 pb-3">
                <span className="messages-page__title">Messages</span>
              </div>
              <Users />
            </div>

            <div
              className={`chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1 chat--mobile ${
                showChat ? "chat--show" : ""
              }`}
            >
              <ChatRoom />
            </div>
            <div
              className={`col-12 col-md-5 col-lg-4 col-xl-3 user-profile user-profile--large ${
                openProfile ? "user-profile--show" : ""
              }`}
            >
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
