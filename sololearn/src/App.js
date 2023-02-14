import './App.css';
let counter = 0;


function Info(){
  return "That is the ReactDOM.render function call Counter:";
}


function App() {
  counter++;

  return (
    <div className="App">
      <header className="App-header" >

        <h1> www.Scratchi.com </h1>
        <p>
          Hi im Scratchi, I just started coding with ReactJs...
        </p>
        

        <p>{Info()} {counter}</p>

      </header>

    <footer>
    
    <p> The End </p>

    </footer>
      
    </div>
  );
}

export default App;
