import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import QuestionTimer from './QuestionTimer';

import questions from './data';

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <>
      <p>Score {score / questions.length}</p>
      <QuestionTimer />
      <QuestionCard
        questionData={questions[questionIndex]}
        updateScore={setScore}
        score={score}
        nextQuestion={setQuestionIndex}
        questionIndex={questionIndex}
      />
    </>
  );
};

export default Question;
