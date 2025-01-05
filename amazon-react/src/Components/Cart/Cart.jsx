// import React from "react";
import "../Cart/Cart.css";

const Cart = () => {
  return (
    <div className="cart_main">
      <div className="cart_products_list">
        <h2>Shopping Cart</h2>
        <div className="cart_deselect">Deselect Items</div>
        <div className="price_text">
          <div>Price</div>
        </div>
        <div className="products_list_wrapper">
          <div className="cart_product_card">
            <div className="cart_image">
              <img
                className="image"
                src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
                alt=""
              />
            </div>
            <div className="cart_text">
              <div className="cart_product_description">Product Name</div>
              <div className="stock_status">In stock</div>
              <div className="free_shipping">Eligible for free shipping</div>
              <div>
                <img
                  className="fulfilledImg"
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                  alt=""
                />
              </div>
              <div>
                <button className="cart_button_class">
                  Remove From Basket
                </button>
              </div>
            </div>
            <div className="cart_price">Rs.{1500}</div>
          </div>

          <div className="cart_product_card">
            <div className="cart_image">
              <img
                className="image"
                src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
                alt=""
              />
            </div>
            <div className="cart_text">
              <div className="cart_product_description">Product Name</div>
              <div className="stock_status">In stock</div>
              <div className="free_shipping">Eligible for free shipping</div>
              <div>
                <img className="fulfilledImg"
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                  alt=""
                />
              </div>
              <div>
                <button className="cart_button_class">
                  Remove From Basket
                </button>
              </div>
            </div>
            <div className="cart_price">Rs.{1500}</div>
          </div>
        </div>
      </div>
      <div className="cart_purchase_card">
        <div className="total_items_and_cost">
          Subtotal ({3} Items): <b> Rs. {2000}</b>
        </div>
        <div className="gift">
          <input type="checkbox" />
          <label>This Order Contains a gift</label>
        </div>
        <button className="cart_button_class proceed_to_buy">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
