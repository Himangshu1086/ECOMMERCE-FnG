import React ,{useEffect} from 'react'
import { useStateValue } from '../../ContextApi/StateProvider';
import '../../static/Home__Page/Product.css'


function Product({id ,title , price , image}) {
  


    const [{basket} , dispatch] = useStateValue();



    const addToBasket = () =>{
        // dispatch the item into the data layer 
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price :price,
                
            },
        })
        
    }



  


    return (
        <div className="product__item__box__container">
           <div className="product__item__box__container_one">
                <img src={image}  alt="item"/>
                <button onClick={addToBasket} className="addToCartButton">Add to cart</button> 
            </div>
            
            <div className="product__item__box__container_two">
            
                <p>{title}</p>
                <span>Rs : {price} ( 1kg )</span>
            </div>
                  
        </div>
    )
}

export default Product
