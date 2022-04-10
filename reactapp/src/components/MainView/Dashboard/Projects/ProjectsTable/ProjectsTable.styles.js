import styled from '@emotion/styled'

// Color kit
const mainColor = 'rgba(44, 219, 232, 1)'

// Styled-components
export const Title = styled.h2``

export const Tr = styled.tr`
    background-color: 'black';
`

export const LinkToModal = styled.div`
    color: ${p => p.color && p.color};
    opacity: 0.8;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`
export const Text = styled.div`
    padding-top: 2px;
    font-size: 12px;
    font-weight: 500;
`
export const Email = styled.div`
    cursor: pointer;
    padding-top: 2px;
    font-size: 12px;
    font-weight: 500;
    &:hover{
        color: ${mainColor}
    }
`
export const UserFooter = styled.div`
    display: ${p => p.visible ? 'block' : 'none'}
`

export const ThDisplayToggle = styled.th`
    @media (max-width: 650px) {
        display: none;
    }
`

export const ThLogin = styled.th``
export const ButtonToggle = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;
    display: none;
    @media (max-width: 650px) {
        display: inline-block;
    }
`
export const ButtonIdToggle = styled.div`
    margin-left: 5px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;
`
// Dropdown Icon ------------------------------------

export const DropdownIcon = styled.span`
    position: absolute;
    top: ${p => p.visible ? '9px' : '5px'};
    right: 6px;
    border: 1px solid black;
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${p => p.visible ? 'rotate(-135deg)': 'rotate(45deg)'};
    transition: .4s;
`
