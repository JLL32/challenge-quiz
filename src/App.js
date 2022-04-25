import React from 'react'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'

function App () {
  return (
    <Center width='100vw' height='100vh'>
      <Stack direction='h' width='400px' height='600px'>
        <Box height='10%'>
          <ProgressBar value={25} />
        </Box>
        <Box padding='10px' height='75%'>
          quiz body
        </Box>
        <Box padding='10px' height='15%'>
          score bar
        </Box>
      </Stack>
    </Center>
  )
}

export default App
