import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(count > 10){
      setCount(10)
    }
    if(count < 0){
      setCount(0)
    }
  }, [count])


  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1> {count}</h1>
        <button className='button-inc' onClick={()=>setCount(count+1)}>Increament</button>
        <button className='button-dec' onClick={()=>setCount(count-1)}>Decreament</button>
    </div>
  );
}

export default App;
