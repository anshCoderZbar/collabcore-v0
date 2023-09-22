import React from "react";

import "styles/chat.css";

import { AiOutlineSearch } from "react-icons/ai";
import { Users } from "app/common/chat/Users";
import { ChatRoom } from "app/common/chat/ChatRoom";

import pdfIcon from "app/assets/pdf_icon.png";

import pdf from "app/assets/dummy.pdf";

import { BsSend } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

export const Chat = () => {
  const onButtonClick = () => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="chat_page">
      <div className="home-page__content messages-page">
        <div className="container-fluid h-100">
          <div className="row px-0 h-100">
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

            <div className="chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1">
              <ChatRoom />
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-sm-5 px-lg-4 user-profile">
              <div className="user-profile__wrapper">
                <div className="user-profile__avatar">
                  <img
                    src={require("app/assets/logo1.png")}
                    alt="Jenny Smith"
                    loading="lazy"
                  />
                </div>
                <div className="user-profile__details mt-1">
                  <span className="user-profile__name">Forever 21</span>
                </div>
                <div
                  className="accordion mt-4"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Members
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div className="member-profile">
                          <img
                            src={require("app/assets/user-img.jpg")}
                            alt="user name"
                            className="user-image"
                          />
                          <div className="user-details">
                            <p className="user-name">Jenna McCarthy</p>
                            <div className="action-icons">
                              <button className="calling-icon">
                                <BiSolidPhoneCall />
                              </button>
                              <button className="share-icon">
                                <BsSend />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button show  "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Attachments
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse show"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        <div className="d-flex align-items-center gap-2 attach_body">
                          <div className="img">
                            <img src={pdfIcon} alt="pdf icon" width={50} />
                          </div>
                          <div className="pdf_details">
                            <p> {pdf}</p>
                            <a href={pdf} target="_blank" className="pdf_view">
                              View
                            </a>
                            <button
                              className="btn_download"
                              onClick={onButtonClick}
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 attach_body">
                          <div className="img">
                            <img src={pdfIcon} alt="pdf icon" width={50} />
                          </div>
                          <div className="pdf_details">
                            <p> {pdf}</p>
                            <a href={pdf} target="_blank" className="pdf_view">
                              View
                            </a>
                            <button
                              className="btn_download"
                              onClick={onButtonClick}
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
