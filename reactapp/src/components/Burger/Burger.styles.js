import styled from '@emotion/styled'

// Color Kit
const colors = {
    bgFirstGradient: 'rgba(131, 234, 241, 0.9)',
    bgSecondGradient: 'rgba(42, 66, 90, 0.9)',
    mainColor: 'rgba(131, 234, 241, 1)'
}

// Styled components
export const StyledBurger = styled.div`
padding: 0;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 1rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

    &:hover{
        div {
            box-sizing: inherit;
        background-color: ${colors.mainColor};
        }
    }
`
export const Bar = styled.div`
    width: 2rem;
    height: 0.20rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: right;
    transition: all 0.3s linear;

    &:nth-of-type(1) {
        transform: ${({ isSidebarOpen }) => isSidebarOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    &:nth-of-type(2) {
        transform: ${({ isSidebarOpen }) => isSidebarOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ isSidebarOpen }) => isSidebarOpen ? 0 : 1};
    }

    &:nth-of-type(3) {
        transform: ${({ isSidebarOpen }) => isSidebarOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
`
// Toggler -------------------------------------------

export const TogglerContainer = styled.div`
    z-index: 20;
    position: fixed;
    width: 2rem;
    height: 2rem;
    top: 50px;   
    right: 1rem;   
  
`
export const TogglerIcon = styled.div`
    color: white;
    height: 40px;
    cursor: pointer;
    position: fixed;
    font-size: 40px;
    display: flex;
    justify-content: center;
    transform: 
        ${p => p.isSidebarOpen ? 'translateX(0)' : 'translateX(20px)'} 
        ${p => p.isSidebarLarge ? 'rotate(0)' : 'rotate(180deg)'}
    ;
    opacity: ${({ isSidebarOpen }) => isSidebarOpen ? 1 : 0};
    transition: transform .5s, opacity 0.5s ease ;

    &:hover {
        color: ${colors.mainColor};
    }
`