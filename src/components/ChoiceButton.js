import React from 'react'
import styled from 'styled-components'

export default ChoiceButton

function ChoiceButton({ choose, answer, choice, correctAnswer }) {
  const selected = answer === choice
  const isCorrect = answer && choice === correctAnswer

  return (
    <Button
      key={choice} selected={selected} correct={isCorrect} disabled={answer}
      onClick={handleClick}
    >{choice}
    </Button>
  )
  function handleClick () {
    choose(choice)
  }
}

const Button = styled.button`
width: 100%;
background-color: white;
padding: 8px;
border: none;
background-color: ${props => props.correct ? 'var(--teal)' : ''};
background-color: ${props => props.selected && !props.correct ? '#BF3D44' : ''};
color: ${props => (props.correct || props.selected) && 'white'};
flex: 1;
cursor: pointer;
border-radius: var(--radius);
`
