import styled from '@emotion/styled'


export const Container = styled.div`
    max-width: 1024px;
    padding: 0 10px;
    margin: 0 auto;
`
export const PageTitle = styled.h1``
export const Title = styled.h2``
export const SubTitle = styled.h3``

export const Portfolio = styled.div`
position: relative;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-auto-flow: row dense;

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 576px) and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

