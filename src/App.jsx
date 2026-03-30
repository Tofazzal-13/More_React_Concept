
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './users';
import Friends from './friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}
function App() {
  const friendsPromise = fetchFriends()
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

      <Suspense fallback={<h3>Loading....</h3>} >
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback = {<h3>Friends are comming for treat.... </h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
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
