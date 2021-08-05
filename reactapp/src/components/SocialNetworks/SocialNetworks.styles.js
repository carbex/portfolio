import styled from '@emotion/styled'

// Color kit
const mainColor = 'rgba(131, 234, 241, 1)'


// Styled-components
export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 40%;
    right: .8rem;
    z-index: 10;
`
export const Icon = styled.div`

position: relative;

    font-size: 2rem;
    color: white;
    
   transition: all 0.2s ease-out;
    &:hover {
        color: ${mainColor};
       transform: translate(-4px,0);
       
    };
`