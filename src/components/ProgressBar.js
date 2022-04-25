import React from 'react'
import styled from 'styled-components'

const ProgressBar = ({ value }) => {
  return (
    <div className='progress'>
      <Bar className='progress-bar' role='progressbar' value={value} aria-valuenow={value} aria-valuemin='0' aria-valuemax='100' />
    </div>
  )
}

export default ProgressBar

const Bar = styled.div`
width: ${props => props.value}%;
`
