import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Center from './Center'
import Stack from './Stack'

const Choices = ({ type, correctAnswer, incorrectAnswers }) => {
  const [chosen, setChosen] = useState(false)
  const invertChosen = useCallback(() => setChosen(!chosen), [chosen])
  const answers = [correctAnswer, ...incorrectAnswers].map(answer => decodeURIComponent(answer))

  return (
    <Stack direction='v' height='30%' width='100%' disabled>
      <Center margin='0 0 10px 0'>
        <Stack direction='h'>
          <Button disabled={chosen} onClick={invertChosen}>{answers[0]}</Button>
          <Button disabled={chosen} onClick={invertChosen}>{answers[1]}</Button>
        </Stack>
      </Center>
      {type === 'multiple' &&
        <Center>
          <Stack direction='h'>
            <Button disabled={chosen} onClick={invertChosen}>{answers[2]}</Button>
            <Button disabled={chosen} onClick={invertChosen}>{answers[3]}</Button>
          </Stack>
        </Center>}
    </Stack>
  )
}

export default Choices

const Button = styled.button`
width: 200px;
margin: 0 5px;
`
