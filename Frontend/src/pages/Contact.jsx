import React,{useState} from 'react'

const Contact = () => {
  const [name,setName]=useState("Gaddam");
  const toggleName =()=>{
    setName(name==="Gadam"?"nandhu":"Gadam")
  }
  return (
    <div>
      <h1>Name : {name}</h1>
    <button onClick={toggleName}>Toggle Name</button>
    <Service name = {name}/>
    </div>
  )
}

export default Contact