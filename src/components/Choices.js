import React from 'react'
import styled from 'styled-components'
import useChoices from '../hooks/useChoices'

const Choices = ({ answer, choose, correctAnswer, incorrectAnswers }) => {
  const { choices: [first, second, third, fourth], count } =
    useChoices(correctAnswer, incorrectAnswers)

  return (
    <ChoicesContainer>
      <BinaryContainer>
        <ChoiceButton choose={choose} answer={answer} choice={first} correctAnswer={correctAnswer} />
        <ChoiceButton choose={choose} answer={answer} choice={second} correctAnswer={correctAnswer} />
      </BinaryContainer>
      {(count === 4) &&
        <BinaryContainer>
          <ChoiceButton choose={choose} answer={answer} choice={third} correctAnswer={correctAnswer} />
          <ChoiceButton choose={choose} answer={answer} choice={fourth} correctAnswer={correctAnswer} />
        </BinaryContainer>}
    </ChoicesContainer>
  )
}

export default Choices

const ChoiceButton = ({ choose, answer, choice, correctAnswer }) => {
  const selected = answer === choice
  const isCorrect = answer && choice === correctAnswer

  return (
    <Button key={choice} selected={selected} correct={isCorrect} disabled={answer} onClick={handleClick}>{choice}</Button>
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

const ChoicesContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
`

const BinaryContainer = styled.div`
display: flex;
gap: 1rem;
align-items: flex-start;
@media (max-width: 500px) {
    flex-direction: column;
}
`
