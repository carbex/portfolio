import React from 'react'
import * as S from './Body.styles'
import { Link } from 'react-router-dom'

function Body(props) {

  // Default props
  const {
    description = '',
    resources = [],
    githubUrl = '',
    siteUrl = '',
    visible = false
  } = props

  let resourcesList = resources.map((resource) => <li key={resource}>{resource}</li>)

  return (
    <S.Container visible={visible}>
      <S.SubTitle>A propos du projet</S.SubTitle>
      <S.Paragraph>
        {description}
      </S.Paragraph>
      <S.SubTitle>Fiche technique</S.SubTitle>
      <S.Ul>
        {resourcesList}
      </S.Ul>
      <S.SubTitle>Ressources</S.SubTitle>
      <S.Paragraph style={{ display: 'flex', flexDirection: 'column' }}>
        {siteUrl && <Link to={{ pathname: siteUrl }} target="_blank">Lien du site</Link>}
        {githubUrl && <Link to={{ pathname: githubUrl }} target="_blank">Lien Github</Link>}
      </S.Paragraph>
    </S.Container>
  )
}

export default Body