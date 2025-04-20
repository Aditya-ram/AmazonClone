import amazonImage from "../../assets/amazonLogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "../Header/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Header() {
  const navigate = useNavigate();
  const [cart,setCart] = useState([]);
  const handleNavigate = () => {
    navigate("./sign-up");
  };
  const [user, setUser] = useState("");
  useEffect(() => {
    let name = localStorage.getItem("login");
    console.log(name);
    setUser(JSON.parse(name));
  }, []);

  useEffect(()=>{
    let username = JSON.parse(localStorage.getItem("login"));
    axios.post("http://localhost:5002/cart/getCart",{username:username},)
    .then((res)=>{
    setCart(res.data.response);
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
      <div className="amazon_header">
        <Link to={"/"} className="image_suffix">
          <img src={amazonImage} alt="" />
          <span id="amazon_suffix">.in</span>
        </Link>
        <div className="amazon_header_location">
          <LocationOnOutlinedIcon />
          <div className="location_text">
            <div>Delivering to Bengaluru</div>
            <div id="update_location_text">Update Location</div>
          </div>
        </div>
        <div className="amazon_search_bar">
          <input type="text" placeholder="Search Here" className="input_bar" />
          <div className="amazon_search_bar_icon">
            <SearchIcon />
          </div>
        </div>
        <div className="amazon_account_list" >
          {localStorage.getItem("login") ? (
            <div className="amazon_account">
              <div>Welcome {JSON.parse(localStorage.getItem("login"))}</div>
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          ) : (
            <div className="signUptext" onClick={handleNavigate}>Hello, sign Up</div>
          )}
        </div>
        {localStorage.getItem("login") ? (
          <div className="loginCont">
            <div className="amazon_cart_wrapper">
              <Link to={"/cart"} className="amazon_cart">
                <span>{cart.length}</span>
                <ProductionQuantityLimitsOutlinedIcon />
              </Link>
              <span>Cart</span>
            </div>
            <div
              className="logoutOption"
              onClick={() => {
                localStorage.removeItem("login");
                navigate("/");
              }}
            >
              Logout
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              navigate("/login");
            }}
            className="loginOption"
          >
            Login
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
