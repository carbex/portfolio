import styled from '@emotion/styled'

// Colors kir
const mainColor = 'rgba(131, 234, 241)'

// Styled-components
export const Form = styled.form`
    margin-bottom: 3rem;
    max-width: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
export const PageTitle = styled.h1``
export const Title = styled.h2``
export const SubTitle = styled.h3``

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
export const InputRequired = styled.input`
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
        color: ${p => p.isFail ? '#ff4d4d' : '#fff'}; 
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

export const EmailContent = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
`
export const EmailLabel = styled.label`
    opacity: ${p => !p.isEmailAllowed ? 1 : 0};
    position: absolute;
    top: 4px;
    color: #ff4d4d;
    right: 0;
    transform-origin: 50% 50%;
    transition: .4s ease-in all;  
`
export const NameContent = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
`
export const NameLabel = styled.label`
    opacity: ${p => !p.isNameAllowed ? 1 : 0};
    position: absolute;
    top: 4px;
    color: #ff4d4d;
    right: 0;
    transform-origin: 50% 50%;
    transition: .4s ease-in all;  
`
export const Textarea = styled.textarea`
    position: relative;
    background: transparent;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    color: #fff;
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0;
    box-sizing: border-box;
    overflow: auto;
    border: none;
    border-bottom: 1px solid white;
    &::placeholder {
        color: ${p => p.isFail ? '#ff4d4d' : '#fff'}; 
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
export const FormMessage = styled.div`
    opacity: ${p => p.popupMessage ? p.popupMessage.opacity : 0};
    transition: opacity .4s ease-in;
    color: ${p => p.popupMessage && p.popupMessage.color};   
    margin-top: 10px;
    text-align: center;
`
export const Button = styled.input`
    font-size: 1.3rem;
    margin-top: 20px;
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
