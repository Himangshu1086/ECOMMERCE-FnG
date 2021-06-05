import React, { useState } from 'react'

function CreateProduct() {

    const [productName , setProductName] = useState("");
    const [MRP , setMRP] = useState("");
    const [DiscountPrice , setDiscountPrice] = useState("");
    const [ DeliveryCharge , setDeliveryCharge ] = useState("");
    const [availableQuantity , setAvailableQuantity] =useState("");
    const[description , setDescription] = useState("");
    const [ image , setImage] = useState("");

    const addProducts = async (e) => {

            e.preventDefault();
         console.log(productName , MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image );
            
            const res = await fetch("/product" ,{
              method:"POST" ,
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
               productName, MRP , DiscountPrice , DeliveryCharge , availableQuantity , description , image 
              })
            });
          
            const data = await res.json();
            console.log(data);
            
            if(data.status === 422 || !data)
            {
              window.alert("Invalid Credentials");
              console.log("Invalid Credentials");
          }
              if(data.error){
                window.alert("Invalid Credentials")
              }
            else
            {
              
                window.alert("PRODUCT ADDED ");
                console.log("Added successfully");
               window.location.reload();
                
            }
          
          
    }





    return (
        <div>
            <div className="sign__up__container" >
                <h1 className="sign__up__heading">CREATE PRODUCTS</h1>
                <form method="POST" className="sign__up__form" >
                    <input type="text" placeholder="Product Title" 
                    name="productName"
                    value={productName}
                    onChange={(e)=>setProductName(e.target.value)}
                    autoFocus required >
                    </input>

                    <input type="Number" placeholder="MRP" 
                    name="MRP"
                    value={MRP}
                    onChange={(e)=>setMRP(e.target.value)}
                    required >
                    </input>

                    <input type="Number" placeholder="Discount Price" 
                    name="DiscountPrice"
                    value={DiscountPrice}
                    onChange={(e)=>setDiscountPrice(e.target.value)}
                    required >
                    </input>

                    <input type="Number" placeholder="Delivery Charges" 
                    name="DeliveryCharge"
                    value={DeliveryCharge}
                    onChange={(e)=>setDeliveryCharge(e.target.value)}
                    required >
                    </input> 

                    <input type="Number" placeholder="Available Quantity" 
                    name="availableQuantity"
                    value={availableQuantity}
                    onChange={(e)=>setAvailableQuantity(e.target.value)}
                    required >
                    </input>

                    <input type="text" placeholder="Description" 
                    name="description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required >
                    </input>

                    <input type="text" placeholder="imageUrl" 
                    name="image"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    required >
                    </input>
                    

                    <button onClick={addProducts} >Add</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;
