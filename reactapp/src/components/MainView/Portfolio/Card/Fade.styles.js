import styled from '@emotion/styled'

export const Fade = styled.div`
    transition: opacity ${p => p.duration}ms;
    ${p => p.visible ? 'opacity: 1;' : 'opacity: 0;'}

    @media screen and (min-width: 992px) {
    grid-column: span 3;
    }
    @media screen and (min-width: 576px) and (max-width: 992px) {
    grid-column: span 2;
    }
    @media screen and (max-width: 576px) {
    grid-column: span 1;
    }
`