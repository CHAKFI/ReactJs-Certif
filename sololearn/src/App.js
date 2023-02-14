import './App.css';


let counter = 0;

function App() {
  counter++;

  return (
    <div className="App">
      <header className="Appi-header" >

        <h1> www.Scratchi.com </h1>
        <p>
          Hi im Scratchi, I just started coding with ReactJs...
        </p>
        
        <p>Count: {counter}</p>

      </header>
    </div>
  );
}

export default App;
