import React ,{useState}from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState(0)
    
  const Inc = () =>{
      setCount(count + 1)
  }
  const dec = () =>{
      setCount(count - 1)
  }

  return (
      <div className ='App'>
          <p>{count}</p>
          <button onClick={Inc} >Increment</button>
          <button onClick={dec} >Decrement</button>
      </div>
  )

}

export default App;
