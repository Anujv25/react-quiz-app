import React, { useState, useEffect } from 'react';
import questions from './data';
const QuestionTimer = ({ nextQuestion, questionIndex }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isActive, timeLeft, nextQuestion]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(10);
    setIsActive(true);
  }, [questionIndex]);


  // Change question when timer is up
  useEffect(() => {
    if (timeLeft === 0 && questionIndex < questions.length - 1) {
      setIsActive(false);
      nextQuestion();
    }
  }, [timeLeft]);

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
