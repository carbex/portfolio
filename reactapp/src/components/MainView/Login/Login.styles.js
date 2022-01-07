import styled from '@emotion/styled';

// Color kit
const mainColor = 'rgba(131, 234, 241, 1)';

// Styled-components
export const Container = styled.div`
max-width: 1024px;
margin: 0 10px;
padding: 3rem 0;
height: 100%;
display: flex; 
justify-content: center;
align-items: center;
flex-direction: column;
text-align: left;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Input = styled.input`
    background: transparent;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    color: #fff;
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid white;
    &::placeholder {
        color: #fff;
    }
    &:hover {
        border-bottom: 1px solid rgba(255, 255,255, 0.2);
        transition: .2s ease-in all;
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid ${mainColor};
    }
`
export const Button = styled.button`
    font-size: 1.3rem;
    margin-top: 40px;
    margin-bottom: 10px;
    color: white;
    background-color: rgba(131, 234, 241, 0.6);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    width: 100%;
    padding: 10px;   

    &:hover {
        letter-spacing: 2px;
        background-color: rgba(131, 234, 241, 0.8);
    }
`