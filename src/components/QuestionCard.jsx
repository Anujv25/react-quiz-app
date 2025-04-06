import React, { useState } from 'react';

const QuestionCard = ({
  questionData,
  score,
  updateScore,
  questionIndex,
  nextQuestion,
}) => {
  const [selectedOption, setSelected] = useState('');
  
  const { question, options, correctAnswer } = questionData[questionIndex];

  const handleOptionClick = (id) => {
    setSelected(id);
    if (correctAnswer.includes(id)) {
      updateScore(score + 1);
      nextQuestion(questionIndex + 1);
    }
  };

  const getButtonColor = (id) => {
    if (!selectedOption) return '';

    if (selectedOption && correctAnswer.includes(id)) {
      console.log('YEs');
      return 'green';
    } else {
      return 'red';
    }
  };
  return (
    <>
      <div>
        <p>{question}</p>
      </div>
      <div>
        {options.map((option) => (
          <button
            style={{
              backgroundColor: `${getButtonColor(option.id)}`,
            }}
            key={option.id}
            onClick={(e) => handleOptionClick(option.id)}
          >
            {option?.optionLabel}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionCard;
