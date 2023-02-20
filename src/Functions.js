import React, {useState} from 'react';

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