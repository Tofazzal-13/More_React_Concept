
import './App.css'
import Counter from './counter';

function App() {

  function handleClick() {
    alert("I am clicked");
  }

  const handleAdd3 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h2>hello react</h2>
      <Counter></Counter>
      <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => alert("click 2")}>Click me 2</button>
        <button onClick={() => handleAdd3(7)}>click add 3</button>
      </div>
    </>
  )
}

export default App
