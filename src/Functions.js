import React, {useState, useRef} from 'react';

// Property Function 1
export function Att1(props){
    return props;
  }
  
  // Property Function 2
export function Att2(props){
    return props.value; 
  }
  
  // Items Function
export function Item(props){
    return (
      <div className="item" >
        <p><b>Name: </b>{props.name}</p>
        <p><b>Price: </b>{props.price}</p>
      </div>
      );
  }

  // Is that a Hook ? mmm yes
export function Namey(){
    const [name, setName] = useState("Ahmed");
    return (
      <div>
    <h1>azerty {name}</h1>
    <h1>yes {useState("test")}</h1>
    <h1>azerty {name}</h1>
    </div>
    );
  }

export function FunCounter (){
    const [count, setCounter] = useState(0);

    function increment (){
      setCounter(count+1);
    }

    return (
      <div>
        <p>Let use Hook counter: {count}</p>
        <button onClick={increment}>Hook Counter +</button>
      </div>
    );
  }

  // Converting Km to Miles
export function Converter (){
  
    var calc = 0.00;

    // 1 km = 0.621371 miles (constant)
    const mi = 0.621371;

    const inputRef = useRef(null);

    // Initiallize _km with 0.00 value
    const [_km, setKm] = useState(0.00);
   
    function handleClick (){
      setKm(inputRef.current.value);
    }

    // function handleChange (k){
    //   setKm(k.target.value);
    // }

    // process function convert from km to miles and return result 
    function process (_km){
      // Defining variable that contain the result
      calc = _km * mi;

    //toFixed limite the dicimal numbers after the dot to two numbers
    return calc.toFixed(2);
    } 
     
    return (
      <div id="conv">
        Converter <br/>
        Km : <input type="text" ref={inputRef} name="kilo"/><br/>
        Mi : <input type="text" value={process(_km)} /><br/>
             <button onClick={handleClick} > Convert </button>
      </div>
    );

  }

  export function ListWe(attrib){

    // const li = ["Home", "About", "Contact us"];
      const tab = attrib.data;
      const liItems = tab.map((element, index) => <li key={index}>{index+1}.{element}</li> );

    return(
      <div id="listWe">
        List View
        <ul>{liItems}</ul>
      </div>
    );
  }