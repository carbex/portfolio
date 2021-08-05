import React, { useState } from 'react'
import * as S from './ProjectsForm.styles'
import { connect } from 'react-redux'

function ProjectFormAdd(props) {

    // Default props
    const {
        onSubmit,
        unSetModal,
        token,
        role = 2
    } = props

    // States
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [resources, setResources] = useState('')
    const [siteUrl, setSiteUrl] = useState('')
    const [githubUrl, setGithubUrl] = useState('')

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUrl(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    return (
        <S.Container>
            <h3>Ajout d'un nouveau projet</h3>
            <S.ImageContainer>
                <S.Image src={imageUrl ? imageUrl : "http://via.placeholder.com/700x525"} alt={title ? title : 'project_image'} />
            </S.ImageContainer>
            <label htmlFor="image">Image* (.SVG, .TIFF, .PNG, .GIF, .JPGs, .WebPs)</label>
            <S.File onChange={e => onImageChange(e)} type="file" name="image" />
            <label htmlFor='title'>Titre*</label>
            <S.Input type='text' name='title' placeholder='Titre' onChange={e => setTitle(e.target.value)} />
            <label htmlFor='description'>Description*</label>
            <S.Textarea type='textarea' name='description' placeholder='Description' onChange={e => setDescription(e.target.value)} />
            <label htmlFor='resources'>Fiche technique*</label>
            <S.Input type="text" name='resources' placeholder='HTML|CSS|REACT|MONGOOSE' onChange={e => setResources(e.target.value)} />
            <label htmlFor='siteUrl'>Lien du site</label>
            <S.Input type="text" name='siteUrl' placeholder='Lien du site' onChange={e => setSiteUrl(e.target.value)} />
            <label htmlFor='githubUrl'>Lien github</label>
            <S.Input type="text" name='githubUrl' placeholder='Lien github' onChange={e => setGithubUrl(e.target.value)} />
            <div style={{display: 'flex', justifyContent: 'start'}}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>
                <S.ButtonPrimary onClick={() => onSubmit(token, image, title, description, resources, siteUrl, githubUrl)}>Ajouter</S.ButtonPrimary> 
            </div>            
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
)(ProjectFormAdd)

