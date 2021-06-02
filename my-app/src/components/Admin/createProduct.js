import React from 'react'

function createProduct() {

    const [productName , setProductNA]

    return (
        <div>
            <div className="sign__up__container" >
                <h1 className="sign__up__heading">CREATE PRODUCTS</h1>
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

export default createProduct
