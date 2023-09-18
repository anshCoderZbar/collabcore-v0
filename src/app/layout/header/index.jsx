import React, { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="header">
      <div className="position-relative w-75">
        <div className="head-input">
          <input
            type="text"
            placeholder="Type anywhere to search"
            className="w-100"
          />
        </div>
        <div className="search_icon">
          <AiOutlineSearch />
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center gap-2">
          <div class="img-box">
            <img
              src="https://i.postimg.cc/BvNYhMHS/user-img.jpg"
              alt="some user image"
            />
          </div>
          <div class="profile" onClick={() => setMenuToggle(!menuToggle)}>
            <div class="user">
              <h3>nicolelopez</h3>
              <p>Nicole Lopez</p>
            </div>
          </div>
        </div>

        <div class={`menu ${menuToggle ? "dropdown_active" : ""}`}>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
