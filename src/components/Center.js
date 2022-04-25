import styled from 'styled-components'

const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: ${props => props.padding};
margin: ${props => props.margin};
width: ${props => props.width};
height: ${props => props.height};
`
export default Center
