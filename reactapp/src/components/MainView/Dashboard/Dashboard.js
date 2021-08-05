import React from 'react'
import * as S from './Dashboard.styles'
import Users from './Users/Users'
import Projects from './Projects/Projects'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

function Dashboard(props) {

    if (!props.token) {
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
    )
}

function mapStateToProps(state) {
    return {
      token: state.user.token,
      role: state.user.role
    };
}

export default connect(
    mapStateToProps,
    null
)(Dashboard)


