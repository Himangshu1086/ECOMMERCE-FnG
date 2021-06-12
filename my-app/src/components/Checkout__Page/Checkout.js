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


useEffect( async()=>{

  try {
    const res = await fetch("/cart");
    const productOfCart = await res.json();
    setAddedProducts(productOfCart);
    setLoading(false);
    
  }catch(err){
    console.log(err);
  }
  

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

    
    function loadScript(src) {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
              resolve(true);
          };
          script.onerror = () => {
              resolve(false);
          };
          document.body.appendChild(script);
      });
}


const displayRazorpay = async() =>{
      
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    )
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
              }

    
     // create an order          

    const result = await fetch("/checkout/orders" , {method:"POST" ,headers:{"Content-Type":"application/json"}, body:JSON.stringify({price})});
    if (!result) {
      alert("Server error. Are you online?");
      return;}
    const data = await result.json();
    console.log(data);
     
    
      // pop up window for payments

     const options = {

      key: "rzp_test_ZVmoR7VianmWFt", 
      amount:data.amount,
      currency:data.currency,
      name: "FnG Private Limited",
      description: "Test Transaction",
      image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", 
      order_id:data.id,      
      "handler": async function (response) {
            // alert(response.razorpay_payment_id)
            // alert(response.razorpay_order_id)
            // alert(response.razorpay_signature)
            alert("Payment is Successful")
      },
      prefill: {
          name: "himangshu baishya",
          email: "himangshu@himanghsu.com",
          contact: "8638281845",
      },
      "theme": {
        "color": "#000000"
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
     
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
              <p style={{display:"none"}}> { price = price + (item.orderedQuantity * item.product.DiscountPrice)}
               { items = items + item.orderedQuantity}</p>
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
              <button onClick={displayRazorpay} >Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );         
}
export default Checkout;
