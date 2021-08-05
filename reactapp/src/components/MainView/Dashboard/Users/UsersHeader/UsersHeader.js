import React from 'react'
import UsersFormAdd from '../UsersForm/UsersFormAdd'
import * as S from './UsersHeader.styles'
import { connect } from 'react-redux'

function UsersHeader(props) {

    // Default props
    const {
        users = [],
        message = '',
        setModal,
        unSetModal,
        handleAddUserSubmit,
        role = 2
    } = props

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <S.Title>
                    Utilisateur{users.length > 0 && role === 1 && 's'}
                </S.Title>
                <div style={{ height: '20px', display: 'flex', justifyContent: 'center' }}>{message}</div>
                {role === 1 &&
                    <S.LinkToModal
                        color={'lightgreen'}
                        onClick={() => {
                            setModal(
                                <UsersFormAdd
                                    onSubmit={handleAddUserSubmit}
                                    unSetModal={unSetModal}
                                />
                            )
                        }}
                    >
                        Ajouter
                    </S.LinkToModal>
                }
            </div>
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
)(UsersHeader)
