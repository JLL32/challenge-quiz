import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const ProgressBar = ({ value }) => {
  return (
    <BarContainer>
      <Bar value={value} />
      <BorderBar />
    </BarContainer>
  )
}

export default ProgressBar

const BarContainer = styled.div`
width: 100%;
display: grid;
justify-items: start;
align-items: start;
`
const Bar = styled.div`
height: 20px;
grid-column-start: 1;
grid-row-start: 1;
width: ${props => props.value}%;
background-color: var(--teal);
border-radius: var(--radius) 0 0 var(--radius);
width: ${props => props.value}%;
border-radius: ${props => props.value === 100 ? 'var(--radius)' : ''};
`
const BorderBar = styled(Bar)`
background-color: transparent;
border: 1px solid var(--teal);
border-radius: var(--radius);
width: 100%;
`
