import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import * as S from './Burger.styles'
import * as IoIcons from "react-icons/io"

function Burger(props) {

    // Default props
    const {
        backgroundImage = '',
        sidebarHeader = {
            fullName: '',
            shortName: ''
        },
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSidebarLarge, setIsSidebarLarge] = useState(true)
    const [userChoice, setUserChoice] = useState({isSidebarLarge: null, isSidebarOpen: null})

    // Update of sidebar states

    useEffect(() => {
        const updateWindowWidth = () => {            
            const secondBreakPoint = 576
            if (window.innerWidth < secondBreakPoint) setIsSidebarOpen(false)
            else if (window.innerWidth > secondBreakPoint && userChoice.isSidebarOpen) setIsSidebarOpen(true)
        }
        window.addEventListener('resize', updateWindowWidth)
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [isSidebarOpen, userChoice.isSidebarOpen])

    useEffect(() => {
        const updateWindowWidth = () => {
            const firstBreakPoint = 992
            if (window.innerWidth < firstBreakPoint && isSidebarLarge) setIsSidebarLarge(false)
            else if (window.innerWidth > firstBreakPoint && userChoice.isSidebarLarge) setIsSidebarLarge(true)
        }
        window.addEventListener('resize', updateWindowWidth)
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [isSidebarLarge, userChoice.isSidebarLarge])

    const handleBurgerClick = () => {
        setIsSidebarOpen(!isSidebarOpen)
        setUserChoice({...userChoice, isSidebarOpen: !isSidebarOpen})
    }

    const handleTogglerClick = () => {
        setIsSidebarLarge(!isSidebarLarge)
        setUserChoice({...userChoice, isSidebarLarge: !isSidebarLarge})
    }

    return (
        <>
            <S.StyledBurger onClick={() => handleBurgerClick()}>
                <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
                <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
                <S.Bar isSidebarOpen={isSidebarOpen}></S.Bar>
            </S.StyledBurger>
            <S.TogglerContainer onClick={() => handleTogglerClick()} >
                <S.TogglerIcon isSidebarLarge={isSidebarLarge} isSidebarOpen={isSidebarOpen}>
                    <IoIcons.IoIosArrowDropleft />
                </S.TogglerIcon>
            </S.TogglerContainer>
            <Sidebar
                backgroundImage={backgroundImage}
                sidebarHeader={sidebarHeader}
                menuItems={menuItems}
                fonts={fonts}
                isSidebarOpen={isSidebarOpen}
                isSidebarLarge={isSidebarLarge}
            />
        </>
    )
}

export default Burger
