import React from 'react'
import styled from 'styled-components'

export default Difficulty

function Difficulty ({ value }) {
  if (value === 'hard') {
    return <StartsContainer>★★★</StartsContainer>
  }
  if (value === 'medium') {
    return <StartsContainer>★★☆</StartsContainer>
  }
  return <StartsContainer>★☆☆</StartsContainer>
}

const StartsContainer = styled.div`
color: var(--teal);
`
