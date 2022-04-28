import question from '../../src/questions.json'

describe('taking quiz', () => {
  it('user can take the quiz', () => {
    // choose an answer
    // click next question
    cy.visit('localhost:3000')
    for (let i = 0; i < question.length; i++) {
      const current = question[i]
      const choices = [decodeURIComponent(current.correct_answer),
        ...current.incorrect_answers.map(answer => decodeURIComponent(answer))]
      const randomChoice = choices[getRandomInt(0, choices.length - 1)]
      cy.findByRole('button', {
        name: RegExp(`${randomChoice}`
          .replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      }).click()
      if (i < question.length - 1) {
        cy.findByRole('button', { name: /next question/i }).click()
      }
    }
  })
})

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
