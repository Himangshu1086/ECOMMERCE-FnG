import React , {useEffect , useState } from 'react';
import '../static/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import {Link , useHistory} from 'react-router-dom'
import { useStateValue } from '../ContextApi/StateProvider';
import Cookies from 'universal-cookie';




function Header() {

  const [{basket}  , dispatch] = useStateValue();
  const [ userData , setUserData] = useState({});
  const [loading , setLoading] = useState(true);
  const history = useHistory();
  
  const cookies = new Cookies();
  const  userToken  = cookies.get("token");
  

let user = false ;

if(userToken){
  user = true
}
else{
  user = false
}

useEffect( async ()=>{

  try{
    const res = await fetch("/userLoggedIn" , {
    method:"GET" ,
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"

    } , 
    credentials:"include"
  });

  const data = await res.json();
  setUserData(data);
  setLoading(false);
  
}catch(err){
    console.log(err)
  }

},[]);



  
if(loading) 
  return (
    <>
    <div className="topnav">

  
  <div className="topnav-logo">
    <Link to="/">
    <h1>LOGO</h1>
    </Link>
  </div>

   

  <div className="topnav-search-bar">
      
  
        <p>Hello</p> 
        <input type="text" placeholder="search your product"></input>
        <span><SearchIcon style={{fontSize : 20}}></SearchIcon></span>

  </div>
  

  <div className="topnav-right">
  <span><CategoryOutlinedIcon></CategoryOutlinedIcon>
  <br/>Category
  </span>

  <Link to="/signIn">
              <span><PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
            <br/>Login
            </span></Link>

<Link to="/checkout">
    <span><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
  <br/>Cart ({basket?.length}) 
  </span>
</Link>
  
</div>
  
</div>

    </>

  )






console.log(userData.user.firstName);
    

const logoutUser = ()=>{
  cookies.remove("token");
  history.push("/");
  window.location.reload();
}




return (
        
<div className="topnav">

  
  <div className="topnav-logo">
    <Link to="/">
    <h1>LOGO</h1>
    </Link>
  </div>

   

  <div className="topnav-search-bar">
      
  
        <p>Hello,{userData.user.firstName}</p> 
        <input type="text" placeholder="search your product"></input>
        <span><SearchIcon style={{fontSize : 20}}></SearchIcon></span>

  </div>
  

  <div className="topnav-right">
    <span><CategoryOutlinedIcon></CategoryOutlinedIcon>
    <br/>Category
    </span>

  <Link to="/signIn">
    <span><PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
    <br/>Account
    </span>
  </Link>
  
    <span onClick={logoutUser} ><PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
    <br/>Logout
    </span>

  <Link to="/checkout">
      <span><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
      <br/>Cart ({basket?.length}) 
      </span>
  </Link>
  
</div>
</div>
    )
}

export default Header
