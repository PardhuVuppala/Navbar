import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nakhul from './Nakhul';
import Home from './Home';
import Loading from './Loading';
import Box from './boxes';
import CC from './Class';

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Nakhul' element={<Nakhul/>}/>
     <Route path='/Loading' element={<Loading/>}/>
     <Route path='/box' element={<Box/>}/>
     <Route path='/class' element={<CC/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;


// import React from 'react';
// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;}
// function App() {
//   return <Greeting name="John" />; }





// import React, { useState } from 'react';
// function Counter() {
// const [count, setCount] = useState(0);
// return (
// <div>
// <p>You clicked {count} times</p>
// <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click me</button>
// </div>
// );
// }
// export default Counter;



































































