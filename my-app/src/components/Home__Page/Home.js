import React , { useEffect , useState } from 'react';
import '../../static/Home__Page/Home.css'
import Product from './Product';
import {Link} from 'react-router-dom';


function Home() {
  const id = [1,2,3,4,5]
  const [ productData , setProductData] = useState({});
  const [loading , setLoading] = useState(true);

  
  useEffect(async ()=>{

      const res = await fetch("/getProduct" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
  
      } , 
      credentials:"include"
    });
    const res2 = await res.json();
    setProductData(res2);
    console.log(res2)
    setLoading(false);
  },[]);


  if(loading) return <>loading..</>



  return (
    <div> 
    <div className="product__containers">
      <div className="product__container" >
        <div className ="slider">
          
          <figure className="gallery__item gallery__item--1">
              <img src="1.jpg" class="gallery__img" alt="Image 1"/>
            </figure>
            <figure className="gallery__item gallery__item--2">
              <img src="2.jpg" class="gallery__img" alt="Image 2"/>
            </figure>
            <figure className="gallery__item gallery__item--3">
              <img src="3.jpg" class="gallery__img" alt="Image 3"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
              <img src="4.jpg" class="gallery__img" alt="Image 4"/>
            </figure>
            <figure className="gallery__item gallery__item--5">
              <img src="5.jpg" class="gallery__img" alt="Image 5"/>
            </figure>
            <figure className="gallery__item gallery__item--6">
              <img src="2.jpg" class="gallery__img" alt="Image 6"/>
            </figure>
        
        </div>
        <div className="home__page__heading">
            <h1>Welcome to Fresh-n-Green</h1>
            <p>Get the village grown agricultural products from organic farming delivered at your doorstep</p>
        </div>
        <div className="explore__more">
            <br/><span>Category one...</span><br/>
      </div>
        <div className="product__box__type__one">
            <Product id={productData[0]._id} title = {productData[0].productName} price ={productData[0].MRP} image={productData[0].image} />
            <Product id= {productData[1]._id} title ={productData[1].productName} price ={productData[1].MRP} image={productData[1].image} />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
        </div>
        <div className="explore__more">
            <br/><span>Category two...</span><br/>
        </div>
        <div className="product__box__type__two">
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
            <Product id="3" title ="description" price ='322' image='3.jpg' />
            <Product id= "5" title ="description" price ='342' image='5.jpg' />
            <Product id="2" title ="description" price ='3262' image='2.jpg' />
            <Product id="3" title ="description" price ='3232' image='3.jpg' />
            <Product id="1" title ="description" price ='3422' image='1.jpg' />
        </div>
        <div className="explore__more">
            <br/><span>Explore more...</span><br/>
        </div>
        <div className="product__category__container">

          <Link to={"/" + id[0]}>
            <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          </Link>
          <Link to={"/" + id[1]}>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div></Link>
          <Link to={"/" + id[2]}>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          </Link>
          <Link to={"/" + id[3]}>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div></Link>
          <Link to={"/" + id[4]}>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div></Link>
          
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          <div className="product__category__block">
            <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  style={{width:"200px" , height:"200px"}}/>
          </div>
          
        </div>
      
    </div>
    </div>
    </div>

    )
}

export default Home;
