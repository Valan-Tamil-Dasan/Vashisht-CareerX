import React, { useState } from "react";
import './Quiz.css'

const Quiz = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswers , setCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  
  const quiz = props.ques;

  React.useEffect(() => {
    resetQuiz();
  }, [props.ques]);
  
  const resetQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setCorrectAnswers(0);
    setUserAnswers([]);
  };

  const { questions } = quiz;
  const { question, choices, type, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    const isCorrect = choices[selectedAnswerIndex] === correctAnswer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, choices[selectedAnswerIndex]]);
    setSelectedAnswer(isCorrect);
    setSelectedAnswerIndex(null);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);

      const score = (correctAnswers * 100) / questions.length;
      console.log(`Score: ${score}%`);

      props.onEnd(score); // pass the score to the parent component
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          {type == "MCQs" ? (
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
          ) : (
            <div className="rating-answer">
              {choices.map((answer,index) => (
                <div className="rating">
                  <div className="desc">{answer}</div>

                  <div  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-circle" : "circle"
                  }></div>
                </div>
              ))
                
              }
            </div>
          )}
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next" }
            </button>
          </div>
        </div>
      ) : (
        <div>{userAnswers}</div>
      )}
    </div>
  );
};

export default Quiz;
