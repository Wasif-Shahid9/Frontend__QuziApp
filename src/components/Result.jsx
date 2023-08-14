import React, { useEffect, useState } from "react";

const Result = ({
  setStart,
  totalAnswers,
  questionsArray,
  setTotalAnswers,
  setCurrentQuestionIndex,
}) => {
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setTotalAnswers(0);
    setStart(false);
  };

  return (
    <>
      <div className="result">
        <h1 className="result__heading">Result</h1>
        <h1 className="result__answer">
          {" "}
          Correct Answers: {totalAnswers} out of {questionsArray.length}
        </h1>
        <div className="">
          <button className="startBtn" onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
