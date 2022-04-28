import React, { useState, useCallback, useMemo, Children } from 'react'
import styled from 'styled-components'
import Center from './Center'
import Stack from './Stack'

const Choices = ({ answer, choose, correctAnswer, incorrectAnswers }) => {
  const choices = [correctAnswer, ...incorrectAnswers]
  // memoizing the array of choices to avoid re-ordering the
  // choices at each re-render of the same question
  const [first, second, third, fourth] = useMemo(() => shuffle(choices), [correctAnswer])

  return (
    <ChoicesContainer>
      <BinaryContainer>
        <ChoiceButton choose={choose} answer={answer} choice={first} correctAnswer={correctAnswer} />
        <ChoiceButton choose={choose} answer={answer} choice={second} correctAnswer={correctAnswer} />
      </BinaryContainer>
      {(choices.length === 4) &&
        <BinaryContainer>
          <ChoiceButton choose={choose} answer={answer} choice={third} correctAnswer={correctAnswer} />
          <ChoiceButton choose={choose} answer={answer} choice={fourth} correctAnswer={correctAnswer} />
        </BinaryContainer>}
    </ChoicesContainer>
  )

  function shuffle (array) {
    let currentIndex = array.length; let randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
    // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }

    return array
  }
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
background-color: palegoldenrod;
border: 1px solid ${props => props.selected ? '#00ff00' : '#ccc'};
background-color: ${props => props.correct ? 'green' : ''};
flex: 1;
`

const ChoicesContainer = styled.div`
background-color: aliceblue;
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
