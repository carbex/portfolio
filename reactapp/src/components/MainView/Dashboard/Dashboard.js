import React from "react";
import * as S from "./Dashboard.styles";
import { Users } from "./Users/Users";
import { Projects } from "./Projects/Projects";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function Dashboard() {
  const token = useSelector((state) => state.user.token);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <S.Container>
      <S.Row>
        <S.PageTitle>TABLEAU DE BORD</S.PageTitle>
      </S.Row>
      <S.Row>
        <Users />
      </S.Row>
      <S.Row>
        <Projects />
      </S.Row>
    </S.Container>
  );
}
