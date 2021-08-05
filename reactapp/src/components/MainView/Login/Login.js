import React, { useState } from 'react'
import * as S from './Login.styles'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

function Login(props) {


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isConnect, setIsConnect] = useState(false)

    var handleSubmitSignin = async () => {
        const rawResponse = await fetch('/users/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `login=${login}&password=${password}`
        })
        const response = await rawResponse.json();

        if (response.result === true) {
            props.addUser(response.user)
            setIsConnect(true)
        } else {
            setError(<span style={{color: 'lightcoral'}}>{response.error}</span>)
            const timer = setTimeout(() => {
                setError('')
            }, 5000)
            return () => {
                clearTimeout(timer)
            }
        }
    }

    // var handleSubmitSignup = async () => {
    //     const data = await fetch('/users/sign-up', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //       body: `login=${login}&password=${password}`
    //     })
    //     const body = await data.json()
    //     console.log('body = ',body)
    //     if (body.result === true) {
    //       props.addToken(body.user.token)
    //       props.addUserId(body.user._id)
    //       setSignUp(true)
    //     } else {
    //       setError(body.error)
    //       setOpen(true);
    //     }
    // }

    // Redirections
  if (isConnect) {
    return <Redirect to="/dashboard" />;
  }

    return (
        <S.Container>
            <S.Form>
                <S.Input
                    type="text"
                    name='login'
                    placeholder='Identifiant*'
                    onChange={(e) => setLogin(e.target.value)}
                />
                <S.Input
                    type="password"
                    name="password"
                    placeholder='Mot de passe*'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{height: '20px', display: 'flex', justifyContent: 'center'}}>{error}</div>
                <S.Button onClick={handleSubmitSignin}>Se connecter</S.Button>
            </S.Form>
        </S.Container>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: function (user) {
            dispatch({ type: 'addUser', user })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)
