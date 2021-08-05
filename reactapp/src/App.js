import React from 'react';
import * as S from './App.styles'
import MainView from './components/MainView/MainView'
import Burger from './components/Burger/Burger'
import SocialNetworks from './components/SocialNetworks/SocialNetworks'

const App = () => {
  return (
    <S.App>
      <Burger />
      <MainView />
      <SocialNetworks />
    </S.App>
  );
}

export default App
