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

// Class counter using a button
export class ClaCounter extends React.Component {

  state = {
    _counter: 0
  }

  increment = () => {
    this.setState({
      _counter: this.state._counter+1
    });
    }

  //componentDidMount() method is called when a component is rendred
  // componentDidMount(){this.setState({_counter: 542});}

  //However componentDidUpdate(), after the component is rendered and changed or updated (re-rendered)
  componentDidUpdate() {
    alert("Number of clicks: " + this.state._counter);
  }

  render() {
    return (
      <div>
        <h2>{this.state._counter}</h2>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

  //   state = {
  //   counter: 0
  // }
  // increment = () => {
  //   this.setState({counter: this.state.counter+1});
  // }
  // componentDidMount() {
  //   this.setState({counter: 42});
  // }
  // render() {
  //   return <div>
  //   <p>{this.state.counter}</p>
  //   <button onClick={this.increment}>Increment</button>
  //   </div>;
  // }

}