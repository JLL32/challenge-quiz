import React, { useState } from 'react'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import questions from './questions.json'
import Difficulty from './components/Difficulty'
import Choices from './components/Choices'
import ScoreBar from './components/ScoreBar'

function App () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = decodeQuestion(questions[currentIndex])
  const progress = (100 / questions.length) * (currentIndex + 1)
  const category = currentQuestion.category
  const questionDescription = currentQuestion.question
  const score = answeredQuestions > 0 ? correctAnswers / answeredQuestions * 100 : 0
  const maxScore = score + Math.floor((questions.length - answeredQuestions) / questions.length * 100)
  const minScore = score - Math.floor((questions.length - answeredQuestions) / questions.length * 100)
  console.log('min score:', minScore)
  console.log('score:', score)
  console.log('max score:', maxScore)

  function choose (choice) {
    setAnsweredQuestions(answeredQuestions + 1)
    setAnswer(choice)
    if (choice === currentQuestion.correct_answer) { increaseCorrectAnswers() }
  }

  return (
    <Center width='100vw' height='100vh'>
      <Stack direction='v' width='400px' height='600px'>
        <Box height='10%'>
          <ProgressBar value={progress} />
        </Box>
        <Box padding='10px' height='75%'>
          <h2>{`Question ${currentIndex + 1} of ${questions.length}`}</h2>
          <p>{category}</p>
          <Difficulty value={currentQuestion.difficulty} />
          <Box height='20%'>
            <p>{questionDescription}</p>
          </Box>
          <Choices answer={answer} choose={choose} type={currentQuestion.type} incorrectAnswers={currentQuestion.incorrect_answers} correctAnswer={currentQuestion.correct_answer} />
          {answer &&
            <Center>
              <Stack direction='v'>
                <Center>
                  <h3>{answer === currentQuestion.correct_answer ? 'Correct!' : 'Sorry!'}</h3>
                </Center>
                {currentIndex === questions.length - 1
                  ? <button onClick={retry}>Retry</button>
                  : <button onClick={getNextQuestion}>Next Question</button>}
              </Stack>
            </Center>}
        </Box>
        <Box padding='10px' height='15%'>
          <ScoreBar minScore={minScore} score={score} maxScore={maxScore} />
        </Box>
      </Stack>
    </Center>
  )

  function increaseCorrectAnswers () {
    setCorrectAnswers(correctAnswers + 1)
  }

  function getNextQuestion () {
    setAnswer(undefined)
    setCurrentIndex(currentIndex + 1)
  }

  function retry () {
    setAnswer(undefined)
    setCurrentIndex(0)
    setCorrectAnswers(0)
    setAnsweredQuestions(0)
  }

  function decodeQuestion (question) {
    const newQuestion = { ...question }
    newQuestion.category = decodeURIComponent(question.category)
    newQuestion.question = decodeURIComponent(question.question)
    newQuestion.correct_answer = decodeURIComponent(question.correct_answer)
    newQuestion.incorrect_answers = question.incorrect_answers.map(answer => decodeURIComponent(answer))
    return newQuestion
  }
}

export default App
