import React from 'react';
import * as S from './App.styles'

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

import MainView from './components/MainView/MainView'
import Burger from './components/Burger/Burger'
import SocialNetworks from './components/SocialNetworks/SocialNetworks'

const App = () => {

  const backgroundImage = 'images/alex.jpg'

  const sidebarHeader = {
    fullName: 'Alex Duchemin',
    shortName: 'AD'
  }
  
  const fonts = {
    header:'ZCOOL Kuaile',
    menu: 'Poppins'
  }

  const menuItems = [
    {name: 'Accueil', to: '/', icon: <AiIcons.AiFillHome />, subMenuItems: []},
    {name: 'Profil', to: '/about', icon: <IoIcons.IoIosPaper />, subMenuItems: []},
    {name: 'Mes projets', to: '/portfolio', icon: <AiIcons.AiFillPicture />, subMenuItems: []},
    {name: 'Contact', to: '/contact', icon: <FaIcons.FaEnvelopeOpenText />, subMenuItems: []},
    // {name: 'Destinations', to: '/destinations', icon: <FaIcons.FaCartPlus />, subMenuItems: [
    //   {name: 'Canada', to: '/canada'},
    //   {name: 'Brazil', to: '/brazil'},
    //   {name: 'India', to: '/india'},
    //   {name: 'Australia', to: '/australia'},
    //   {name: 'Kenya', to: '/kenya'}
    // ]}
  ]

  

  return (
    <S.App>
      <Burger
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      />
      <SocialNetworks />
      <MainView/>
    </S.App>
  );
}

export default App;
