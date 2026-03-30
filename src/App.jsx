
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './users';
import Friends from './friends';
import Posts from './posts';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {
  const friendsPromise = fetchFriends()
  const postsPromise = fetchPosts()
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
      <Suspense fallback = {<h3>Post is comming...</h3>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense>

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
