import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Login /avatar.png";
import email_icon from "../Login/email.png";
import password_icon from "../Login/password.png";

const LoginSignup = () => {
  const [action, setAction ] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action} </div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="user"/>
            <input placeholder="Username" type="text"/>
            </div>}
       

            <div className="inputs">
        <div className="input">
            <img src={email_icon} alt="Email"/>
            <input placeholder="Email" type="text"/>
            </div>

            <div className="inputs">
        <div className="input">
            <img src={password_icon} alt="password"/>
            <input placeholder="Password" type="text"/>
            </div>
            {action==="Sign Up"?<div></div>:  <div className="forgot-password">Lost password? <span>Click Here!</span></div>}
      </div>
</div>
</div>
      
       <div className="submit-container">
       <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction(SignUp)}}>Sign Up</div>
       <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction(Login)}}>Login</div>
       </div>
       
       <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
    
      <Wrapper />
          </div>
  );
};

export default LoginSignup