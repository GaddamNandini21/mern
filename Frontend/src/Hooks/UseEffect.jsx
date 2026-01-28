// UseEffect(()=>{
    // // side effect code
  //  }, [dependencies])

  //import React from 'react'
  import React, {useEffect, useState} from 'react'
  import Signin from '../Auth/Signin'

  const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [value,setValue]=useState(0)
    useEffect(()=>{
        console.log("useEffect Mounted");
    })
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h1>{count}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
      </div>    )
  }
  
  export default UseEffect