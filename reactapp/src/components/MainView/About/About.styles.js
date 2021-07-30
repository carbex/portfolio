import styled from '@emotion/styled'

// Color kit
const mainColor = 'rgba(131, 234, 241, 1)'

// Styled-components
export const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`
export const PageTitle = styled.h1`
    margin: 3rem 0;
`
export const Title = styled.h2``
export const SubTitle = styled.h3``

export const ImageContainer = styled.div`
    display: flex;
    justify-content: start;
    position: relative;
    height: 100%;
    min-height: 400px;
    width: 100%;
`
export const Image = styled.img`
    width: 100%;
    min-width: 60px;
    height: 100%;
    background-image: url('images/alex.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 4px;
    border: 1px solid white;
`
export const Text = styled.p`
    margin: 0 1rem 2rem 1rem;
`
export const Ul = styled.ul`
    padding: 0 2rem 0 2rem;
    margin-bottom: 2    rem;
`
export const LinkText = styled.span`
    font-weight: 600;
    color: white;
    &:hover {
        color: ${mainColor}
    }
`
export const CompetencesContainer = styled.div``

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: justify-content .2s ease;
    @media (max-width: 576px) {
        justify-content: center;
    }
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
    background-color: rgba(131, 234, 241, 0.6);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s ease-in all;
    width: 100%;

    &:hover {
        padding: 10px;
        letter-spacing: 2px;
        background-color: rgba(131, 234, 241, 0.8);
    }
`