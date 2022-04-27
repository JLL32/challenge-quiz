import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import Box from './Box'

const ScoreBar = ({ score, minScore, maxScore }) => {
  return (
    <Box width="100%" height="100%">
    <TextContainer>
      <Box>
        Score: {score}%
      </Box>
      <Box>
        Max Score: {maxScore}%
      </Box>
    </TextContainer>
    <Parent>
    <Bar3 value={maxScore}></Bar3>
    <Bar2 value={score}></Bar2>
    <Bar1 value={minScore}></Bar1>
    <Bar4></Bar4>
    </ Parent>
    </Box>
  )
}

// const Bar = styled.div`
//   width: ${props => props.value}%;
// `

const Parent = styled.div`
width: 100%;
height: 100%;
position: relative;
border-radius: 8px;
`

const Bar1 = styled(Box)`
background-color: gray;
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 50px;
border-radius: 8px 0 0 8px;
height: 35%;
width: ${props => props.value}%;
border-radius: ${props => props.value === 100 ? '8px': ''};
`
const Bar2 = styled(Bar1)`
background-color: aliceblue;
width: ${props => props.value}%;
`

const Bar3 = styled(Bar1)`
background-color: moccasin;
width: ${props => props.value}%;
`

const Bar4 = styled(Bar1)`
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
