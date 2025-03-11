import React from "react";
import AmazonSignUpLogo from "../../assets/Amazon-Logo.jpeg";
import "../../Components/Register/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <div className="amazon_sign_up_main_container">
      <div className="amazon_sign_up_logo">
        <img src={AmazonSignUpLogo} alt="" />
      </div>
      <div className="amazon-sign-in-details">
        <div>
          <div className="sign_up_text">Sign up</div>
        </div>
        <div className="sign-up-info">
          <form action="" className="form_container">
            <div className="email_text">Enter mobile number or email</div>
            <input type="email" className="input_bar" required />
            <div className="email_text">Enter the Password</div>
            <input type="password" className="input_bar" required />
            <div className="continue_container">
              <button
                className="continue_button"
                onSubmit={() => {
                  handleSignup;
                }}
              >
                Continue
              </button>
            </div>
          </form>
          <div className="terms_and_condidions_text">
            <div>
              By continuing, you agree to Amazon's{" "}
              <a href="#">Conditions of Use </a> and{" "}
              <a href="#"> Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
