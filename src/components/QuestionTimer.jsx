import React, { useState, useEffect } from 'react';

const QuestionTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);
  console.log('YES');
  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive || timeLeft <= 0) {
      setIsActive(false);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const getMinutes = (seconds) => {
    let minutes = Math.trunc(seconds / 60);
    let secondsLeft = seconds % 60;
    return `${minutes}m:${secondsLeft}s`;
  };
  return (
    <>
      <span>Timer:{timeLeft}</span>
      <p>{getMinutes(timeLeft)}</p>
    </>
  );
};

export default QuestionTimer;
