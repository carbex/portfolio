import React, { useState, useEffect } from 'react'
import * as S from './Sidebar.styles'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { IoLogoYoutube } from 'react-icons/io'


// DEFAULT SIDEBAR CONSTANTS
const sidebar = {
    backgroundImage: 'images/alex.jpg',
    header: {
        fullName: 'Alex Duchemin',
        shortName: 'AD'
    },
    fonts: {
        header: 'ZCOOL Kuaile',
        menu: 'Poppins'
    },
    menuItems: [
        { id: 0, name: 'Accueil', to: '/', icon: <AiIcons.AiFillHome />, subMenuItems: [] },
        { id: 1, name: 'Profil', to: '/about', icon: <AiIcons.AiFillProfile />, subMenuItems: [] },
        { id: 2, name: 'Mes projets', to: '/portfolio', icon: <AiIcons.AiFillProject />, subMenuItems: [] },
        { id: 3, name: 'Contact', to: '/contact', icon: <FaIcons.FaEnvelopeOpenText />, subMenuItems: [] },
        { id: 4, name: 'Tableau de bord', to: '/dashboard', icon: <AiIcons.AiFillDashboard />, subMenuItems: [] },
        // { id: 5, name: 'Destinations', to: '/destinations', icon: <FaIcons.FaCartPlus />, subMenuItems: [
        //   {name: 'Canada', to: '/canada'},
        //   {name: 'Brazil', to: '/brazil'},
        //   {name: 'India', to: '/india'},
        //   {name: 'Australia', to: '/australia'},
        //   {name: 'Kenya', to: '/kenya'}
        // ]},
        { id: 6, name: 'Connexion', to: '/login', icon: <AiIcons.AiOutlinePoweroff />, subMenuItems: [] }
    ]
}

function Sidebar(props) {

    // DEFAULT PROPS
    const {
        isSidebarOpen = true,
        isSidebarLarge = true,
        token,
        addUser
    } = props

    // STATES
    const location = useLocation()
    const [menuItems, setMenuItems] = useState([])
    const [selected, setSelectedMenuItem] = useState()
    const [subMenusStates, setSubmenus] = useState({})
    const [header, setHeader] = useState(sidebar.header.fullName)
    const [menuItemsUpdated, setMenuItemsUpdated] = useState(sidebar.menuItems)

    /* EFFECTS
    ----------------------------------------------------------------------*/

    // SET MENUITEMS STATE
    useEffect(() => {
        setMenuItems(sidebar.menuItems)
    }, [])

    // CHANGE CONNECTION LINK MENU ITEM
    useEffect(() => {
        if(token) {
            setMenuItems([...sidebar.menuItems.map(item => {
                if(item.to === "/login") {
                    return {...item, name: 'Déconnexion', to: '#' }
                } else {
                    return {...item}
                }
            })])
        }
    }, [token])

    // Update of header state
    useEffect(() => {
        isSidebarLarge ? setTimeout(() => setHeader(sidebar.header.fullName), 200) : setHeader(sidebar.header.shortName);
    }, [isSidebarLarge])

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

    // LISTEN ON URL PATH CHANGE
    useEffect(() => {
        menuItemsUpdated.forEach(item => {
            location.pathname === item.to && setSelectedMenuItem(item.id)
        })
    }, [location, menuItemsUpdated])

    // ADD INDEX OF MENU ITEMS WITH SUBMENUS TO STATE
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


    // ON MENU ITEM CLICK
    const handleMenuItemClick = (id, index) => {
        if(id === 6){
            addUser({
                login: null,
                token: null,
                role: null
            });
            setMenuItems([...sidebar.menuItems.map(item => {
                if(item.to === "login") {
                    return {...item, name: 'Connexion', to: '/login' }
                } else {
                    return {...item}
                }
            })]);
        } else {
            // setSelectedMenuItem(name);
            const subMenusCopy = { ...subMenusStates };
            if (subMenusStates.hasOwnProperty(index)) {
                subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen'];
                setSubmenus(subMenusCopy);
            } else {
                for (let item in subMenusStates) {
                    subMenusCopy[item]['isOpen'] = false;
                    subMenusCopy[item]['selected'] = null;
                }
                setSubmenus(subMenusCopy);
            }
        }
    }

    // ON SUBMENU ITEM CLICK
    const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
        const subMenusCopy = { ...subMenusStates }
        subMenusCopy[menuItemIndex]['selected'] = subMenuItemIndex
        setSubmenus(subMenusCopy)
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        if ((item.id === 4 && !token)) {
            return null
        } else {
            const isItemSelected = selected === item.id;
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
                                token={item.id === 6 ? token : false}
                                font={sidebar.fonts.menu}
                                selected={isItemSelected}
                                onClick={() => handleMenuItemClick(item.id, index)}
                                isSidebarLarge={isSidebarLarge}
                                isOpen={isOpen}
                            >
                                <S.Icon token={item.id === 6 ? token : false} isSidebarLarge={isSidebarLarge} selected={isItemSelected} title={item.name}>{item.icon}</S.Icon>
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
        }
    })

    return (
        <>
            <S.SidebarContainer backgroundImage={sidebar.backgroundImage} isSidebarLarge={isSidebarLarge} isSidebarOpen={isSidebarOpen}>              
                <S.SidebarHeader font={sidebar.fonts.header}>{header}</S.SidebarHeader>
                <S.MenuItemContainer>{menuItemsJSX}</S.MenuItemContainer>
            </S.SidebarContainer>
        </>
    )
}

function mapStateToProps(state) {
    return {
      token: state.user.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: function (user) {
            dispatch({ type: 'addUser', user })
        }
    }
}
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(Sidebar)
