import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React from 'react';
// import ReactDOM from 'react-dom';
// const root = ReactDOM.createRoot(
// document.getElementById('root')
// );
// function tick() {
// const element = (
// <div>
// <h1>Hello, world!</h1>
// <h2>It is {new Date().toLocaleTimeString()}.</h2>
// </div>
// );
// root.render(element);
// }
// setInterval(tick, 1000);



// import React from "react";
// import ReactDOM  from "react-dom/client";
// function Car()
// {
//   return <h2>King Kohli</h2>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);






// function Car(props)
// {
//   return <h2>Pardhu {props.name}</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car name="Mahidhar"/>);








// function Car()
// {
//   return <h2>Mahidhar </h2>
// }

// function Garage()
// {
//   return(
//     <>
//     <h1>Pardhu
//     </h1>
//     <Car/>
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>)






// JSX Allows you to write HTML code in Java Script
// const Pardhu =<h1>I am Ironman</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Pardhu)






// it is without jsx
// const Pardhu = React.createElement('h1',{}, 'I do not use JSX')
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Pardhu)







// const Pardhu =<h1>I am Ironman {5+20}</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Pardhu)





// const Pardhu =(
//   <ul>
//     <li>
//       Pardhu
//     </li>
//     <li>
//       Mahidhar
//     </li>
//     <li>
//       Vuppala
//     </li>
//   </ul>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Pardhu)





// const myElement = <input type="text" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);





// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myElement = <h1>{text}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);





// const x = 5;
// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);



// // Render Basic rules
// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);






// class Car extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={color:"Yellow"}
//   }
//   render()
//   {
//     return <h2>Pardhu Mahidhar {this.state.color}, {this.props.pardhu}</h2>
//   }
// }


// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car pardhu="Vuppala"/>)'







// class Car extends React.Component {
//   constructor(props)
//   {
//     super(props);
//   }
//   render()
// {
//   return <h1>Vuppala Pardhu Mahidhar and {this.props.Name}</h1>
// }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car Name="Nakhul"/>)








// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);








// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   this.state = {brand: "Ford"};
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Car brand is {this.state.brand}</h1>
//       </div>
//     );
//   }
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>);




// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)


// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       brand:"Ford",
//       color:"Red"

//     };
//   }
//   changeColor = () =>{
//     this.setState({color:"blue"})
//   }
//   render()
//   {
//     return(
//       <div>
//         <h1> My car color is {this.state.color}</h1>
//         <button type="button" onClick={this.changeColor}>Click Here</button>
//       </div>
//     )
//   }
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car/>)





