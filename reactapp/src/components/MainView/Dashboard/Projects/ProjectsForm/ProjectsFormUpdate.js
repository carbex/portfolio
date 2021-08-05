import React, { useState, useEffect } from 'react'
import * as S from './ProjectsForm.styles'

function ProjectFormUpdate(props) {

    // Default props
    const {
        project = {},
        onSubmit,
        unSetModal
    } = props

    // States
    const [id, setId] = useState()
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [resources, setResources] = useState()
    const [siteUrl, setSiteUrl] = useState()
    const [githubUrl, setGithubUrl] = useState()

    useEffect(() => {
        setId(project._id)
        setImageUrl(project.imageUrl)
        setTitle(project.title)
        setDescription(project.description)
        setResources(project.resources)
        setSiteUrl(project.siteUrl)
        setGithubUrl(project.githubUrl)
    },
    [
        project._id,
        project.imageUrl,
        project.title,
        project.description,
        project.resources,
        project.siteUrl,
        project.githubUrl
    ])

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImageUrl(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    return (
        <S.Container>
            <h3>Modification de projet</h3>
            <S.ImageContainer>
                <S.Image src={imageUrl} alt={project.title} />
            </S.ImageContainer>   
            <label htmlFor="image">Image (.SVG, .TIFF, .PNG, .GIF, .JPGs, .WebPs)</label>
            <S.File onChange={e => onImageChange(e)} type="file" name="image" />
            <label>Titre*</label>
            <S.Input type='text' defaultValue={project.title} placeholder='Titre' onChange={e => setTitle(e.target.value)} />
            <label>Description*</label>
            <S.Textarea type='textarea' defaultValue={project.description} placeholder='Description' onChange={e => setDescription(e.target.value)} />
            <label>Fiche technique*</label>
            <S.Input type="text" defaultValue={project.resources.join('/')} placeholder='HTML/CSS/REACT/MONGOOSE' onChange={e => setResources(e.target.value)} />
            <label>Liens du site</label>
            <S.Input type="text" defaultValue={project.siteUrl} placeholder='Lien du site' onChange={e => setSiteUrl(e.target.value)} />
            <label>Liens github</label>
            <S.Input type="text" defaultValue={project.githubUrl} placeholder='Lien github' onChange={e => setGithubUrl(e.target.value)} />
            <div style={{ display: 'flex', justifyContent: 'start' }}>
                <S.ButtonSecondary onClick={() => unSetModal()}>Abandonner</S.ButtonSecondary>
                <S.ButtonPrimary onClick={() => onSubmit(id, project.imageUrl, image, title, description, resources, siteUrl, githubUrl)}>Modifier</S.ButtonPrimary>
            </div>
        </S.Container>
    )
}

export default ProjectFormUpdate
