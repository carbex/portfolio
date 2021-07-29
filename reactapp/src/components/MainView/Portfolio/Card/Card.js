import React, { useRef } from 'react'
import Body from './Body/Body'
import * as S from './Card.styles'

function Card(props) {

  // Default props
  const {
    index,
    onProjectClick,
    visible = false,
    imageUrl = '',
    title = '',
    description = '',
    resources = [],
    githubUrl = '',
    siteUrl = ''
  } = props

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })

  const handleClick = () => {
    const myProm = new Promise(function (resolve, reject) {
      onProjectClick(index)
      resolve();
    });
    myProm.then(() => {
      executeScroll()
    });
  }

  return (
    <>
      <S.Container onClick={handleClick} ref={myRef}>
        <S.ImageContainer>
          <S.Image src={imageUrl ? imageUrl : "http://via.placeholder.com/700x525"} alt={title} />
        </S.ImageContainer>
        <S.TitleContainer visible={visible}>
          <S.Title visible={visible}>{title}</S.Title>
        </S.TitleContainer>
      </S.Container>
      <Body visible={visible} description={description} resources={resources} githubUrl={githubUrl} siteUrl={siteUrl} />
    </>
  )
}

export default Card
