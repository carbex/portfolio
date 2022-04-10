import React from "react";
import * as S from "./App.styles";
import MainView from "./components/MainView/MainView";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <S.App>
      <Layout>
        <MainView />
      </Layout>
    </S.App>
  );
};

export default App;
