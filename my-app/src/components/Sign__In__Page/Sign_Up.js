import React, { useState } from 'react'
import '../../static/Account/Sign_up.css'
import { useHistory } from 'react-router-dom'
function Sign_Up() {

    const history = useHistory();

    const [ user , setUser ] = useState({
        firstName:"" , lastName:"" , mobileNumber:"" , email:"" , password:"" , conformPass:""
    });

    let name  , value  ;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user , [name]:value})

        
    }


    const addNewUser =  async (e) =>{
        e.preventDefault();
        const { firstName, lastName, mobileNumber, email, password, conformPass} = user ;


        const res = await fetch('/register' , {

            method:"POST" ,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName, lastName, mobileNumber, email, password, conformPass
            })

        });

        

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else
        {
            window.alert("Welcome to the family ");
            console.log("Registration successful");
            history.push("/signIn");
        }

    }

    return (
        <div>
            <div className="sign__up__container" >
                <h1 className="sign__up__heading">CREATE ACCOUNT</h1>
                <form method="POST" type="submit" className="sign__up__form" >
                    <input type="text" placeholder="First name" 
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputs}
                    autoFocus required ></input> 

                    <input type="text" placeholder="Last name" required
                    
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputs}
                    ></input>
                    <input type="text" required placeholder="Mobile number"
                    
                    name="mobileNumber"
                    value={user.mobileNumber}
                    onChange={handleInputs}
                    
                    ></input>
                    <input type="email" placeholder="Email (optional)"
                    
                    name="email"
                    value={user.email}
                    onChange={handleInputs}

                    ></input>
                    <input type="password" placeholder="Password" required 
                    
                    name="password"
                    value={user.password}
                    onChange={handleInputs}
                    
                    ></input>
                    <input type="text" placeholder="Confirm Password" required
                    autoComplete="off"
                    name="conformPass"
                    value={user.conformPass}
                    onChange={handleInputs}
                    ></input>
                    <button  onClick={addNewUser}>Sign Up</button>
                </form>
            </div>
            
        </div>
    )
}

export default Sign_Up
