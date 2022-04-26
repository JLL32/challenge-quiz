import React, { useState } from 'react'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import questions from './questions.json'
import Difficulty from './components/Difficulty'
import Choices from './components/Choices'

function App () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const currentQuestion = questions[currentIndex]
  const progress = (100 / questions.length) * (currentIndex + 1)
  const category = decodeURIComponent(currentQuestion.category)
  const questionDescription = decodeURIComponent(currentQuestion.question)

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
          <Choices answer={answer} setAnswer={setAnswer} type={currentQuestion.type} incorrectAnswers={currentQuestion.incorrect_answers} correctAnswer={decodeURIComponent(currentQuestion.correct_answer)} />
          {answer &&
            <Center>
              <Stack direction='v'>
                <Center>
                  <h3>{answer === currentQuestion.correct_answer ? 'Right!' : 'Sorry!'}</h3>
                </Center>
                <button onClick={getNextQuesion}>Next Question</button>
              </Stack>
            </Center>}
        </Box>
        <Box padding='10px' height='15%'>
          score bar
        </Box>
      </Stack>
    </Center>
  )

  function getNextQuesion () {
    setAnswer(undefined)
    setCurrentIndex(currentIndex + 1)
  }
}

export default App
