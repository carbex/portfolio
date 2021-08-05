import styled from '@emotion/styled'

// Colors kir
const mainColor = 'rgba(131, 234, 241)'

// Styled-components
export const Container = styled.div`
    margin-bottom: 3rem;
    max-width: 100%;
    height: 450px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const InfoContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
`
export const IconContainer = styled.div`
    margin-right: 20px;
`
export const Copied = styled.div`
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: lightgreen;
`
export const Info = styled.div`
    text-align: left;
`
export const ClicableIcon = styled.span`
    font-size: 4rem;
    padding: 10px;
    cursor: pointer;
    color: white;
    border: 1px solid white;
    border-radius: 8px;

    &:hover {
        border: 1px solid grey;
        color: ${mainColor};
        transition: .1s ease-in-out all;
    };
`
export const UnclicableIcon = styled.span`
    font-size: 4rem;
    padding: 10px;
    color: white;
    border: 1px solid white;
    border-radius: 8px;
`