import React from 'react'
import * as S from './UsersTable.styles'
import { capitalize } from '../../../../Functions/Functions'
import UsersFormUpdate from '../UsersForm/UsersFormUpdate'
import UsersFormDelete from '../UsersForm/UsersFormDelete'

import { connect } from 'react-redux'

function UsersTable(props) {

    // Default props
    const {
        loading = true,
        isIdAscendant = false,
        isEmailAscendant = false,
        users = [],
        handleUserDropdownClick,
        handleIdDropdownClick,
        handleEmailDropdownClick,
        setModal,
        unSetModal,
        handleUpdateUserSubmit,
        handleDeleteUserSubmit,
        role = 2,
        token
    } = props

    const usersList = users.map((user, index) => {

        if (token !== user.token && role !== 1) {
            return null
        } else {
            return (
                <tr key={user._id}>
                    <th>
                        <div style={{ display: 'flex', justifyContent: 'space-between', aligItems: 'center' }}>
                            <div>
                                <div style={{ fontSize: '14px', marginRight: '10px' }}>
                                    {capitalize(user.login)}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <S.LinkToModal
                                        color={'green'}
                                        onClick={() => {
                                            setModal(
                                                <UsersFormUpdate
                                                    user={user}
                                                    onSubmit={handleUpdateUserSubmit}
                                                    unSetModal={unSetModal}
                                                />
                                            )
                                        }}
                                    >
                                        Modifier
                                    </S.LinkToModal>
                                    {(role === 2 || (role === 1 && token === user.token)) ||
                                        <>
                                            &nbsp;<S.Text>|</S.Text>&nbsp;
                                            <S.LinkToModal
                                                color={'red'}
                                                onClick={() => {
                                                    setModal(
                                                        <UsersFormDelete
                                                            user={user}
                                                            onSubmit={handleDeleteUserSubmit}
                                                            unSetModal={unSetModal}
                                                        />
                                                    )
                                                }}
                                            >
                                                Supprimer
                                            </S.LinkToModal>
                                        </>
                                    }
                                </div>
                            </div>
                            <S.ButtonToggle onClick={() => handleUserDropdownClick(index)}><S.DropdownIcon visible={user.visible} /></S.ButtonToggle>
                        </div>
                        <S.UserFooter visible={user.visible}>
                            <div className='container my-2 p-0'>
                                <div className="row">
                                    <S.Text className="col col-4">
                                        Nom
                                    </S.Text>
                                    <S.Text className="col col-8">
                                        {capitalize(user.firstName)} {capitalize(user.lastName)}
                                    </S.Text>
                                    <S.Text className="col col-4">
                                        Email
                                    </S.Text>
                                    <S.Email className="col col-8" onClick={() => window.location.href = `mailto:${user.email}`}>
                                        {user.email}
                                    </S.Email>
                                    <S.Text className="col col-4">
                                        Rôle
                                    </S.Text>
                                    <S.Text className="col col-8">
                                        {user.role === 1 ? 'Administrateur' : 'Auteur'}
                                    </S.Text>
                                </div>
                            </div>
                        </S.UserFooter>
                    </th>
                    <S.ThDisplayToggle>
                        <S.Text>{capitalize(user.firstName)} {capitalize(user.lastName)}</S.Text>
                    </S.ThDisplayToggle>
                    <S.ThDisplayToggle>
                        <S.Email onClick={() => window.location.href = `mailto:${user.email}`}>
                            {user.email}
                        </S.Email>
                    </S.ThDisplayToggle>
                    <S.ThDisplayToggle>
                        <S.Text>{user.role === 1 ? 'Administrateur' : 'Auteur'}</S.Text>
                    </S.ThDisplayToggle>
                </tr>
            )
        }
    })


    return (
        <>
            <table className='table table-light table-hover'>
                <thead style={{ fontSize: '14px' }}>
                    <tr>
                        <S.ThLogin>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleIdDropdownClick()}>
                                <span>Identifiant</span>
                                <S.ButtonIdToggle ><S.DropdownIcon visible={isIdAscendant} /></S.ButtonIdToggle>
                            </div>
                        </S.ThLogin>
                        <S.ThDisplayToggle>Nom</S.ThDisplayToggle>
                        <S.ThDisplayToggle>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleEmailDropdownClick()}>
                                <span>Email</span>
                                <S.ButtonIdToggle ><S.DropdownIcon visible={isEmailAscendant} /></S.ButtonIdToggle>
                            </div>
                        </S.ThDisplayToggle>
                        <S.ThDisplayToggle>Rôle</S.ThDisplayToggle>
                    </tr>
                </thead>
                <tbody>
                    {loading && <tr><td style={{ color: 'lightgreen' }}>Chargement...</td></tr>}
                    {usersList}
                </tbody>
            </table>
        </>
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
)(UsersTable)
