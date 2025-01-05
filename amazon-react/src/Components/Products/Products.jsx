import React from 'react'
import '../Products/products.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Products = () => {
    const Arr =['Mobiles & Accessories', 'Laptops and Accessories','TV & Home Entertainment','Audio','Cameras','Computer Peripherals','Smart  Technology','Musical Instruments','Office & Stationary']
  return (
    <>
      <div className="products_navBar">
        <div className="Electronics">Electronics</div>
        {Arr.map((item, ind) => {
          return <div className="Products_NavBar_Items">{item}</div>;
        })}
      </div>
      <div className="main_content">
        <div className="SideBar">
          <div className="items sideBarItems">Category</div>
          <div className="items">computers & Accessories</div>
          <div className="items">MacBooks</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="items"> Amazon Prime</div>
          <div className="items">Average Customer review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
          <div className="items">Amazon Prime</div>
          <div className="items">Average Customer Review</div>
        </div>
        <div className="Prodcuts_Main"></div>
      </div>
    </>
  );
}

export default Products
