import React from 'react'
import * as AiIcons from "react-icons/ai"
import * as S from './SocialNetworks.styles'
import { Link } from 'react-router-dom'

function SocialNetworks() {
    return (
        <S.IconContainer>
                <Link to={{ pathname: "https://www.linkedin.com/in/alex-duchemin/" }} target="_blank">
                    <S.Icon title='Mon LinkedIn'>
                        <AiIcons.AiOutlineLinkedin />
                    </S.Icon>
                </Link>
                <Link to={{ pathname: "https://github.com/carbex" }} target="_blank">
                    <S.Icon title='Mon Github'>
                        <AiIcons.AiOutlineGithub />
                    </S.Icon>
                </Link>
                <Link to="/images/CvAlexDuchemin.pdf" target="_blank" download>
                    <S.Icon title='Mon CV'>
                        <AiIcons.AiOutlineFilePdf />
                    </S.Icon>
                </Link>
            </S.IconContainer>
    )
}

export default SocialNetworks
