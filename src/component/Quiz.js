import React, { useState } from "react";
import Rating from "./Rating";
import "./Quiz.css";

const Quiz = ({ data, setActiveStep, activeStep }) => {
  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const quizQuestion = data.slice(index, index + 1).map((question, index) => {
    return (
      <div key={index}>
        <div>
          <h2 className="question">{question.question}</h2>
        </div>
        <div>
          {question.answer.map((ans, index) => {
            return (
              <button
                className="button"
                key={index}
                onClick={() => handleClick(ans, question.correct_answer)}
              >
                {ans}
              </button>
            );
          })}
        </div>
      </div>
    );
  });
  const handleIndexChange = () => {
    setIndex(index + 1);
    setIsWrong(false);
    setIsCorrect(false);
    setActiveStep(activeStep + 1);
  };
  const handleClick = (ans, correct) => {
    if (ans === correct) {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <div className="rating">
        <h1>
          Question {index + 1} of {data.length}
        </h1>
        <p>{data[index].category}</p>
        <Rating index={index} data={data} />
      </div>
      {quizQuestion}
      <div className="next">
        {isCorrect || isWrong ? (
          <div>
            <h1>{isCorrect ? "Correct !" : ""}</h1>
            <h1>{isWrong ? "Sorry !" : ""}</h1>
            <button onClick={handleIndexChange} disabled={index === 19}>
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Quiz;
