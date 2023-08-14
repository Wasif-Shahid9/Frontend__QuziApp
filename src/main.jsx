import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { useEffect, useState } from "react";
// import "./App.css";
// import Result from "./components/Result";
// import Timer from "./components/Timer";

// function App() {
//   const questionsArray = [
//     {
//       question: "What is the capital of pakitan  ",
//       options: [" gujranwala", " karachi", "pindi", "islamabad"],
//       answer: "islamabad",
//     },
//     {
//       question: "What is the largest city  of  pakistan ",
//       options: ["gujranwala", "  karachi", "quetta", "islamabad"],
//       answer: "karachi",
//     },
//     {
//       question: "What is 1 + 1 ",
//       options: ["1", "2", " 10", " 3"],
//       answer: "2",
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timer, setTimer] = useState(5);
//   const [start, setStart] = useState(false);
//   const [totalAnswers, setTotalAnswers] = useState(0);

//   // questionsArray[currentQuestionIndex].options ===
//   //   questionsArray[currentQuestionIndex].answer

//   const handleOptionsSelect = (option, i) => {
//     console.log("option...", option);
//     console.log("Index...", i);
//     if (option === questionsArray[currentQuestionIndex].answer) {
//       setTotalAnswers(totalAnswers + 1);
//     }

//     // setCurrentQuestionIndex(currentQuestionIndex + 1);
//     // setTimer(5);
//     nextQuestion();
//   };

//   const handleSkip = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setTimer(5);
//   };
//   const handleStart = () => {
//     setStart(true);
//     setShowResult(false); // Reset to ensure questions are shown on restart
//     setCurrentQuestionIndex(0); // Reset to the first question
//     setTotalAnswers(0);
//   };

//   const nextQuestion = () => {
//     if (currentQuestionIndex < questionsArray.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setTimer(5);
//     }
//   };

//   // 0 == 1  0 == 0 - 1

//   const isValidQuestionIndex = currentQuestionIndex < questionsArray.length;
//   // console.log("inedx", isValidQuestionIndex);
//   return (
//     <>
//       {start ? (
//         <>
//           {isValidQuestionIndex ? (
//             <div className="questions">
//               <h1> Total Questions : {questionsArray.length} </h1>
//               <Timer
//                 timer={timer}
//                 setTimer={setTimer}
//                 currentQuestionIndex={currentQuestionIndex}
//                 setCurrentQuestionIndex={setCurrentQuestionIndex}
//               />
//               <h1>{questionsArray[currentQuestionIndex].question}</h1>
//               <div className="options">
//                 {questionsArray[currentQuestionIndex].options.map(
//                   (option, i) => (
//                     <button
//                       key={i}
//                       onClick={() => handleOptionsSelect(option, i)}
//                     >
//                       {option}
//                     </button>
//                   )
//                 )}
//                 <button className="skip__btn" onClick={handleSkip}>
//                   Skip
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Result
//               setStart={setStart}
//               start={start}
//               totalAnswers={totalAnswers}
//               setTotalAnswers={setTotalAnswers}
//               questionsArray={questionsArray}
//               setCurrentQuestionIndex={setCurrentQuestionIndex}
//             />
//           )}
//         </>
//       ) : (
//         <div className="startBtn__container">
//           <button className="startBtn" onClick={handleStart}>
//             Start
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
