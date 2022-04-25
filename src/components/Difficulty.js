import React from 'react'

const Difficulty = ({ value }) => {
  if (value === 'hard') {
    return <p>★★★</p>
  }
  if (value === 'medium') {
    return <p>★★☆</p>
  }
  return <p>★☆☆</p>
}

export default Difficulty
