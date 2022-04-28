import React from 'react'
import styled from 'styled-components'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import Difficulty from './components/Difficulty'
import Choices from './components/Choices'
import ScoreBar from './components/ScoreBar'
import useQuiz from './hooks/useQuiz'

const QuizContainer = styled.div`
display: flex;
flex-direction: column;
height: 75%;
gap: 2rem;
`

const Title = styled.h2`
padding : 0px;
margin: 0px;
`

const ScoreContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 15%;
`

const SuperContainer = styled.div`
background-color: ${props => props.bg};
padding: 12px;
border: 1px solid var(--teal);
border-radius: var(--radius);
padding: 4rem;
color: #FFFFFF;
font-family: sans-serif;
`

const Category = styled.div`
color: var(--detail);
font-size: .9em;
`

const Button = styled.button`
background-color: var(--teal);
color: #FFFFFF;
border-radius: var(--radius);
padding: 8px;
border: none;
cursor: pointer;
width: 200px;
`

function App () {
  const quiz = useQuiz()

  return (
    <SuperContainer>
      <Stack direction='v' height='700px' width='500px'>
        <Box height='10%'>
          <ProgressBar value={quiz.progress} />
        </Box>
        <QuizContainer>
          <Box>
            <Title>{quiz.currentQuestion.title}</Title>
            <Category>{quiz.currentQuestion.category}</Category>
            <Difficulty value={quiz.currentQuestion.difficulty} />
          </Box>
          <Box height='9%'>{quiz.currentQuestion.question}</Box>
          <Choices
            answer={quiz.answer} choose={quiz.choose}
            incorrectAnswers={quiz.currentQuestion.incorrect_answers}
            correctAnswer={quiz.currentQuestion.correct_answer}
          />
          {quiz.answer &&
            <Center>
              <Stack direction='v'>
                <Center padding='0 0 30px 0'>
                  <h3>{quiz.answer === quiz.currentQuestion.correct_answer
                    ? 'Correct!'
                    : 'Sorry!'}
                  </h3>
                </Center>
                {quiz.currentIndex === quiz.count - 1
                  ? <Button onClick={quiz.retry}>Retry</Button>
                  : <Button onClick={quiz.getNextQuestion}> Next Question
                  </Button>}
              </Stack>
            </Center>}
        </QuizContainer>
        <ScoreContainer>
          <ScoreBar
            minScore={quiz.minScore}
            score={quiz.score}
            maxScore={quiz.maxScore}
          />
        </ScoreContainer>
      </Stack>
    </SuperContainer>
  )
}

export default App
