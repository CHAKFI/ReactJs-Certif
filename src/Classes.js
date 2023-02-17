import React from 'react';

// Property Class
export class Att3 extends React.Component{
    render(){
      return <li><a href="about.asp">{this.props.name}</a></li>
    }
  }

  // Class that return information message
export class Info extends React.Component{
  render(){
    return "That is the ReactDOM.render Class call Counter:";
  }
}


// pass and upd data using state feature
export class Pass_data extends React.Component{
  state = {
    _data: "The operation has been processed..",
    _state: "DONE"
  }
  render(){
    return(
      <div> 
        <p>{this.state._data}</p>
        <p>{this.state._state}</p>
      </div> 
    );
  }
}