import React, { useState } from 'react'
import * as S from './UsersForm.styles'

function UserFormDelete(props) {

     // Default props
     const {
        user = {},
        onSubmit,
        unSetModal
    } = props

    // state
    const [id] = useState(user._id ? user._id : '')

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Suppression d'un utilisateur</h3>
            <p>Êtes vous sûr de vouloir supprimer {user.login}?</p>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>
                <S.ButtonDanger onClick={() => onSubmit(id)}>Supprimer</S.ButtonDanger>
            </div>
        </div>
    )
}

export default UserFormDelete