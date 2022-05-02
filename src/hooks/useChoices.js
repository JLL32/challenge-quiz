import { useMemo } from 'react'

export default useChoices

function useChoices (correctAnswer, incorrectAnswers) {
  const choices = [correctAnswer, ...incorrectAnswers]
  // memoizing the array of choices to avoid re-ordering
  // at each re-render of the same question
  // also turning the dependency into a string to
  // check for deep equality
  return {
    choices: useMemo(() => shuffle(choices), [JSON.stringify(choices)]),
    count: choices.length
  }
}

function shuffle (array) {
  let currentIndex = array.length

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}
