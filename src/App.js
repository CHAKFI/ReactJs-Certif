import React from 'react';
import './App.css';
let counter = 0;


// function Info(){
//   return "That is the ReactDOM.render function call Counter:";
// }

// Property Class
class Att3 extends React.Component{
  render(){
    return <li><a href="about.asp">{this.props.name}</a></li>
  }
}

// Class that return information message
class Info extends React.Component{
  render(){
    return "That is the ReactDOM.render Class call Counter:";
  }
}

// Property Function 1
function Att1(prop1){
  return prop1;
}

// Property Function 2
function Att2(prop2){
  return prop2.value; 
}

// Items Function
function Item(certif){
  return
    <div>
      <p><b>Certif. Name: </b>certif.name</p>
      <p><b>Price: </b>certif.price</p>
    </div>
}

function App() {
  
  counter++;
  return (
    
    <div className="App">

      <div className="divi"><h1> www.Scratchi.com </h1>  </div>

      <header className="App-header" >

        <ul >
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">{Att1("Day News")}</a></li>
          <li><a href="contact.asp"><Att2 value="Contact us"/></a></li>
          <Att3 name="About us"/>
        </ul>

        <div>
        <p id="hi">
          Hi im Scratchi, I just started coding with ReactJs...
        </p>
          <p id="mssg">{<Info />} {counter}</p>
        </div>

      </header>

      <footer>
        <p id="end"> The End </p>
      </footer>
      
    </div>
  );
}

export default App;
