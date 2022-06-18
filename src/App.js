import React, { useEffect, useState } from 'react';
import Questions from './components/Questions';
import MainPage from './components/MainPage';
import './App.css';
import {nanoid} from "nanoid";
import Question from './components/Question';

function App() {

  const [startQuiz, setStartQuiz] = useState(false);


  const [allQuestions, setAllQuestions] = useState([]);
  
  /// allQuestions {options: [{option: a, optionId: nanoid()}, {option: b, optionId: nanoid()}, {option: c, optionId: nanoid()}, {option: d, optionId: nanoid()}], answer: b, question: question}
  /// useEffect runs at the start of the page to set the question, answer and options 

  /*    
  
  [
    {options: [{option: a, optionId: nanoid(), isHeld: false}, {option: b, optionId: nanoid()}, {option: c, optionId: nanoid()}, {option: d, optionId: nanoid()}], answer: b, question: question},
    {options: [{option: a, optionId: nanoid()}, {option: b, optionId: nanoid()}, {option: c, optionId: nanoid()}, {option: d, optionId: nanoid()}], answer: b, question: question},
    {options: [{option: a, optionId: nanoid()}, {option: b, optionId: nanoid()}, {option: c, optionId: nanoid()}, {option: d, optionId: nanoid()}], answer: b, question: question}
  ]
  
  */

  useEffect(() => {
      async function getQuestions() {
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json()
        const seperateQuestions = []
      data.results.map((question) => {
        const options = [];
        options.push({option: question.correct_answer, optionId: nanoid(), isHeld: false})
        question.incorrect_answers.map(incorrectAnswer => options.push({option: incorrectAnswer, optionId: nanoid(), isHeld: false}))
        seperateQuestions.push({options: options, answer: question.correct_answer, question: question.question})
      })
      
      setAllQuestions(seperateQuestions)
      }
      getQuestions()
  }, [])

  const printOption = (o_id) => {
    console.log("printOption clicked")
    let updatedState = allQuestions;
    updatedState.forEach(question => {
      question.options.forEach(option => {
        if (option.optionId === o_id) {
          option.isHeld = !option.isHeld
        }
      })
    })
    setAllQuestions(updatedState)
  }

  console.log(allQuestions)

  return (
    <div className='main'>
      {startQuiz === false && (
        <MainPage startQuiz={() => setStartQuiz(true)}/>
      )}
      {startQuiz === true && (
        <Questions allQuestions={allQuestions} printOption={printOption}/>
      )}
    </div>
  );
}

export default App;
