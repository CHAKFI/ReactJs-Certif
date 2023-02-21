import React from 'react';
import './App.css';
import {Att3, Info, Pass_data, ClaCounter} from'./Classes';
import {Att1, Att2, Item, Namey, FunCounter, Converter} from'./Functions';

let counter = 0;


function App() {
  
  counter++;
  return (
    
    <div className="App">

      <div className="divi"><h1> www.Scratchi.com </h1>  </div>

      <header className="App-header" >

          <div>
            <Converter />
          </div>

        {/* <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">{Att1("Day News")}</a></li>
          <li><a href="contact.asp"><Att2 value="Contact us"/></a></li>
          <Att3 name="About us"/>
        </ul>

        <div>
          <p id="hi">
            Hi im Scratchi, I just started coding with ReactJs hhhh...
          </p>
          <p id="mssg">111 <Info /> {counter}</p><br/>
          <p id="p1"> Course Cretifications:</p>
          <p>{<Item name="Reactjs" price="79.99$"/>}</p>
          <p>{<Item name="Nodejs" price="54.99$"/>}</p>
          <p>{<Item name="Data Analytics" price="189.99$"/>}</p>
          <p>{<Item name="Data Science" price="99.99$"/>}</p>
        </div>

        <div>
          <p id="p1">000<Pass_data /></p>
        </div>

        <div>
          <br/><br/><br/>
          <p>Boutton increments Using a class</p>
          <ClaCounter/>
        </div>

        <div>
          <br/><br/><br/><br/><br/><br/>
          <p>Hooks test</p>
          <Namey/>
        </div>

        
        <div>
        <br/><br/><br/><br/><br/><br/>
          <FunCounter />
        </div> */}

      </header>

      <footer>
        <p id="end"> The End </p>
      </footer>
      
    </div>
  );
}

export default App;
