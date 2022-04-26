import styled from 'styled-components'

const Stack = styled.div`
display: flex;
flex-direction: ${props => props.direction === 'v' ? 'column' : 'row'};
padding: ${props => props.padding};
width: ${props => props.width};
height: ${props => props.height};
`
export default Stack
