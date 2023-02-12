import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        handleClick();
      }, 1000);
    }
  }, [seconds]);

  function handleChange(event) {
    const setTime = String(event.target.value);
    const userSetHours = setTime.slice(0, 2);
    const userSetMinutes = setTime.slice(3, 5);
    const userSetSeconds = setTime.slice(6, 8);
    setHours(Number(userSetHours));
    setMinutes(Number(userSetMinutes));
    setSeconds(Number(userSetSeconds));
  }

  function handleClick() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setStarted(false);
      return;
    }
    if (seconds === 0) {
      setSeconds(60);
      if (minutes === 0) {
        setMinutes(60);
        setHours((prev) => {
          return prev - 1;
        });
      }
      setMinutes((prev) => prev - 1);
    }
    setStarted(true);
    setSeconds((prev) => {
      return prev - 1;
    });
  }

  function handleReset() {
    console.log(window.location);
    window.location.reload();
  }

  return (
    <Fragment>
      <Navbar />
      <div className="timer">
        <span>
          {hours < 10 && "0"}
          {hours}:
        </span>
        <span>
          {minutes < 10 && "0"}
          {minutes}:
        </span>
        <span>
          {seconds < 10 && "0"}
          {seconds}
        </span>
      </div>
      <div className="set-timer">
        <input
          type="time"
          step="1"
          onChange={handleChange}
          disabled={!started ? false : true}
        />
        <div className="buttons">
          <button
            style={{
              backgroundColor: started && "rgb(47, 47, 47)",
              color: started && "black",
              cursor: started && "not-allowed"
            }}
            onClick={handleClick}
            disabled={started ? true : false}
          >
            Start
          </button>
          <button
            style={{
              backgroundColor: !started && "rgb(47, 47, 47)",
              color: !started && "black",
              cursor: !started && "not-allowed"
            }}
            disabled={started ? false : true}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

