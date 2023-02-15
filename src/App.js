import React from 'react';
import './App.css';
let counter = 0;


// function Info(){
//   return "That is the ReactDOM.render function call Counter:";
// }

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
              <div> 
          
          <ul>
           <li><a href="default.asp">Home</a></li>
           <li><a href="news.asp">{Att1("Day News")}</a></li>
           <li><a href="contact.asp"><Att2 value="Contact us"/></a></li>
           <li><a href="about.asp">About</a></li>
          </ul>
         </div>
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
