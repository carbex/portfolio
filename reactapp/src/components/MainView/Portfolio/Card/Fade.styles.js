import styled from '@emotion/styled'

export const Fade = styled.div`
    transition: opacity ${p => p.duration}ms;
    ${p => p.visible ? 'opacity: 1;' : 'opacity: 0;'}

    @media screen and (min-width: 1025px) {
    grid-column: span 3;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-column: span 2;
    }
    @media screen and (max-width: 800px) {
    grid-column: span 1;
    }
`