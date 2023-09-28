import React, { useEffect } from "react";

import "styles/Auth.css";
import logo from "app/assets/logo.png";

import user from "app/assets/user-img.jpg";

import { FcGoogle } from "react-icons/fc";
import { MetaIcon } from "app/icons";
import { Link } from "react-router-dom";

export const Login = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-applied-mode", "light");
  }, []);

  return (
    <div className="auth_page">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 logins_details">
            <div className="auth_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="auth_methods">
              <div className="auth_heading">
                <h2>Login to account</h2>
                <p>Enter your credentials to access your account</p>
              </div>
              <div className="logins_socials">
                <button className="googleLogin">
                  <span>
                    <FcGoogle />
                  </span>
                  Sign in with Google
                </button>
              </div>
              <div className="logins_socials">
                <button className="metaLogin">
                  <span>
                    <MetaIcon />
                  </span>
                  Sign in with Meta
                </button>
              </div>
              <div className="separator">
                <div className="line"></div>
                <h2>or</h2>
                <div className="line"></div>
              </div>
              <div className="auth_input">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control input_vss"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control input_vss"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <div className="d-flex justify-content-between">
                    <div className="input_check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember machine for 30 days
                      </label>
                    </div>
                    <div className="forget_password">
                      <button>Forgot ?</button>
                    </div>
                  </div>
                </div>
                <div className="submit_btn">
                  <input type="submit" value="Login" />
                </div>
                <div className="route_auth">
                  <p>
                    Not a member? <Link to="/sign-in">Create Account</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center page_btm w-100">
              <p className="copyright">
                © {new Date().getFullYear()} CollabCore
              </p>
              <p className="privacy_policy">Privacy Policy</p>
            </div>
          </div>
          <div className="col-md-6 auth_img">
            <div className="img_content">
              <p>
                I was glad the day I discovered CollabCore. It really changed
                the way I manage my collaborations and made things incredibly
                easy.
              </p>
              <div className="d-flex align-items-center gap-2">
                <div className="img-box">
                  <img src={user} alt="some user " />
                </div>
                <div className="auth_profile">
                  <div className="auth_user">
                    <h3>Vivian Stuart</h3>
                    <p>@vivian</p>
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
