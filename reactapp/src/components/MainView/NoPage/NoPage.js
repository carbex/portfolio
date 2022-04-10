import React from 'react'
import * as S from './NoPage.styles'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <S.Container>
    
            <S.Title><S.Name>404</S.Name></S.Title>
            <S.SubTitle>PAGE NOT FOUND</S.SubTitle>
            <p>La page recherchée a été soit déplacée, soit enlevée ou n'a jamais existé</p>
            <div className='d-flex justify-content-center w-100'>
                <Link to="/">
                    <S.Button type="button">
                        <span>Accueil</span>
                    </S.Button>
                </Link>
                <Link to="/contact">
                    <S.Button type="button">
                        <span>Contact</span>
                    </S.Button>
                </Link>
            </div>
        </S.Container>
  )
}

export default NoPage