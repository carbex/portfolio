import React, { useState } from 'react'
import * as S from './ProjectsForm.styles'

function ProjectFormDelete(props) {

     // Default props
     const {
        project = {},
        onSubmit,
        unSetModal
    } = props

    // state
    const [id] = useState(project._id ? project._id : '')
    const [imageUrl] = useState(project.imageUrl ? project.imageUrl : '')

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Suppression de projet</h3>
            <p>Êtes vous sûr de vouloir supprimer {project.title}?</p>
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>&nbsp;
                <S.ButtonDanger onClick={() => onSubmit(id, imageUrl)}>Supprimer</S.ButtonDanger>
            </div>
        </div>
    )
}

export default ProjectFormDelete
