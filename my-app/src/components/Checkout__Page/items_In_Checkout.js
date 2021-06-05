import React from 'react'
import '../../static/Checkout__Page/items_In_Checkout.css';

function Items_In_Checkout({id , title , image ,price , quantity}) {
 
  const RemoveFromCart = async (id)=>{

  const res =   await fetch("/cart", {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({productId:id})
    });

    const res2 = res.json();
    window.location.reload();

  }
  
  return (
        
            <div className="item" >
                <div className="item_image">
                  <img style={{width:"200px" , height:"200px"}}
                    src={image}
                    alt="item"
                  />
                </div>
                <div className="item_description">
                  <p>{title}</p>
                  <p>Rs : {price}</p>
                  <strong>quantity : {quantity}</strong>
                  <button onClick={()=>{RemoveFromCart(id)}}>Remove</button>
                </div>
            </div>
    )
}

export default Items_In_Checkout
