import { useState, useRef, useEffect } from 'react'

import './App.css'



function App() {

  const [time, setTime] = useState(0);
  const [hover, sethover] = useState(1);
  const [inputer, setinputer] = useState("");
  const previnput = useRef("");
  const timerRef = useRef(null);
  const image = useRef(null);


  useEffect(() => {
    previnput.current = inputer;
  }, [inputer]);


  const Start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((e) => e + 1);
    }, 1000);
  };

  const Stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const Reset = () => {
    Stop();
    setTime(0);
  };


  const hovering = () => {
    sethover(2)
  }

  const unhovering = () => {
    sethover(1)
  }




  return (
    <>
      <div className='maintimer'>
        <div className='timer'>
          <h1>Time: {time}</h1>
        </div>
        <div className='buttons'>
          <button className='timerer' onClick={Start}>Start</button>

          <button className='timerer' onClick={Stop}>Stop</button>

          <button className='timerer' onClick={Reset}>Reset</button>
        </div>

      </div>

      <img className='hoveredimg' ref={image} src="/assets/images.png" alt="" onMouseEnter={hovering} onMouseLeave={unhovering} style={{ transform: `scale(${hover})` }} />


<div>
        <input type="text" value={inputer} onChange={(e) => setinputer(e.target.value)} />
      <h2>current: {inputer}</h2>
      <h2>previous: {previnput.current}</h2>
</div>

    </>
  )
}

export default App
