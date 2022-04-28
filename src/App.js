import React, { useState } from 'react'
import styled from 'styled-components'
import Center from './components/Center'
import Stack from './components/Stack'
import Box from './components/Box'
import ProgressBar from './components/ProgressBar'
import questions from './questions.json'
import Difficulty from './components/Difficulty'
import Choices from './components/Choices'
import ScoreBar from './components/ScoreBar'

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

const NewBox = styled.div`
  background-color: ${props => props.bg};
  padding: 12px;
  border: 1px solid #20c997;
  border-radius: 0.4rem;
  padding: 4rem;
  color: #FFFFFF;
  font-family: sans-serif;
  `
function App () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = decodeQuestion(questions[currentIndex])
  const progress = (100 / questions.length) * (currentIndex + 1)
  const category = currentQuestion.category
  const questionDescription = currentQuestion.question
  const score = answeredQuestions > 0 ? Math.floor(correctAnswers / answeredQuestions * 100) : 0
  const maxScore = 100 - Math.floor((answeredQuestions - correctAnswers) / questions.length * 100)
  let minScore = Math.floor(score - (questions.length - answeredQuestions) / questions.length * 100)
  minScore = minScore < 0 ? 0 : minScore

  function choose (choice) {
    setAnsweredQuestions(answeredQuestions + 1)
    setAnswer(choice)
    if (choice === currentQuestion.correct_answer) { increaseCorrectAnswers() }
  }

  return (
    <NewBox>
      <Stack direction='v' height="700px" width='500px'>
        <Box height='10%'>
          <ProgressBar value={progress} />
        </Box>
        <QuizContainer>
          <Box>
            <Title>{`Question ${currentIndex + 1} of ${questions.length}`}</Title>
            <div>{category}</div>
            <Difficulty value={currentQuestion.difficulty} />
          </Box>
          <Box height='9%'>{questionDescription}</Box>
          <Choices answer={answer} choose={choose} type={currentQuestion.type} incorrectAnswers={currentQuestion.incorrect_answers} correctAnswer={currentQuestion.correct_answer} />
          {answer &&
            <Center>
              <Stack direction='v'>
                <Center>
                  <h3>{answer === currentQuestion.correct_answer ? 'Correct!' : 'Sorry!'}</h3>
                </Center>
                {currentIndex === questions.length - 1
                  ? <button onClick={retry}>Retry</button>
                  : <button onClick={getNextQuestion}>Next Question</button>}
              </Stack>
            </Center>}
        </QuizContainer>
        <ScoreContainer>
          <ScoreBar minScore={minScore} score={score} maxScore={maxScore} />
        </ScoreContainer>
      </Stack>
    </NewBox>
  )

  function increaseCorrectAnswers () {
    setCorrectAnswers(correctAnswers + 1)
  }

  function getNextQuestion () {
    setAnswer(undefined)
    setCurrentIndex(currentIndex + 1)
  }

  function retry () {
    setAnswer(undefined)
    setCurrentIndex(0)
    setCorrectAnswers(0)
    setAnsweredQuestions(0)
  }

  function decodeQuestion (question) {
    const newQuestion = { ...question }
    newQuestion.category = decodeURIComponent(question.category)
    newQuestion.question = decodeURIComponent(question.question)
    newQuestion.correct_answer = decodeURIComponent(question.correct_answer)
    newQuestion.incorrect_answers = question.incorrect_answers.map(answer => decodeURIComponent(answer))
    return newQuestion
  }
}

export default App
