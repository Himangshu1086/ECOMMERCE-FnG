import React from 'react'
import { useStateValue } from '../../ContextApi/StateProvider';
import '../../static/Checkout__Page/items_In_Checkout.css';

function Items_In_Checkout({id , title , image ,price}) {
  const [{basket} , dispatch] = useStateValue();

  const RemoveFromCart = ()=>{

    dispatch({
      type:'REMOVE_FROM_CART',
      id:id,
    })
  }
  
  return (
        
            <div className="item" >
                <div className="item_image">
                  <img
                    src={image}
                    alt="item"
                  />
                </div>
                <div className="item_description">
                  <p>{title}</p>
                  <p>Rs : {price}</p>
                  <button onClick={RemoveFromCart}>Remove</button>
                </div>
                
              </div>
    )
}

export default Items_In_Checkout
