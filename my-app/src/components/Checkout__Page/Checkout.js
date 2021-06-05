import React ,{useState , useEffect} from "react";
import { getBasketTotal } from "../../ContextApi/Reducer";
import { useStateValue } from "../../ContextApi/StateProvider";
import "../../static/Checkout__Page/Checkout.css";
import '../../static/Checkout__Page/items_In_Checkout.css';
import Cookies from 'universal-cookie';



function Checkout() {
  const [{basket} , dispatch] = useStateValue();
  const [addedProducts , setAddedProducts ] = useState({});
  const [loading , setLoading] = useState(true);
  const [total , setTotal] = useState();
  const cookies = new Cookies();
  const  userToken  = cookies.get("token");
  let price =0;
  let items =0;

const cartProductId = async()=>{

    try {
      const res = await fetch("/cart");
      const productOfCart = await res.json();
      setAddedProducts(productOfCart);
      setLoading(false);
      
    }catch(err){
      console.log(err);
    }
}

useEffect( ()=>{

  cartProductId();
  

  },[])

  const RemoveFromCart = async (id)=>{

    const res =   await fetch("/cart", {
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({productId:id})
      });
  
      const res3 = await res.json();
      console.log(res3)
      setAddedProducts(res3);
      setLoading(false);
  
    }

    
    
if(loading) return <>loading...</>

//console.log(addedProducts)



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

              { 
              
              (userToken) ?
              addedProducts.map(item =>(
                <>
               { price = price + (item.orderedQuantity * item.product.DiscountPrice)}
               { items = items + item.orderedQuantity}
                <div className="item" >
                    <div className="item_image">
                      <img style={{width:"200px" , height:"200px"}}
                        src={item.product.image}
                        alt="item"
                      />
                    </div>
                    <div className="item_description">
                      <p>{item.product.productName}</p>
                      <p> ₹ {item.product.DiscountPrice}</p>
                      <input id="in"  style={{width:"30px",textAlign:"center", padding:"2px"}} type="number" min="1" defaultValue={item.orderedQuantity}  />
                      <button onClick={()=>{RemoveFromCart(item.product._id)}}>Remove</button>
                    </div>
                </div> </>
              ))
                :
              <>
              </>

              }
            </div>
          </div>
        </div>
        
        <div className="checkout_right">
          <div className="checkout_right_items_box">
            <div className="rupee">
            <span>SubTotal( {items} items ) : ₹ {price} </span>
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
