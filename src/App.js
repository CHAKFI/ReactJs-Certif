import React from 'react';
import './App.css';
let counter = 0;


// function Info(){
//   return "That is the ReactDOM.render function call Counter:";
// }

class Att3 extends React.Component{
  render(){
    return <li><a href="about.asp">{this.props.name}</a></li>
  }
}

class Info extends React.Component{
  render(){
    return "That is the ReactDOM.render Class call Counter:";
  }
}

function Att1(prop1){
  return prop1;
}

function Att2(prop2){
  return prop2.value; 
}

function App() {
  
  counter++;
  return (

    <div className="App">
                 
          <ul>
           <li><a href="default.asp">Home</a></li>
           <li><a href="news.asp">{Att1("Day News")}</a></li>
           <li><a href="contact.asp"><Att2 value="Contact us"/></a></li>
           <Att3 name="About us"/>
          </ul>
         
      <header className="App-header" >
        <h1> www.Scratchi.com </h1>
          <p id="hi">
            Hi im Scratchi, I just started coding with ReactJs...
          </p>
          <p id="mssg">{<Info />} {counter}</p>
      </header>

      <footer>
        <p id="end"> The End </p>
      </footer>
      
    </div>
  );
}

export default App;
