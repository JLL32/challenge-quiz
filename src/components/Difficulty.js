import React from 'react'

const Difficulty = ({ value }) => {
  if (value === 'hard') {
    return <div>★★★</div>
  }
  if (value === 'medium') {
    return <div>★★☆</div>
  }
  return <div>★☆☆</div>
}

export default Difficulty
