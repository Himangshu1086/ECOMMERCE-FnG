import React ,{useEffect , useState} from 'react'


function Account() {

    const [loading , setLoading] = useState(true);
    const [orders , setOrders] = useState({});


useEffect(async()=>{

    const res = await fetch("/OrdersInAccount" , {
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    });

    const data = await res.json();
    setOrders(data);
    setLoading(false);

},[])



if(loading) return <>loading...</>

return (
    <div>
       {
       orders.products.map(item =>(
                <>
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
                      <span style={{width:"30px",textAlign:"center", padding:"2px"}}>Quantity :{item.orderedQuantity}</span>
                    </div>
                </div> 
                </>
              ))
       }  
    </div>
    )
       
}

export default Account
