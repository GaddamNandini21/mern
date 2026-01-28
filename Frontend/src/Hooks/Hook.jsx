import React, {useState, useEffect} from 'react';
import {Link, Outlet } from 'react-router-dom';

const Hook = () => {
  // const [count, setCount] = useState(0);
  // useEffect(()=> {
  //   console.log("Hook component mounted");
  // }, []);
  return (
    <div>
        <ol>
            <li><Link to='/useState'>useState</Link></li>
            <li><Link to='/useEffect'>useEffect</Link></li>
            <li><Link to='/useEffectApi'>useEffectWithApi</Link></li>
            <li><Link to='/useRef'>useRef</Link></li>
        </ol>
        <Outlet/>
    </div>
  );
};

export default Hook;


// // import React from 'react'
// // import {Link} from 'react-router-dom'
// // const Hook = () => {
// //   return (
// //     <div>
// //         <ol>
// //             <li><Link to='/useState'>useState</Link></li>
// //             <li><Link to='/useEffect'>useEffect</Link></li>
// //         </ol>
// //     </div>
// //   )
// // }

// export default Hook
// import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// const Hooks = () => {
//   const [count, setCount] = useState(0);
//   useEffect(()=> {
//     console.log("Hooks component mounted");
//   }, []);
//   return (
//     <div>
//         <ol>
//             <li><Link to='/useStates'>useStates</Link></li>
//             <li><Link to='/useSEffect'>useEffect</Link></li>
//         </ol>
//     </div>
//   );
// };

// export default Hook;