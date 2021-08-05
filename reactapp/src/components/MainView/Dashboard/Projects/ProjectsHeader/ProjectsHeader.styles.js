import styled from '@emotion/styled'

// Color kit
// const mainColor = 'rgba(131, 234, 241, 1)'


// Styled-components
export const Title = styled.h2`
margin-right: 20px;
`

export const LinkToModal = styled.div`
    color: ${p => p.color && p.color};
    opacity: 0.9;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`