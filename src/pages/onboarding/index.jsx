import React, { useEffect, useState } from "react";

import "styles/OnBoarding.css";

import logo from "app/assets/logo.png";

import user from "app/assets/user-img.jpg";

import { FileUploader } from "react-drag-drop-files";

export const Onboarding = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(user);
  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImg(objectUrl);
    }
  }, [file]);

  return (
    <div className="onboarding_page">
      <div className="onboarding_header">
        <div className="onBoard_logo">
          <img src={logo} alt="collabcore" />
        </div>
        <div className="onboard_steps">
          <button>Account</button>
          <span>{">"}</span>
          <button className="onboard_btn_active">Setup</button>
          <span>{">"}</span>
          <button>Connect</button>
        </div>
      </div>
      <div className="setup_acc">
        <div className="setup_container">
          <h2>Setup your account</h2>
          <div className="setup_select">
            <p className="setup-sub-head">What best describes you?</p>
            <select class="form-select">
              <option selected>Creator/Influencer/Model</option>
              <option value="1">Creator</option>
              <option value="2">Influencer</option>
              <option value="3">Model</option>
            </select>
          </div>
          <div className="profile_set">
            <p className="setup-sub-head">Enter Your profile details</p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input_onb"
                  placeholder="Vivian Stuart"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control input_onb"
                  placeholder="@vivstuart"
                />
              </div>
              <div className="upload_profile">
                <p className="setup-sub-head">Upload a picture</p>
                <div className="upload_profile_img">
                  <img src={img} alt="profile" className="" />
                </div>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  multiple={false}
                  hoverTitle="Drop here"
                />
              </div>
              <div className="mb-3">
                <input type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
