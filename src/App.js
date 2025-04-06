import React, { useState } from 'react';
import './style.css';
import Questions from './components/Question';
export default function App() {
  const [quizStarted, setQuizStart] = useState(false);
  const handleQuizStarted = () => {
    setQuizStart(true);
  };
  if (quizStarted) return <Questions />;
  return (
    <div>
      <p>Welcome to the quiz</p>
      <button onClick={handleQuizStarted}>Start</button>
    </div>
  );
}
