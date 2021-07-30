import styled from '@emotion/styled'

// Color kit
// const mainColor = 'rgba(131, 234, 241, 1)'


// Styled-components
export const PageTitle = styled.h1`
    margin: 3rem 0;
`

export const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-flow: column wrap;
    box-sizing: border-box;

    @media screen and (min-width: 780px){
        flex-flow: row wrap;
    }
`
export const ColMap = styled.div`
    box-sizing: border-box;
    padding-right: 0;
    flex: 1;
    height: 100%;
    width: 100%;
    @media screen and (min-width: 780px){
        padding-right: 20px;
    }
`
export const ColInfo = styled.div`
    box-sizing: border-box;
    padding-right: 0;
    flex: 1;
    height: 100%;
    width: 100%;
    @media screen and (min-width: 780px){
        padding-right: 20px;
    }
`
export const ColForm = styled.div`
    height: 100%;
    width: 100%;
`

