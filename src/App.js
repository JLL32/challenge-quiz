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
          <Choices type={currentQuestion.type} incorrectAnswers={currentQuestion.incorrect_answers} correctAnswer={currentQuestion.correct_answer} />
          <Center>
            <Stack direction='v'>
              <Center>
                <h3>Sorry!</h3>
              </Center>
              <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next Question</button>
            </Stack>
          </Center>
        </Box>
        <Box padding='10px' height='15%'>
          score bar
        </Box>
      </Stack>
    </Center>
  )
}

export default App
