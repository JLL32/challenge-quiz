import { useState } from 'react'
import questions from '../questions.json'

function useQuiz () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState(undefined)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)

  const currentQuestion = decodeQuestion(questions[currentIndex])
  currentQuestion.title = `Question ${currentIndex + 1} of ${questions.length}`

  const progress = (100 / questions.length) * (currentIndex + 1)
  const score = answeredQuestions > 0
    ? Math.floor(correctAnswers / answeredQuestions * 100)
    : 0
  const maxScore = 100 - Math.floor(
    (answeredQuestions - correctAnswers) / questions.length * 100)
  const minScore = Math.floor(
    maxScore - (questions.length - answeredQuestions) /
      questions.length * 100)
  const count = questions.length

  return {
    currentIndex,
    currentQuestion,
    answer,
    progress,
    score,
    maxScore,
    minScore,
    choose,
    getNextQuestion,
    retry,
    count
  }

  function choose (choice) {
    setAnsweredQuestions(answeredQuestions + 1)
    setAnswer(choice)
    if (choice === currentQuestion.correct_answer) { increaseCorrectAnswers() }
  }

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
}

export default useQuiz

function decodeQuestion (question) {
  const newQuestion = { ...question }
  newQuestion.category = decodeURIComponent(question.category)
  newQuestion.question = decodeURIComponent(question.question)
  newQuestion.correct_answer = decodeURIComponent(question.correct_answer)
  newQuestion.incorrect_answers = question.incorrect_answers
    .map(answer => decodeURIComponent(answer))
  return newQuestion
}
