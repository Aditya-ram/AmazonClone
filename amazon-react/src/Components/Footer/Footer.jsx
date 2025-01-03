// import React from "react";
import "../Footer/Footer.css";
import amazonLogoFooter from "../../assets/amazonLogo.png";

const Footer = () => {
  return (
    <div className="amazon_footer_outer_wrapper">
      <div className="amazon_footer_wrapper">
        <div className="amazon_footer_divs amazon_div">
          <div>
            <b>Get to Know Us</b>
          </div>
          <div>About Amazon</div>
          <div>Careers</div>
          <div>Press Releases</div>
          <div>Amazon Science</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div>
            <b>Connect with us</b>
          </div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div>
            <b>Make money with us</b>
          </div>
          <div>Sell on Amazon</div>
          <div>Sell under Amazon Accelerator</div>
          <div>Protect and Build Your Brand</div>
          <div>Amazon Global Selling</div>
          <div>Supply to Amazon</div>
          <div>Become An Affiliate</div>
          <div>Fulfilment by Amazon</div>
          <div>Advertise Your Products</div>
          <div>Amazon Pay on Merchants</div>
        </div>
        <div className="amazon_footer_divs amazon_div">
          <div>
            <b>Let Us Help You</b>
          </div>
          <div>Your Account</div>
          <div>Returns Centre</div>
          <div>100% Purchase Protection</div>
          <div>Amazon App</div>
          <div>Help</div>
        </div>
      </div>
      <center>
        <div className="amazon_footer_logo">
          <img src={amazonLogoFooter} alt="" />
        </div>
      </center>
    </div>
  );
};

export default Footer;
