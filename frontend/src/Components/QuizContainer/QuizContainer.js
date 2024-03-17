import React, { useState } from "react";
import Quiz from "../Quiz/Quiz";
import axios from 'axios'

const QuizContainer = ({ quizzes }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]);
  const [showres, setShowres] = useState(true);

  const [inputFeatures, setInputFeatures] = useState([]);
  const [prediction, setPrediction] = useState("");

  const handleQuizEnd = (correctAnswers, totalQuestions) => {
    const score = (correctAnswers * 100) / totalQuestions;
    setQuizResults((prevResults) => [...prevResults, score]);

    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowres(false);
    }
  };

  const getPrediction = async () => {
    const response = await axios.post("http://localhost:5000/predict", {
      input_features: quizResults,
    });
    setPrediction(response.data.prediction_label);
  };

  return (
    <div>
      {showres ? (
        <Quiz ques={quizzes[currentQuizIndex]} onEnd={handleQuizEnd} />
      ) : (
        <div>
          <button onClick={getPrediction}>Predict</button>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
