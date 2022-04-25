import React, { useState } from 'react'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import questions from './questions.json'
import Difficulty from './components/Difficulty'

function App () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentQuestion = questions[currentIndex]
  const progress = (100 / 20) * (currentIndex + 1)

  return (
    <Center width='100vw' height='100vh'>
      <Stack direction='h' width='400px' height='600px'>
        <Box height='10%'>
          <ProgressBar value={progress} />
        </Box>
        <Box padding='10px' height='75%'>
          <h2>{`Question ${currentIndex + 1} of ${questions.length}`}</h2>
          <Difficulty value={currentQuestion.difficulty} />
          <button onClick={() => setCurrentIndex(currentIndex + 1)}>Next Question</button>
        </Box>
        <Box padding='10px' height='15%'>
          score bar
        </Box>
      </Stack>
    </Center>
  )
}

export default App
