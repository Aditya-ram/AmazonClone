import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css'
const NavBar = () => {
    const Arr = ['fresh','Amazon miniT','Best Sellers', "Today's Deals","Mobiles","Electronics","Prime","Custom Service","Fashion","Home & Kitchen"]
  return (
    <div className="NavBar">
      <div id="All">
        <MenuIcon />
        <span id="allSpan">All</span>
      </div>
        {Arr.map((item, ind) => {
          return <div>{item}</div>;
        })}
    </div>
  );
}

export default NavBar
