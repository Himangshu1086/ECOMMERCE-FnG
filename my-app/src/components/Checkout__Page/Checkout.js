import React ,{useState , useEffect} from "react";
import "../../static/Checkout__Page/Checkout.css";
import '../../static/Checkout__Page/items_In_Checkout.css';
import AddIcon from '@material-ui/icons/Add';
import Cookies from 'universal-cookie';
import { useHistory , Link } from 'react-router-dom'



function Checkout() {
  const history = useHistory();
  

  const [addedProducts , setAddedProducts ] = useState({});
  const [loading , setLoading] = useState(true);

  const[Uname , setUname]=useState("");
  const[Mobile , setMobile]=useState("");
  const[Address , setAddress]=useState("");
  const[Town , setTown]=useState("");
  const[HouseNo, setHouseNo]=useState("");
  const[pin , setPin]=useState("");
  const[Landmark , setLandmark]=useState("");

  const [deliveryAddress , setDeliveryAddress] = useState({});
  const [delivery , setDelivery] = useState("");

  const cookies = new Cookies();
  const  userToken  = cookies.get("token");
  let price =0;
  let items =0;


useEffect( async()=>{

  try {
    const res = await fetch("/cart");
    const productOfCart = await res.json();
    setAddedProducts(productOfCart);

    const resAddres = await fetch("/address");
    const userAddress = await resAddres.json();
    setDeliveryAddress(userAddress);
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

    const result = await fetch("/checkout/orders" , {method:"POST" ,headers:{"Content-Type":"application/json"}, body:JSON.stringify({price , delivery , addedProducts })});
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
            history.push("/account");
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


const addAddress = async (e)=>{
  e.preventDefault(); 
  const fetAddress = await fetch("/address" , {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({Uname,Mobile,Town,HouseNo,Address,pin,Landmark })
  });
  const resAddress = await fetAddress.json();
  console.log(resAddress); 
  if(resAddress.status === 422 || !resAddress){
    window.alert("Invalid Credentials");
    console.log("Invalid Registration");
}
else
{
    window.alert("Address added");
    console.log("Registration successful");
}
    // setDeliveryAddress(`name:${Uname} , mobileNo : ${Mobile} , Town : ${Town} , HouseNo : ${HouseNo} , Address : ${Address} , PIN : ${pin} , Landmark : ${Landmark}`);
    document.getElementById("formAddress").style.display = "none";


  }

  const cookie = new Cookies();
  const  user  = cookie.get("token");
  if(!user) return <>Login to see the cart items<Link to="/signIn"><button>LogIn</button></Link></>
    
if(loading) return <>loading...</>


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
                </div> 
                </>
              ))
      
              :
              <>
              </>
            }  
            </div>
          </div>
        </div>
        {
          (userToken) ?
          <>
        <div className="checkout_right">
          <div className="checkout_right_items_box">
            <div className="rupee">
            <span>SubTotal( {items} items ) : ₹ {price} </span>
            </div>
            <div className="button">
              <button onClick={displayRazorpay} >Proceed to Checkout</button>
            </div>
          </div>
          
          <div className="checkout_right_items_box " style={{height:"200px" , marginTop:"50px" }}>
          <div onClick={()=>{
            setDelivery( ` ${deliveryAddress.addresses[0].name} , ${deliveryAddress.addresses[0].phNumber} , ${deliveryAddress.addresses[0].address} , ${deliveryAddress.addresses[0].pin} , ${deliveryAddress.addresses[0].landmark} , ${deliveryAddress.addresses[0].houseNo} , ${deliveryAddress.addresses[0].town}` )
          }} style={{width:"15px", height:"15px"  ,background:"white", borderRadius:"100%"}}></div>
            <div className="__address_box">
                <div className="delAddress">
                    <p className="delHeading">
                      <span className="__deLName">{deliveryAddress.addresses[0].name} </span>
                      <span className="__tagTime">HOME</span>
                      <span className="__delMobile">{deliveryAddress.addresses[0].phNumber}</span>
                    </p>
                    <span class="__delAddress">{deliveryAddress.addresses[0].address} - 
                      <span class="__delPin">{deliveryAddress.addresses[0].pin}</span>
                    </span>
                </div>
            </div>    
          </div>
          <div className="checkout_right_items_box" style={{height:"auto" , marginTop:"50px"}}>
            <AddIcon style={{marginRight:"10px"}}></AddIcon><strong onClick={()=>{document.getElementById("formAddress").style.display = "flex"}}>ADD A NEW ADDRESS</strong><br/><br/>
              <form id="formAddress" style={{display:"none" , flexDirection:"column" }}>
                <input  value={Uname}  onChange={(e)=>setUname(e.target.value)} type="text" placeholder="Name"  />
                <input value={Mobile}  onChange={(e)=>setMobile(e.target.value)} type="number" placeholder="Mobile number"/>
                <input value={Town}  onChange={(e)=>setTown(e.target.value)} type="text" placeholder="Town/City"/>
                <input value={HouseNo}  onChange={(e)=>setHouseNo(e.target.value)} type="text" placeholder="House No."/>
                <textarea value={Address} style={{height:"100px" , textDecoration:"none"}}  onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Address"></textarea>
                <select value={pin} onChange={(e)=>setPin(e.target.value)}  name="PIN" id="pin" style={{width:"100%"}}>
                <option value="" disabled="True">--Select PIN--</option>
                  <option value="781102">781102</option>
                  <option value="781001">781001</option>
                  <option value="781103">781103</option>
                  <option value="781002">781002</option>
                </select>
                <input value={Landmark} onChange={(e)=>setLandmark(e.target.value)} type="text" placeholder="Landmark"/>
                <button onClick={addAddress}>Deliver Here</button>
                
              </form>
          </div>
        </div>
          
          </>:<></>

        }

         
      </div>
    </div>
  );         
}
export default Checkout;
