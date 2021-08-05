import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const Select = styled.select`
padding: 5px 0 5px 0;
    margin-bottom: 10px;
    border: 1px solid #8f8f9d;
    border-radius: 0;
`
export const Input = styled.input`
    border: 1px solid #8f8f9d;
    margin: 0 0 10px 0;
`
export const Textarea = styled.textarea`
    margin-bottom: 10px;
`
export const ButtonPrimary = styled.button`
    font-size: 1.3rem;
    margin-top: 20px;
    color: white;
    background-color: rgba(44, 219, 232, 0.8);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    width: 100%;
    padding: 10px;   

    &:hover {
        letter-spacing: 2px;
        background-color: rgba(44, 219, 232, 1);
    }
`
export const ButtonSecondary = styled.button`
    font-size: 1.3rem;
    margin-top: 20px;
    color: white;
    background-color: rgba(117, 125, 138, 0.8);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    width: 100%;
    padding: 10px;   

    &:hover {
        letter-spacing: 2px;
        background-color: rgba(117, 125, 138, 1);
    }
`
export const ButtonDanger = styled.button`
    font-size: 1.3rem;
    margin-top: 20px;
    color: white;
    background-color: rgba(240, 128, 128, 0.8);
    border: 1px solid white;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;
    width: 100%;
    padding: 10px;   

    &:hover {
        letter-spacing: 2px;
        background-color: rgba(240, 128, 128, 1);
    }
`

