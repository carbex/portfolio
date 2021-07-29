import styled from '@emotion/styled'

// Color Kit
const colors = {
    bgFirstGradient: 'rgba(131, 234, 241, 0.9)',
    bgSecondGradient: 'rgba(42, 66, 90, 0.9)',
    mainColor: 'rgba(131, 234, 241, 1)'
}

// Styled-components
export const SidebarContainer = styled.div`

    ${p => !p.isSidebarOpen && 'transform: translate(-100%); z-index: 20;'}
    width: ${p => p.isSidebarLarge ? '60%' : '5%'};
    max-width: 280px;
    min-width: 60px;
    height: 100vh;
    background-image: linear-gradient(
        315deg,
        ${colors.bgFirstGradient} 0%,
        ${colors.bgSecondGradient} 70%
    );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    position: ${p => p.isSidebarOpen ? 'sticky' : 'fixed' };
    top: 0;
    transition: .5s ease-in-out all;
    z-index: 15;

    @media (max-width: 576px) {
        ${p => !p.isSidebarOpen ? 'position: fixed; transform: translate(-100%); z-index: 20;' : 'position: fixed; transform: translate(0); z-index: 20;'}
    }
`
export const SidebarHeader = styled.div`
    padding: 40px 0;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    font-family: ${p => p.font};
    color: ${colors.mainColor};
`
export const MenuItemContainer = styled.div``

export const ItemContainer = styled.div``

// Menu items ----------------------------------------------------------

export const MenuItem = styled.div`
    ${p => !p.isSidebarLarge && `
        text-align: center;
        ${p.selected && 'background-color: rgba(0, 0, 0, 0.2)'}
    `};
    ${p => p.selected && 'font-weight: bold; letter-spacing: 2px;'}
    transition: .2s;
    padding: 6px 20px;
    font-weight: 600;
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255)'};
    font-family: ${p => p.font};
    white-space: nowrap;
    position: relative; // Dropdown Icon
    transition: .2s ease-in all;

    &:hover {
        color: ${colors.mainColor};
        letter-spacing: 2px;
        transition: .2s ease-in all;
    };

    &:after {
        content: '';
        border: 1px solid ${p => p.selected ? colors.mainColor : 'rgba(255, 255, 255, 1)'};
        display: ${p => p.isSidebarLarge && p.selected && p.isOpen ? 'none' : 'block'};
        margin: 8px 0 4px; 
        transition: .2s ease-in all;
    };

    ${p => !p.selected && `
        &:hover {
            &:after {
                border: 1px solid rgba(255, 255,255, 0.2);
                transition: .2s ease-in all;
            }
        }
    `}
`
export const Text = styled.p`
    display: ${p => p.isSidebarLarge ? 'inline' : 'none'};   
`
export const Icon = styled.span`
    ${p => p.isSidebarLarge && `padding-right: 20px; transition: .2s ease-in padding-right`}; 
    color: white;

    ${p => !p.isSidebarLarge &&`
        &:hover {
            color: ${colors.mainColor};
            transition: .2s ease-in all;
        };
    `}
    
`

// Sub menu items -------------------------------------

export const SubMenuItemContainer = styled.div`
    font-size: 14px;
    ${ p => p.isSidebarLarge && 'padding-left: 15%'};
    ${ p => !p.isSidebarLarge && 'text-align: center'}

`

export const SubMenuItem = styled.p`
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    ${p => p.selected && 'font-weight: bold; letter-spacing: 2px;'}
    transition: .2s;

    &:hover {
        color: rgba(255, 255, 255);
    }
`


// Dropdown Icon ------------------------------------

export const DropdownIcon = styled.span`
    position: absolute;
    top: ${p => p.isOpen ? '16px' : '12px'};
    right: 24px;
    border: solid ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${p => p.isOpen ? 'rotate(-135deg)': 'rotate(45deg)'};
    transition: .4s; 
`
