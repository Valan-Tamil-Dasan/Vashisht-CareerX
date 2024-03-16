import React, { useState } from "react";
import Quiz from "../Quiz/Quiz";

const QuizContainer = ({ quizzes }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]);

  const handleQuizEnd = (score) => {
    setQuizResults((prevResults) => [...prevResults, score]);

    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      console.log("All quizzes completed!");
    }
  };

  return (
    <div>
      {currentQuizIndex < quizzes.length ? (
        <Quiz ques={quizzes[currentQuizIndex]} onEnd={handleQuizEnd} />
      ) : (
        <div>
          All quizzes have been completed! Here are your scores:
          {quizResults.map((result, index) => (
            <div key={index}>Quiz {index + 1}: {result}%</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
