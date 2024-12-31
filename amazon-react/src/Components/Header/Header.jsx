import amazonImage from "../../assets/amazonLogo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../Header/Header.css";

function Header() {
  return (
    <div className="amazon_header">
      <div className="image_suffix">
        <img src={amazonImage} alt="" />
        <span id="amazon_suffix">.in</span>
      </div>
      <div className="amazon_header_location">
        <LocationOnOutlinedIcon />
        <div className="location_text">
          <div>Delivering to Bengaluru</div>
          <div id="update_location_text">Update Location</div>
        </div>
      </div>
      <div className="header_dropdown">
        <span>All</span>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default Header;
