import React, { useState, useEffect } from 'react'
import * as S from './UsersForm.styles'
import { connect } from 'react-redux'

function UserFormUpdate(props) {

    // Default props
    const {
        user = {},
        onSubmit,
        unSetModal,
        roleStored = 2
    } = props

    // States
    const [token, setToken] = useState('')
    const [login, setLogin] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    useEffect(() => {
        setToken(user.token)
        setLogin(user.login)
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setRole(user.role)
    }, [user.email, user.firstName, user.lastName, user.login, user.role, user.token])

    return (
        <S.Container>
            <h3>Modification d'un utilisateur</h3>
            <label htmlFor='login'>Identifiant*</label>
            <S.Input type='text' name='login' value={login} placeholder='Obligatoire' onChange={e => setLogin(e.target.value)} />
            <label htmlFor='firstName'>Prénom</label>
            <S.Input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor='lastName'>Nom</label>
            <S.Input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
            <label htmlFor='email'>Adresse de messagerie</label>
            <S.Input type='email' name='email' value={email} placeholder='john@doe.com' onChange={e => setEmail(e.target.value)} />
            {roleStored === 1 &&
                <>
                    <label htmlFor='role'>Rôle</label>
                    <S.Select value={role} onChange={e => setRole(e.target.value)} aria-label="Default select example">
                        <option value={1}>Administrateur</option>
                        <option value={2}>Utilisateur</option>
                    </S.Select>
                </>
            }
            <label htmlFor='password'>Mot de passe*</label>
            <S.Input minlength="6" required type='password' name='password' value={password} placeholder='Obligatoire' onChange={e => setPassword(e.target.value)} />
            <label htmlFor='newPassword'>Nouveau mot de passe </label>
            <S.Input minlength="6" type="password" name='newPassword' value={newPassword} placeholder='(6 caractères minimum)' onChange={e => setNewPassword(e.target.value)} />
            <label htmlFor='confirmNewPassword'>Confirmer le nouveau mot de passe</label>
            <S.Input minlength="6" type="password" name='confirmNewPassword' value={confirmNewPassword} placeholder='(6 caractères minimum)' onChange={e => setConfirmNewPassword(e.target.value)} />
            <div style={{ display: 'flex', justifyContent: 'start' }}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>
                <S.ButtonPrimary onClick={() => onSubmit(token, login, password, newPassword, confirmNewPassword, firstName, lastName, email, role)}>Modifier</S.ButtonPrimary>
            </div>
        </S.Container>
    )
}

function mapStateToProps(state) {
    return {
        token: state.user.token,
        roleStored: state.user.role
    };
}

export default connect(
    mapStateToProps,
    null
)(UserFormUpdate)
