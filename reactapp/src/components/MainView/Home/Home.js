import React from 'react'
// import * as AiIcons from "react-icons/ai"
import * as S from './Home.styles'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <S.Container>
            <S.Title>Salut, moi c'est <S.Name>Alex</S.Name></S.Title>
            <S.SubTitle>Je suis Développeur Web Javascript Full-Stack</S.SubTitle>
            <p>
                N'hésite pas à consulter mes projets !
            </p>
            <div className='d-flex justify-content-center w-100'>
                <Link to="/portfolio">
                    <S.Button type="button">
                        <span>Mes projets</span>
                    </S.Button>
                </Link>
            </div>
        </S.Container>
    )
}

export default Home
