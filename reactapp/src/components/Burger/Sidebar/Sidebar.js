import React, { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// import * as IoIcons from "react-icons/io"

function Sidebar(props) {

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
        },
        isSidebarOpen = true,
        isSidebarLarge = true
    } = props

    // State
    const [selected, setSelectedMenuItem] = useState(menuItems[0].name)
    const [subMenusStates, setSubmenus] = useState({})
    // const [isSidebarLarge, setIsSidebarLarge] = useState(true)
    const [header, setHeader] = useState(sidebarHeader.fullName)
    const [menuItemsUpdated, setMenuItemsUpdated] = useState(menuItems)
    

    // Effects

    // Update of header state
    useEffect(() => {
        isSidebarLarge ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
    }, [isSidebarLarge, sidebarHeader])

    // Update of menuItemsUpdated state
    useEffect(() => {
        let timer
        if (isSidebarLarge) {
            timer = setTimeout(() => setMenuItemsUpdated(menuItems), 200)
        } else {
            let newMenuItems = menuItems.map((e) => {
                let name = ''
                return { ...e, name }
            })
            setMenuItemsUpdated(newMenuItems)
        }
        return () => {
            clearTimeout(timer);
        }
    }, [isSidebarLarge, menuItems])

    // // Update of sidebar state
    // useEffect(() => {
    //     const updateWindowWidth = () => {
    //         const firstBreakPoint = 992
    //         // const secondBreakPoint = 768
    //         if (window.innerWidth < firstBreakPoint && isSidebarLarge) setIsSidebarLarge(false)
    //         else if (window.innerWidth > firstBreakPoint && !isSidebarLarge) setIsSidebarLarge(true)
    //         // else if (window.innerWidth < secondBreakPoint) setTogglerActive(false)
    //         // else if (window.innerWidth > secondBreakPoint) setTogglerActive(true)
    //     }
    //     window.addEventListener('resize', updateWindowWidth)
    //     return () => window.removeEventListener('resize', updateWindowWidth)
    // }, [isSidebarLarge])


    // Add index of menu items with submenus to state
    useEffect(() => {
        const newSubmenus = {};
        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;
            if (hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['selected'] = null;
            }
        })
        // Set selected submenu if user landed on one
        const path = window.location.pathname;
        const parts = path.split('/');
        if (parts.length === 3) {
            const selectedItem = parts[1].toLowerCase();
            const selectedSubItem = parts[2].toLowerCase()
            const selectedItemIndex = menuItems.findIndex(item => item.name.toLowerCase() === selectedItem);
            const selectedSubItemIndex = menuItems[selectedItemIndex]?.subMenuItems.findIndex(subItem => subItem.name.toLowerCase() === selectedSubItem);
            if (selectedItemIndex !== -1) newSubmenus[selectedItemIndex]['isOpen'] = true;
            if (selectedItemIndex !== -1 && selectedSubItemIndex !== -1) newSubmenus[selectedItemIndex]['selected'] = selectedSubItemIndex;
        }
        Object.keys(subMenusStates).length === 0 && setSubmenus(newSubmenus);
    }, [menuItems])

    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name)
        const subMenusCopy = { ...subMenusStates }
        if (subMenusStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
            setSubmenus(subMenusCopy)
        } else {
            for (let item in subMenusStates) {
                subMenusCopy[item]['isOpen'] = false
                subMenusCopy[item]['selected'] = null
            }
            setSubmenus(subMenusCopy)
        }
    }

    const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
        const subMenusCopy = { ...subMenusStates }
        subMenusCopy[menuItemIndex]['selected'] = subMenuItemIndex
        setSubmenus(subMenusCopy)
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length;
        const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null
        const subMenuJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubmenuItemSelected = subMenusStates[index] ? subMenusStates[index].selected === subMenuItemIndex : null;

            return (
                <Link to={`${item.to}${subMenuItem.to}`} key={subMenuItemIndex} style={{ textDecoration: 'none' }}>
                    <S.SubMenuItem
                        onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                        selected={isSubmenuItemSelected}
                    >
                        {subMenuItem.name}
                    </S.SubMenuItem>
                </Link>

            )
        })
        return (
            <S.ItemContainer key={index}>
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                    <S.MenuItem
                        font={fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                            isSidebarLarge={isSidebarLarge}
                        isOpen={isOpen}
                    >
                        <S.Icon isSidebarLarge={isSidebarLarge} selected={isItemSelected} title={item.name}>{item.icon}</S.Icon>
                        <S.Text isSidebarLarge={isSidebarLarge} >{menuItemsUpdated[index].name}</S.Text>
                        {hasSubmenus && isSidebarLarge && (
                            <S.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
                        )}
                    </S.MenuItem>
                </Link>
                {/* // Display submenus if they exist */}
                <AnimatePresence>
                    {hasSubmenus && isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            exit={{ opacity: 0, x: -30 }}
                        >
                            <S.SubMenuItemContainer isSidebarLarges={isSidebarLarge}>{subMenuJSX}</S.SubMenuItemContainer>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </S.ItemContainer>
        )
    })

    return (
        <>
            {/* <S.TogglerContainer onClick={() => setIsSidebarLarge(!isSidebarLarge)} >
                <S.TogglerIcon isSidebarLarge={isSidebarLarge} isSidebarOpen={isSidebarOpen}>
                    <IoIcons.IoIosArrowDropleft />
                </S.TogglerIcon>
            </S.TogglerContainer> */}

            <S.SidebarContainer backgroundImage={backgroundImage} isSidebarLarge={isSidebarLarge} isSidebarOpen={isSidebarOpen}>
                <S.SidebarHeader font={fonts.header}>{header}</S.SidebarHeader>
                <S.MenuItemContainer>{menuItemsJSX}</S.MenuItemContainer>

            </S.SidebarContainer>
        </>
    )
}

export default Sidebar
