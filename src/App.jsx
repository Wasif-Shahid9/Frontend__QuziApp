import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Timer from "./components/Timer";

function App() {
  const questionsArray = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Lahore", "Karachi", "Pindi", "Islamabad"],
      answer: "Islamabad",
    },
    {
      question: "What is the largest city of Pakistan?",
      options: ["Lahore", "Karachi", "Quetta", "Islamabad"],
      answer: "Karachi",
    },
    {
      question: "What is 1 + 1?",
      options: ["1", "2", "10", "3"],
      answer: "2",
    },
    {
      question: "What is 10 + 20?",
      options: ["1", "98", "30", "28"],
      answer: "30",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [start, setStart] = useState(false);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionsSelect = (option) => {
    if (option === questionsArray[currentQuestionIndex].answer) {
      setTotalAnswers(totalAnswers + 1);
    }
    nextQuestion();
  };

  const handleSkip = () => {
    nextQuestion();
  };

  const handleStart = () => {
    setStart(true);
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setTotalAnswers(0);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    } else {
      setShowResult(true);
    }
  };

  const isValidQuestionIndex = currentQuestionIndex < questionsArray.length;

  return (
    <>
      {start ? (
        <>
          {showResult ? (
            <Result
              setStart={setStart}
              start={start}
              totalAnswers={totalAnswers}
              setTotalAnswers={setTotalAnswers}
              questionsArray={questionsArray}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          ) : (
            <div className="questions">
              <h1> Total Questions: {questionsArray.length} </h1>
              <Timer
                timer={timer}
                setTimer={setTimer}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
              />
              <h1>{questionsArray[currentQuestionIndex].question}</h1>
              <div className="options">
                {questionsArray[currentQuestionIndex].options.map(
                  (option, i) => (
                    <button key={i} onClick={() => handleOptionsSelect(option)}>
                      {option}
                    </button>
                  )
                )}
                <button className="skip__btn" onClick={handleSkip}>
                  Skip
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="startBtn__container">
          <h1 className="quiz__head">QUIZ APP</h1>
          <button className="startBtn" onClick={handleStart}>
            Start
          </button>
        </div>
      )}
    </>
  );
}

export default App;
