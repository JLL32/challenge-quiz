import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import Box from './Box'

const ScoreBar = ({ score, minScore, maxScore }) => {
  return (
    <Box>
      <TextContainer>
        <Box>
          Score: {score}%
        </Box>
        <Box>
          Max Score: {maxScore}%
        </Box>
      </TextContainer>
      <Parent>
        {/* <Bar3 value={maxScore} />
        <Bar2 value={score} />
        <Bar1 value={minScore} />
        <Bar4 /> */}
        <Bar1 value={maxScore}></Bar1>
        <Bar2 value={score}></Bar2>
        <Bar3 value={minScore}></Bar3>
        <Bar4></Bar4>
      </Parent>
    </Box>
  )
}

// const Bar = styled.div`
//   width: ${props => props.value}%;
// `

const Parent = styled.div`
width: 100%;
height: 100%;
border-radius: 8px;
display: grid;
justify-items: start;
align-items: start;
`

const Bar = styled.div`
height: 30px;
grid-column-start: 1;
grid-row-start: 1;
border-radius: 8px 0 0 8px;
width: ${props => props.value}%;
border-radius: ${props => props.value === 100 ? '8px' : ''};
`

const Bar1 = styled(Bar)`
background-color: green;
`

const Bar2 = styled(Bar)`
background-color: blue;
`

const Bar3 = styled(Bar)`
background-color: grey;
`

const Bar4 = styled(Bar)`
background-color: transparent;
border: 1px solid black;
border-radius: 8px;
width: 100%;
`

const TextContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export default ScoreBar
