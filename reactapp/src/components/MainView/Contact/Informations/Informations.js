import React, { useState } from 'react'
import * as S from './Informations.styles'

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

function Informations() {

    const info = {
        phone: '06 03 00 53 25',
        email: 'alexduchemin@free.fr',
        address: 'Boulogne-Billancourt'
    }

    const [copyMessage, setCopyMessage] = useState({ phone: '', email: '' })

    const copyToClipboard = (arg, type) => {
        navigator.clipboard.writeText(arg)
        if (type === 'phone') {
            setCopyMessage({ ...copyMessage, phone: 'Copié' });
        } else if (type === 'email') {
            setCopyMessage({ ...copyMessage, email: 'Copié' });
        }
        setTimeout(() => setCopyMessage({ ...copyMessage, phone: '', email: '' }), 1000)
    };

    return (
        <S.Container>
            <S.InfoContainer>
                <S.IconContainer>
                    <S.ClicableIcon onClick={() => copyToClipboard(info.phone, 'phone')}>
                        <AiIcons.AiOutlinePhone style={{ padding: '0 0 18px 0' }} />
                    </S.ClicableIcon>
                </S.IconContainer>
                <S.Copied>{copyMessage.phone}</S.Copied>
                <S.Info>
                    <h3 style={{ color: 'rgba(131, 234, 241)', marginTop: 16 }}>Téléphone</h3>
                    <p>{info.phone}</p>
                </S.Info>
            </S.InfoContainer>
            <S.InfoContainer>
                <S.IconContainer>
                    <S.ClicableIcon onClick={() => window.location.href = `mailto:${info.email}`}>
                        <AiIcons.AiOutlineMail style={{ padding: '0 0 18px 0' }} />
                    </S.ClicableIcon>
                </S.IconContainer>
                <S.Info>
                    <h3 style={{ color: 'rgba(131, 234, 241)', marginTop: 16 }}>Email</h3>
                    <p >{info.email}</p>
                </S.Info>
            </S.InfoContainer>
            <S.InfoContainer>
                <S.IconContainer>
                    <S.UnclicableIcon>
                        <FaIcons.FaCity style={{ padding: '0 6px 18px 6px' }} />
                    </S.UnclicableIcon>
                </S.IconContainer>
                <S.Info>
                    <h3 style={{ color: 'rgba(131, 234, 241)', marginTop: 16 }}>Lieu</h3>
                    <p>Boulogne-Billancourt</p>
                </S.Info>
            </S.InfoContainer>
        </S.Container>
    )
}

export default Informations
