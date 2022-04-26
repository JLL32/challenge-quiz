import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Center from './Center'
import Stack from './Stack'

const Choices = ({ answer, setAnswer, type, correctAnswer, incorrectAnswers }) => {
  // TODO: shuffle it
  const [first, second, third, fourth] = [correctAnswer, ...incorrectAnswers]

  return (
    <Stack direction='v' height='30%' width='100%' disabled>
      <Center margin='0 0 10px 0'>
        <Stack direction='h'>
          <ChoiceButton setAnswer={setAnswer} answer={answer} choice={first} correctAnswer={correctAnswer} />
          <ChoiceButton setAnswer={setAnswer} answer={answer} choice={second} correctAnswer={correctAnswer} />
        </Stack>
      </Center>
      {type === 'multiple' &&
        <Center>
          <Stack direction='h'>
            <ChoiceButton setAnswer={setAnswer} answer={answer} choice={third} correctAnswer={correctAnswer} />
            <ChoiceButton setAnswer={setAnswer} answer={answer} choice={fourth} correctAnswer={correctAnswer} />
          </Stack>
        </Center>}
    </Stack>
  )
}

export default Choices

const ChoiceButton = ({ setAnswer, answer, choice, correctAnswer }) => {
  const selected = answer === choice
  const isCorrect = answer && choice === correctAnswer

  return (
    <Button selected={selected} correct={isCorrect} disabled={answer} onClick={handleClick}>{choice}</Button>
  )
  function handleClick () {
    setAnswer(choice)
  }
}

const Button = styled.button`
width: 200px;
margin: 0 5px;
background-color: palegoldenrod;
border: 1px solid ${props => props.selected ? '#00ff00' : '#ccc'};
background-color: ${props => props.correct ? 'green' : ''};
`
