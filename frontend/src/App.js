import React from "react";
import QuizContainer from "./Components/QuizContainer/QuizContainer";
import { engineeringQB } from "./Components/Quiz/question";
import { doctorQB } from "./Components/Quiz/question";
import { accQB } from "./Components/Quiz/question";
import { exampleQB } from "./Components/Quiz/question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element = {<LandingPage />} />
          <Route path="/doctor" element = {<QuizContainer quizzes={exampleQB}  model= 'doctor' />} />
          <Route path="/engineer" element = {<QuizContainer quizzes={exampleQB} model = 'engineer' />} />
          <Route path="/ca" element = {<QuizContainer quizzes={exampleQB} model = 'accountant' />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
