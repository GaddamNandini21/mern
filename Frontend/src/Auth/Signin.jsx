import React, { useState } from 'react'

const Signin = () => {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData)
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" 
            value={userData.email}
            name="email"
            onChange={handleChange} 
            placeholder='enter the email'/>
            <br></br>
            <br></br>
            <label> password:</label>
            <input type="password" 
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder='enter the password'/>
            <br></br>
            <br></br>
            <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default Signin;