import React from 'react'
import ProjectsFormAdd from '../ProjectsForm/ProjectsFormAdd'
import * as S from './ProjectsHeader.styles'

import { connect } from 'react-redux'

function ProjectsHeader(props) {
    
    // Default props
    const {
        projects = [],
        message = '',
        setModal,
        unSetModal,
        handleAddProjectSubmit
    } = props
    
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <S.Title>Projet{projects.length > 0 && 's'}</S.Title>
            <div style={{ height: '20px', display: 'flex', justifyContent: 'center' }}>{message}</div>
            <S.LinkToModal
                color={'lightgreen'}
                onClick={() => {
                    setModal(
                        <ProjectsFormAdd
                            onSubmit={handleAddProjectSubmit}
                            unSetModal={unSetModal}
                        />
                    )
                }}
            >
                Ajouter
            </S.LinkToModal>
        </div>
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
)(ProjectsHeader)
