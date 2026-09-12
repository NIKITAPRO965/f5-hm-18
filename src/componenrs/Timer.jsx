import { useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if(timerId.current !== null) {
        return
    }
    clearInterval(timerId.current);
    timerId.current = null;
    setCount(0);
  };

  return (
    <>
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <button onClick={startTimer} type="button">
          start
        </button>
        <button onClick={stopTimer} type="button">
          stop
        </button>
      </div>
    </>
  );
}

export default Timer;
