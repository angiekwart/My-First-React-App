import React from 'react'
import './App.css'

// working with props for my app 
function App(props) {
  const currDate = new Date();

  return (
    <div className='appname'>
      <h1>Hello, World!</h1>
      <h2>The time in Ghana now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
