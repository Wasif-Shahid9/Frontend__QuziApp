import React, { useEffect, useState } from "react";

const Timer = ({
  timer,
  setTimer,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        moveToNextQuestion();
      }
    }, 1000);

    const moveToNextQuestion = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    };

    return () => clearInterval(timerInterval);
  }, [timer, setTimer, currentQuestionIndex, setCurrentQuestionIndex]);
  return (
    <>
      <h5 className="timer">
        Remaing Time : <span> {timer} </span>
      </h5>
      ;
    </>
  );
};

export default Timer;
