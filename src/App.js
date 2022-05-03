import React from 'react'
import styled from 'styled-components'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import Difficulty from './components/Difficulty'
import Choices from './components/Choices'
import ScoreBar from './components/ScoreBar'
import PrimaryButton from './components/PrimaryButton'
import Category from './components/Category'
import Title from './components/Title'
import useQuiz from './hooks/useQuiz'

export default App

function App () {
  const quiz = useQuiz()

  return (
    <SuperContainer>
      <Stack direction='v' height='100%' width='100%'>
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
                  <h3>{quiz.isCorrect
                    ? 'Correct!'
                    : 'Sorry!'}
                  </h3>
                </Center>
                {quiz.isLastQuestion
                  ? <PrimaryButton onClick={quiz.retry}>Retry</PrimaryButton>
                  : <PrimaryButton onClick={quiz.getNextQuestion}> Next Question
                  </PrimaryButton>}
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

const ScoreContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 15%;
`

const SuperContainer = styled(Center)`
background-color: ${props => props.bg};
padding: 12px;
border: 1px solid var(--teal);
border-radius: var(--radius);
color: #FFFFFF;
font-family: sans-serif;
width: 570px;
height: 770px;
padding: 30px;
@media (max-width: 600px) {
    padding: 20px;
    border: none;
    height: 99vh;
    min-height: 700px;
}
`

const QuizContainer = styled.div`
display: flex;
flex-direction: column;
height: 75%;
gap: 2rem;
`
