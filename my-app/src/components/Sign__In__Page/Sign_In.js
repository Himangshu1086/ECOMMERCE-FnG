
import React , { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../static/Account/Sign_In.css'




 function Sign_In() {

  const history = useHistory();
  const [mobileNumber , setMobileNumber] = useState("");
  const [ password , setPassword ] = useState("");



// function to login

const userLogin = async (e) =>{
  e.preventDefault();

  
  const res = await fetch("/signIn" ,{
    method:"POST" ,
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      mobileNumber , password
    })
  });

  const data = await res.json();
  
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
    
      window.alert("Happy Shopping");
      console.log("login successful");
      history.push("/");
     window.location.reload();
      
  }

}

return(
  <div>
      <div className="sign__in__box">  
        <form className="form">
          <h1 className="sign__in__tag">Sign In</h1>
          <span>MOBILE NUMBER</span>
          <input type="text" placeholder="mobile number"
          required autoFocus
          name="mobileNumber"
          value={mobileNumber}
          onChange={(e)=>{setMobileNumber( e.target.value)}}
          ></input>

          <span>PASSWORD</span>

          <input type="password" placeholder="password"
          required autoFocus autoComplete
          name="mobileNumber"
          value={password}
          onChange={(e)=>{setPassword( e.target.value)}}

          ></input>

          <span className="forgot__password">Forgot password?</span>


          <button onClick={userLogin} >Sign in</button>
          <Link to = "/createAccount" className="sign__up__button">
              <p  >Create Account</p>
          </Link>
        </form>
      </div>
  </div>
)

}
export default Sign_In

