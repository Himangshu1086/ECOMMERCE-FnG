import React  , { useEffect }  from 'react'
import { useStateValue } from '../../ContextApi/StateProvider';
import '../../static/Home__Page/Product.css';
import { Link } from 'react-router-dom';


function Product({id ,title , price , image}) {
  
    return (
        <div className="product__item__box__container">
           <div className="product__item__box__container_one">
                <img src={image}   alt="item"/>
                <Link to={`/product/${id}`}><button  className="addToCartButton">View</button></Link>
                
            </div>
            
            <div className="product__item__box__container_two">
            
                <p style={{fontWeight:"lighter" }}>{title}</p>
                <span style={{ fontWeight:"bolder",fontSize:"18px",color:"rgb(20, 121, 161)" , letterSpacing:"1px"}} >₹ {price} </span>(weight)
            </div>
                  
        </div>
    )
}

export default Product
