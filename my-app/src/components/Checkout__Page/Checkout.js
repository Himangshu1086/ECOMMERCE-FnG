import React ,{useState , useEffect} from "react";
import { getBasketTotal } from "../../ContextApi/Reducer";
import { useStateValue } from "../../ContextApi/StateProvider";
import "../../static/Checkout__Page/Checkout.css";
import Items from './items_In_Checkout';



function Checkout() {
  const [{basket} , dispatch] = useStateValue();
  

  return (
    <div>
      <div className="checkout_container">
        <div className="checkout_left">
          <div>
            <img
              src="2.jpg"
              style={{ width: "100%", height: "200px", borderRadius: "5px" }}
            ></img>
          </div>

          <div className="checkout_right_items_box">
            <div className="checkout_title">
              <h2>Your Shopping Basket</h2>
            </div>
            <div className="checkout_items">

              {  basket.map(item =>(
                <Items
                id = {item.id}
                title={item.title}
                image = {item.image}
                price ={item.price}
                />
              ))
              }
            </div>
          </div>
        </div>
        
        <div className="checkout_right">
          <div className="checkout_right_items_box">
            <div className="rupee">
            <span>SubTotal( {basket?.length} items ) : Rs {getBasketTotal(basket)} </span>
            </div>
            <div className="button">
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
