import Builder from "./builders/Builder";
import "./App.css"

function App() {
   const elements = new Builder()
            .input({label:'Name'})
            .input({label:'Email'})
            .input({label:'Password'})
            .checkbox({label:'Subscribe to NewsLetter'})
            .build();
  return (
    <div className="App">
     {elements}
    </div>
  )
}

export default App
