import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const ScoreBar = ({ score, minScore, maxScore }) => {
  return (
    <Box>
      <TextContainer>
        <Box>
          Score: <Highlight>{score}%</Highlight>
        </Box>
        <Box>
          Max Score: <Highlight>{maxScore}%</Highlight>
        </Box>
      </TextContainer>
      <Parent>
        <Bar1 value={maxScore} />
        <Bar2 value={score} />
        <Bar3 value={minScore} />
        <Bar4 />
      </Parent>
    </Box>
  )
}

export default ScoreBar

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
background-color: #77F2E4;
`

const Bar2 = styled(Bar)`
background-color: #60C4B8;
`

const Bar3 = styled(Bar)`
background-color: #38736C;
`

const Bar4 = styled(Bar)`
background-color: transparent;
border: 1px solid var(--teal);
border-radius: var(--radius);
width: 100%;
`

const TextContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Highlight = styled.span`
color: var(--teal);
`
