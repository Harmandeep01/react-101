import React from 'react';
import UserGreeting  from './userGreeting';
function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} userName = "John" />
    </>
  )
}

export default App
