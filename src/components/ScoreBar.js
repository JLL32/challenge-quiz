import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import Box from './Box'

const ScoreBar = ({ score, minScore, maxScore }) => {
  return (
    <Stack direction='v'>
      <Stack direction='h' height='100%' justify='space-between' />
      <Box className='progress'>
        <Bar className='progress-bar' role='progressbar' value={minScore} aria-valuenow={minScore} aria-valuemin='0' aria-valuemax='100' />
      </Box>
      <Box className='progress'>
        <Bar className='progress-bar bg-success' role='progressbar' value={score} aria-valuenow={score} aria-valuemin='0' aria-valuemax='100' />
      </Box>
      <Box className='progress'>
        <Bar className='progress-bar bg-info' role='progressbar' value={maxScore} aria-valuenow={maxScore} aria-valuemin='0' aria-valuemax='100' />
      </Box>
    </Stack>
  )
}

const Bar = styled.div`
  width: ${props => props.value}%;
`
export default ScoreBar
