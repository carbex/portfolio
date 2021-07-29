import React from 'react'
import * as S from './About.styles'
// import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className='container' style={{ maxWidth: '1024px' }}>
                <div className="row">
                    <S.PageTitle>PROFIL</S.PageTitle>
                    <div className='col col-12 col-md-4 mb-4'>
                        <S.ImageContainer><S.Image></S.Image></S.ImageContainer>
                    </div>
                    <div className='col col-12 col-md-8 mb-4 d-flex flex-column justify-content-between'>
                        <div>
                            <S.SubTitle>Qui suis-je ?</S.SubTitle>
                            <S.Text>
                                Je suis un "jeune" développeur <b>passionné</b> par l'informatique et le digital.<br />
                                J'ai commencé à coder il y a trois ans grâce à des tutos et des cours en ligne, puis j'ai décidé de suivre une formation diplômante à
                                <Link to={{ pathname: "https://www.lacapsule.academy/" }} target="_blank" style={{ textDecoration: 'none' }}>
                                    <S.LinkText> La Capsule</S.LinkText>
                                </Link> : un bootcamp qui dispense une formation <b>intensive</b> orientée sur la <b>pratique</b>.<br />
                                J'y ai acquis non seulement de nouvelles connaissances en codage mais aussi en gestion de projet.<br />
                                Aujourd'hui, convaincu par mon choix de <b>reconversion</b>, je recherche activement une entreprise qui saurait me faire <b>confiance</b> et m'aider à monter en <b>compétence</b>.
                            </S.Text>
                            <S.SubTitle>Pourquoi je code ?</S.SubTitle>
                            <S.Ul>
                                <li>Parce que c'est un <b>challenge</b> à chaque nouveau projet.</li>
                                <li>Parce que je transforme des problèmes en solutions <b>simples</b>, <b>logiques</b> et <b>fonctionnelles</b>.</li>
                                <li>Parce que je n'arrête jamais d'<b>apprendre</b>.</li>
                                <li>Parce que j'aime tellement ça que je ne vois <b>pas</b> le temps passer.</li>
                            </S.Ul>
                            <S.SubTitle>Mes compétences ?</S.SubTitle>
                            <S.Text>
                                J'ai de solides connaissances en <b>HTML</b>, <b>CSS</b>, <b>JAVASCRIPT</b>, <b>REACT</b>, <b>REACT-NATIVE</b>, <b>NODE</b>, <b>EXPRESS</b>, <b>MONGODB</b> et j'ai également quelques notions en <b>PHP</b> et <b>MYSQL</b> que je ne demande qu'à approfondir.<br />
                            </S.Text>
                            <S.SubTitle>Et quand je ne code pas ?</S.SubTitle>
                            <S.Text>
                                Je pratique différents sports de glisse comme le wake-board ou le kite-surf pour ne citer qu'eux, et dès que j'en ai l'occasion, je découvre avec plaisir les fonds marins de mes destinations de voyage !
                            </S.Text>
                        </div>
                        <Link to="/images/CvAlexDuchemin.pdf" target="_blank" download>
                            <S.Button type="button">
                                Téléchargez mon CV
                            </S.Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About