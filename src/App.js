import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Reg from './Registration';
import About from './Aboutus'

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Reg' element={<Reg/>}/>
     <Route path='/About' element={<About/>}/>
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



































































