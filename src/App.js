import React, { useState } from 'react';
import './App.css';
import data from './Data.js';
function App() {

  // Index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  function handleOptionClick(isCorrect) {
    if(isCorrect) {
      setScore(value => value+1);
    }
    if (currentIndex == data.length - 1) {
      setIsCompleted(true)
    } else {
      setCurrentIndex(value => value + 1)
    }
  }
  return (
    <>
      {(!isCompleted) ?
        <main>
          <div className="container">
            <div className="question">
              <h2>Question {currentIndex + 1}<small>/{data.length}</small></h2>
              <h3>{data[currentIndex].question}</h3>
            </div>
            <div className="options">
              {data[currentIndex].options.map(option => <button onClick={() => handleOptionClick(option.isCorrect)}>{option.optionText}</button>)}
            </div>
          </div>
        </main> :
        <main>
          <div className="container">
            <p>You Scored <span>{score}</span> Out Of <span>{data.length}</span></p>
          </div>
        </main>}
    </>
  );
}

export default App;
