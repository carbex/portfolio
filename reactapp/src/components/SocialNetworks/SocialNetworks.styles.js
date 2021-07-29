import styled from '@emotion/styled'

// Color kit
const mainColor = 'rgba(131, 234, 241, 1)'


// Styled-components
export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 40%;
    right: .6rem;
    z-index: 10;
`
export const Icon = styled.span`
    font-size: 2rem;
    color: white;

    &:hover {
        color: ${mainColor};
        transition: .1s ease-in-out all;
        transform: scale(1.5);
    };
`