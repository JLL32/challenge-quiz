import React from 'react'
import styled from 'styled-components'
import useChoices from '../hooks/useChoices'
import ChoiceButton from './ChoiceButton'

const Choices = ({ answer, choose, correctAnswer, incorrectAnswers }) => {
  const { choices: [first, second, third, fourth], count } =
    useChoices(correctAnswer, incorrectAnswers)

  return (
    <ChoicesContainer>
      <BinaryContainer>
        <ChoiceButton
          choose={choose} answer={answer} choice={first}
          correctAnswer={correctAnswer}
        />
        <ChoiceButton
          choose={choose} answer={answer} choice={second}
          correctAnswer={correctAnswer}
        />
      </BinaryContainer>
      {(count === 4) &&
        <BinaryContainer>
          <ChoiceButton
            choose={choose} answer={answer} choice={third}
            correctAnswer={correctAnswer}
          />
          <ChoiceButton
            choose={choose} answer={answer} choice={fourth}
            correctAnswer={correctAnswer}
          />
        </BinaryContainer>}
    </ChoicesContainer>
  )
}

export default Choices

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
