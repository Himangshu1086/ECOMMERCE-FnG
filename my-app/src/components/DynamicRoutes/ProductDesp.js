
import React ,{ useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../static/DynamicRoute/ProductDesp.css'


function ProductDesp() {

        const {id } = useParams();
        const [ productData , setProductData] = useState({});
        const [loading , setLoading] = useState(true);
        const [quantity , setQuantity] = useState(1);
        
        useEffect(async ()=>{
     
            const res = await fetch(`/productDesp` , {
            method:"GET" ,
            headers:{
              "Content-Type":"application/json",
              "id":id
            }
          });
        const res2 = await res.json();
        setProductData(res2);
        setLoading(false);  

        },[id]);


      if(loading) return <>loading..</>

     
      const addToCart = async ()=>{
          console.log("product added : " , productData.productName);

          const res = await fetch("/cart" , {
              method:"PUT",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  quantity , productId:productData._id
              })
          });

          const data = await res.json();
          console.log(data);
          window.alert("product added to the cart")
        



      }


    return (
        <div  >
            <div className="container">
                <div className="left">
                    <img src={productData.image} alt="image" />
                </div>
                <div className="right">
                    
            <div className="right-items">
                <p>{productData.productName}</p>
                    <strong>⭐⭐⭐⭐</strong>
                    <strong>Discount price : ₹ {productData.DiscountPrice} </strong>
                    <p> MRP : ₹ <span>{productData.MRP}</span></p>
                    <input type="number" value={quantity} min='1'   autoFocus onChange={(e)=>{setQuantity(Number(e.target.value))}} />
                    <div className="stock">
               {productData.availableQuantity>0 ? <h2>In Stock </h2>:<h2>Out of Stock</h2>}
            </div>
            <button onClick={addToCart} >Add to Cart</button>
            </div>
                    
                    
                    
                </div>
            </div>
            <div className="desp">
                <h4>{productData.description}</h4>
            </div>
            
            
        </div>
    )
}



export default ProductDesp ;


