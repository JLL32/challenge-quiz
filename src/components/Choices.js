import React, { useState, useCallback, useMemo, Children } from 'react'
import styled from 'styled-components'
import Center from './Center'
import Stack from './Stack'

const Choices = ({ answer, setAnswer, type, correctAnswer, incorrectAnswers }) => {
  const choices = [correctAnswer, ...incorrectAnswers]
  // memoizing the array of choices to avoid re-ordering the
  // choices at each re-render of the same question
  const [first, second, third, fourth] = useMemo(() => shuffle(choices), [correctAnswer])

  return (
    <Stack direction='v' height='30%' width='100%'>
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

const ChoiceButton = ({ setAnswer, answer, choice, correctAnswer }) => {
  const selected = answer === choice
  const isCorrect = answer && choice === correctAnswer

  return (
    <Button key={choice} selected={selected} correct={isCorrect} disabled={answer} onClick={handleClick}>{choice}</Button>
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