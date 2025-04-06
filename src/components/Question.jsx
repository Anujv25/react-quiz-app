import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import QuestionTimer from './QuestionTimer';

import questions from './data';

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const incrementQuestionIndex = () => {
    setQuestionIndex(questionIndex + 1);
  };
  return (
    <>
      <p>Score {score / questions.length}</p>
      <QuestionTimer nextQuestion={incrementQuestionIndex}  questionIndex={questionIndex}/>
      <QuestionCard
        questionData={questions}
        updateScore={setScore}
        score={score}
        nextQuestion={setQuestionIndex}
        questionIndex={questionIndex}
        
      />
    </>
  );
};

export default Question;
