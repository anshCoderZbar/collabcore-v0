import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import "styles/Auth.css";

import { signInSchema } from "app/common/auth/validation";

import logo from "app/assets/logo.png";
import user from "app/assets/user-img.jpg";

import { FcGoogle } from "react-icons/fc";
import { MetaIcon } from "app/icons";
import { ImCheckmark } from "react-icons/im";

export const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.setAttribute("data-applied-mode", "light");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const signIn = (data) => {
    console.log(data);
    navigate("/account-setup");
  };

  return (
    <div className="auth_page">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 logins_details">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="auth_methods">
              <div className="auth_heading">
                <h2>Create Your account</h2>
                <p>Enter the fields below to get started</p>
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
                <form onSubmit={handleSubmit(signIn)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control input_vss"
                      placeholder="Enter Email"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control input_vss"
                      placeholder="Enter password"
                      autoComplete="false"
                      onChange={() => {
                        trigger("password");
                      }}
                      {...register("password")}
                    />
                  </div>
                  <div className="mb-3 ">
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span>
                            <ImCheckmark />
                          </span>
                          one lowercase character
                        </p>
                      </div>
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span>
                            <ImCheckmark />
                          </span>
                          one special character
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span>
                            <ImCheckmark />
                          </span>
                          one uppercase character
                        </p>
                      </div>
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span>
                            <ImCheckmark />
                          </span>
                          8 character minimum
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 sign_check">
                        <p>
                          <span>
                            <ImCheckmark />
                          </span>
                          one number
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="submit_btn">
                    <input type="submit" value="Create Account" />
                  </div>
                </form>
                <div className="route_auth">
                  <p>
                    Already have an account?
                    <Link to="/login">Login</Link>
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
                  <img src={user} alt="some user image" />
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
