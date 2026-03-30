
import './App.css'

function App() {
  
  function handleClick(){
    alert("I am clicked");
  }
  
  return (
    <>
      <h2>hello react</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
