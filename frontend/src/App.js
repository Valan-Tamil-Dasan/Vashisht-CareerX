import React from 'react'
import QuizContainer from './Components/QuizContainer/QuizContainer'

const ques = [{questions : [
  {
    question: "Which of the following is the most accurate analogy to ‘A dog is to a puppy as a cat is to’:",
    choices: ["A kitten", "A mouse", "A lion", "A cheetah", "None of the above."],
    type: "scale",
    correctAnswer: "A kitten"
  },
  {
    question: "Which of the following is the most logical definition of the word mammal?",
    choices: ["A warm-blooded animal that gives birth to live young.", "A cold-blooded animal that lays eggs.", "An animal that has fur or hair.", "An animal that has four legs.", "None of the above."],
    type: "MCQs",
    correctAnswer: "A warm-blooded animal that gives birth to live young."
  },
  {
    question: "Various terms of an alphabet series are given with one or more terms missing. Select the missing terms from the choices. AZ, GT, MN, ?, YB.",
    choices: ["KF", "RX", "SH", "TS"],
    type: "MCQs",
    correctAnswer: "SH"
  },
  {
    question: "Poles: Magnet::? : Battery",
    choices: ["Energy", "Power", "Terminals", "Cells"],
    type: "MCQs",
    correctAnswer: "Terminals"
  },
  {
    question: "Kamal pointed to a photograph and says. 'The lady in the photograph is my nephew's maternal grandmother.' How is the lady in the picture related to Kamal's sister if he has no sister of his own?",
    choices: ["Mother-in-law", "Cousin", "Sister-in-law", "Mother", "Aunt"],
    type: "MCQs",
    correctAnswer: "Mother"
  },
  {
    question: "An accurate clock shows 8 am. Through how many degrees will the hour hand rotate when the clock shows 2 pm?",
    choices: ["154°", "172", "130°", "160°", "180°"],
    type: "MCQs",
    correctAnswer: "180°"
  }
]} , {questions : [
  {
    question: "Which of the following is the most accurate analogy to ‘A dog is to a puppy as a cat is to’:",
    choices: ["A kitten", "A mouse", "A lion", "A cheetah", "None of the above."],
    type: "MCQs",
    correctAnswer: "A kitten"
  },
  {
    question: "Which of the following is the most logical definition of the word mammal?",
    choices: ["A warm-blooded animal that gives birth to live young.", "A cold-blooded animal that lays eggs.", "An animal that has fur or hair.", "An animal that has four legs.", "None of the above."],
    type: "MCQs",
    correctAnswer: "A warm-blooded animal that gives birth to live young."
  },
  {
    question: "Various terms of an alphabet series are given with one or more terms missing. Select the missing terms from the choices. AZ, GT, MN, ?, YB.",
    choices: ["KF", "RX", "SH", "TS"],
    type: "MCQs",
    correctAnswer: "SH"
  },
  {
    question: "Poles: Magnet::? : Battery",
    choices: ["Energy", "Power", "Terminals", "Cells"],
    type: "MCQs",
    correctAnswer: "Terminals"
  },
  {
    question: "Kamal pointed to a photograph and says. 'The lady in the photograph is my nephew's maternal grandmother.' How is the lady in the picture related to Kamal's sister if he has no sister of his own?",
    choices: ["Mother-in-law", "Cousin", "Sister-in-law", "Mother", "Aunt"],
    type: "MCQs",
    correctAnswer: "Mother"
  },
  {
    question: "An accurate clock shows 8 am. Through how many degrees will the hour hand rotate when the clock shows 2 pm?",
    choices: ["154°", "172", "130°", "160°", "180°"],
    type: "MCQs",
    correctAnswer: "180°"
  }
]},{questions : [
  {
    question: "Which of the following is the most accurate analogy to ‘A dog is to a puppy as a cat is to’:",
    choices: ["A kitten", "A mouse", "A lion", "A cheetah", "None of the above."],
    type: "MCQs",
    correctAnswer: "A kitten"
  },
  {
    question: "Which of the following is the most logical definition of the word mammal?",
    choices: ["A warm-blooded animal that gives birth to live young.", "A cold-blooded animal that lays eggs.", "An animal that has fur or hair.", "An animal that has four legs.", "None of the above."],
    type: "MCQs",
    correctAnswer: "A warm-blooded animal that gives birth to live young."
  },
  {
    question: "Various terms of an alphabet series are given with one or more terms missing. Select the missing terms from the choices. AZ, GT, MN, ?, YB.",
    choices: ["KF", "RX", "SH", "TS"],
    type: "MCQs",
    correctAnswer: "SH"
  },
  {
    question: "Poles: Magnet::? : Battery",
    choices: ["Energy", "Power", "Terminals", "Cells"],
    type: "MCQs",
    correctAnswer: "Terminals"
  },
  {
    question: "Kamal pointed to a photograph and says. 'The lady in the photograph is my nephew's maternal grandmother.' How is the lady in the picture related to Kamal's sister if he has no sister of his own?",
    choices: ["Mother-in-law", "Cousin", "Sister-in-law", "Mother", "Aunt"],
    type: "MCQs",
    correctAnswer: "Mother"
  },
  {
    question: "An accurate clock shows 8 am. Through how many degrees will the hour hand rotate when the clock shows 2 pm?",
    choices: ["154°", "172", "130°", "160°", "180°"],
    type: "MCQs",
    correctAnswer: "180°"
  }
]}]

const App = () => {
  return (
    <div>

      <QuizContainer quizzes = {ques}/>

    </div>
  )
}

export default App