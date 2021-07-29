import React from 'react'
import * as S from './Body.styles'
import { Link } from 'react-router-dom'

function Body(props) {

  // Default props
  const {
    description = '',
    resources = [],
    githubLink = '',
    siteLink = '',
    visible = false
  } = props

  let resourcesList = resources.map((resource, index) => <li key={index}>{resource}</li> )

  return (
    <S.Container visible={visible}>
      <S.SubTitle>A propos du projet</S.SubTitle>
      <S.Paragraph>
        {description}
      </S.Paragraph>
      <S.SubTitle>Fiche technique</S.SubTitle>
      <ul>
        {resourcesList}
      </ul>
      <S.SubTitle>Ressources</S.SubTitle>      
      <S.Paragraph style={{display: 'flex', flexDirection: 'column'}}>
        {siteLink && <Link to={{ pathname: siteLink }} target="_blank">Lien du site</Link>}
        {githubLink && <Link to={{ pathname: githubLink }} target="_blank">Lien Github</Link>}
        
      </S.Paragraph>
    </S.Container>
  )
}

export default Body