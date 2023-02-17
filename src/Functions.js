import React from 'react';

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