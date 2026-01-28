// import react, { useState } from 'react'
// const UseState = () => {
//     const [name,setName]=useState("");
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(name);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input type="text" value={name}
//                 val={name} 
//                 onChange={(e)=>setName(e.target.val)} placeholder="Enter the name"/>
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     )
// }
// export default UseState


import React, {useState} from 'react'
const UseState = () => {
    const [name, setName] =useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter the name"/>
            <button type="Submit">Submit</button>
        </form>
    </div>
    )
}

export default UseState