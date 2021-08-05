import '../../../Global.scss';
import React, { useState, useEffect } from 'react'
import Card from './Card/Card'
import * as S from './Portfolio.styles'
import { dynamicSort } from '../../Functions/Functions'

function Portfolio() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      let rawResponse = await fetch('/projects/get')
      let response = await rawResponse.json()
      response.result ? setProjects(response.projects.map(project => {
        return { ...project, visible: false }
    }).sort(dynamicSort('creationDate')).reverse()) : alert(`${response.error}`)
    }
    loadProjects()
    setLoading(false)
  }, [])

  const handleProjectClick = (index) => {    
    setProjects(projects.map((project, i ) => {
      if(i === index) {
        if(project.visible === false) {
          return { ...project, visible: true }
        } else {
          return { ...project, visible: false }
        }
      } else {
        return { ...project, visible: false }
      }
    }))
  }

  const listProjects = projects.map((project, index) => {
    return <Card
      key={project._id}
      index={index}
      visible={project.visible}
      imageUrl={project.imageUrl}
      title={project.title}
      description={project.description}
      resources={project.resources}
      githubUrl={project.githubUrl}
      siteUrl={project.siteUrl}
      creationDate={project.creationDate}
      onProjectClick={handleProjectClick}
    />
  })

  return (
    <S.Container>
      <S.PageTitle>MES PROJETS</S.PageTitle>
      {loading && <S.SubTitle>Chargement...</S.SubTitle>}
      <S.Portfolio>
        {listProjects}
      </S.Portfolio>
    </S.Container>
  );
}

export default Portfolio;