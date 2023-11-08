import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownEnded, setCountdownEnded] = useState(false);

  useEffect(() => {
    const countdownDate = new Date().getTime() + 36 * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimer({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        // Countdown has ended
        setCountdownEnded(true);
      }
    };

    // Update the timer every second
    const intervalId = setInterval(updateTimer, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="app__timer">
      {countdownEnded ? (
        <h1>CountDown Closed!</h1>
      ) : (
        <>
          <div>
            <h1>{timer.days}</h1>
            <p>Days</p>
          </div>
          <span>:</span>
          <div>
            <h1>{formatTime(timer.hours)}</h1>
            <p>Hours</p>
          </div>
          <span>:</span>
          <div>
            <h1>{formatTime(timer.minutes)}</h1>
            <p>Minutes</p>
          </div>
          <span>:</span>
          <div>
            <h1>{formatTime(timer.seconds)}</h1>
            <p>Seconds</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
