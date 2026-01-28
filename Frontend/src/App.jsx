// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// const App = () =>{
//   return(
//     <h1>Hello</h1>
//   )
// }

// import { Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Home from './pages/Home';
// import Service from './pages/Service';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Counter from './component/Counter';
// import UseState from './Hooks/UseState';
// import Signin from './Auth/Signin';
// import UseEffect from './Hooks/UseEffect';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home name="Nanduu" />} />
//         <Route path="/about" element={<About name="Nanduu" age={19} dept="CS&DS" />}/>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/counter" element={<Counter />} />
//         <Route path="/useState" element={<UseState />} />
//         <Route path="/Login" element={<Signin />} />
//         <Route path="/useEffect" element={<UseEffect/>}/>

//       </Routes>
//     </>
//   );
// };

// export default App;

// import {Route, Routes} from 'react-router-dom'
// import Navbar from './component/Navbar'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Counter from './component/Counter'
// import Service1 from './Pages/Service1'
// import UseState from './Hooks/UseState'
// import Login from "./Auth/Login";
// const App = () =>{
  
//    return(    
//    <>
//    <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home name="Navya"/>}/>
//       <Route path='/about' element={<About name="Navyaa" age={20} dept="CS&DS"/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/services' element={<Service1/>}/>
//       <Route path='/counter' element={<Counter/>}/>
//       <Route path='/useState' element={<UseState/>}/>
//        <Route path='/login' element={<Login/>}/>
//     </Routes>
//     </>
//    )
// }
// export default App



import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Counter from './component/Counter'
import Service from './Pages/Service'
import UseState from './Hooks/UseState'
import Signin from './Auth/Signin' 
import Signup from './Auth/Signup';
//import { BrowserRouter } from "react-router-dom";
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect';
import UseEffectApi from './Hooks/UseEffectApi';
import UseRef from './Hooks/UseRef';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home name="Nandini" />} />
        <Route path='/about' element={<About name="Nandini" age={20} dept="CS&DS" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup/>}/>
        // * Hooks *//
        <Route path='/hook' element={<Hook />} />
         <Route path='/useState' element={<UseState />} /> 
         <Route path='/useEffect' element={<UseEffect />} />
         <Route path='/useEffectApi' element={<UseEffectApi/>}/>
         <Route path='/useRef' element={<UseRef/>}/>
        
        </Routes>
    </>
  )
}

export default App