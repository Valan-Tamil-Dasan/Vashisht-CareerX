import React from "react";
import QuizContainer from "./Components/QuizContainer/QuizContainer";
import { doctorQB } from "./Components/Quiz/question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element = {<LandingPage />} />
          <Route path="/Doctor" element = {<QuizContainer quizzes={doctorQB} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
