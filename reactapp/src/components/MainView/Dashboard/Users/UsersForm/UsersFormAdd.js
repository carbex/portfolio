import React, { useState } from 'react'
import * as S from './UsersForm.styles'

function UserFormAdd(props) {

    // Default props
    const {
        onSubmit,
        unSetModal
    } = props

    // States
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <S.Container>
            <h3>Ajout d'un nouvel utilisateur</h3>
            <label htmlFor='login'>Login*</label>
            <S.Input type='text' name='login' value={login} placeholder='Obligatoire' onChange={e => setLogin(e.target.value)} />
            <label htmlFor='password'>Mot de passe*</label>
            <S.Input minlength="6" required type="password" name='password' value={password} placeholder='Obligatoire (6 caratères minimum)' onChange={e => setPassword(e.target.value)} />
            <label htmlFor='confirmPassword'>Confirmer le mot de passe*</label>
            <S.Input minlength="6" required type="password" name='confirmPassword' value={confirmPassword} placeholder='Obligatoire (6 caratères minimum)' onChange={e => setConfirmPassword(e.target.value)} />
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>
                <S.ButtonPrimary onClick={() => onSubmit(login, password, confirmPassword)}>Ajouter</S.ButtonPrimary>
            </div>            
        </S.Container>
    )
}

export default UserFormAdd
