import styled from '@emotion/styled'

// Color kit
const mainColor = 'rgba(131, 234, 241, 1)'


// Styled-components
export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 3rem 0;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
`
export const Title = styled.h2`
font-size: 4rem;
weight: 700;
`
export const SubTitle = styled.h3``

export const Name = styled.span`
font-weight: 800;
color: ${mainColor};
`
export const LinkText = styled.span`
    font-weight: 600;
    color: white;
    &:hover {
        color: ${mainColor}
    }
`
export const IconContainer = styled.div`
width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: relative;
`
export const Icon = styled.span`
    font-size: 4rem;
    padding: 1rem;
    color: white;

    &:hover {
        color: ${mainColor};
        transition: .1s ease-in-out all;
        transform: scale(1.5);
    };
`
export const Button = styled.button`
    font-size: 1.3rem;
    padding:  10px 21px;
    margin-top: 20px;
    color: white;
    background-color: rgba(131, 234, 241, 0.8);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s ease-in all;
    width: 100%;
    
    &:hover {
        padding: 10px;
        letter-spacing: 2px;
        background-color: rgba(131, 234, 241, 0.6)
    }
`