import React, { useContext, useState } from 'react'
import { createContext } from 'react';

let contextMessage = createContext("Default Message");
export default function ContextExample2() {
  const [message, setMessage] = useState('lorem ipsum');
  console.log("Context Example");
  const changeMessage = () => {
    setMessage("New Message");
  }
  return (
    <>
      <div>One More Context Example</div>
      <button onClick={changeMessage}>Click Me</button>
      <contextMessage.Provider value={message}>
        <GrandParent></GrandParent>
      </contextMessage.Provider>

    </>
  )
}

function GrandParent() {

  console.log("Grand Parent");
  return (
    <>
      <div>I am GrandParent</div>
      <Parent></Parent>
    </>
  )
}

function Parent() {

  console.log("Parent");
  return (
    <>
      <div>I am Parent</div>
      <Child></Child>
    </>
  )
}

function Child() {

  let message = useContext(contextMessage);
  console.log("Child");
  return (
    <>
      <div>I am Child</div>
      <div> Message from GrandParent is {message}</div>
    </>
  )
}


