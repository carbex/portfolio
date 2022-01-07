import styled from '@emotion/styled'

// Colors kit
// const mainColor = 'rgba(131, 234, 241, 1)';

// Styled-components
export const Container = styled.div`
  scroll-margin: 1.2rem;
  cursor: pointer;
  margin-bottom: 4rem;
`
export const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  border-radius: 4px;
  border: 1px solid white;
  opacity: 1;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;


  &:hover{
    opacity: 0.8;
  }
`
export const Title = styled.h2`
  padding: 0;
  color: ${p => p.visible ? 'rgba(131, 234, 241, 1)' : '#fff'};
  margin: 10px 0 10px;
`
export const Date = styled.p`
  border: 1px solid white;
  border-radius: 4px 4px 0 0;
  background-color: transparent;
  position: absolute;
  top: -28px;
  right: 0px;
  font-size: 0.6rem;
  font-weight: 500;
  padding: 2px 2px 0 2px;
  color: ${p => p.visible ? 'rgba(131, 234, 241, 1)' : '#FFF'};
  margin: 10px 0 10px;
`

export const TitleContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;

  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    left: calc(50% - 10px);
    bottom: -64px ;
    border-width: 10px 10px 0 10px;
    transform:  rotate(180deg);
    border-color: ${p => p.visible ? 'rgba(131, 234, 241, 1)' : 'transparent'} transparent transparent transparent;
    display: ${p => p.visible ? 'display: block' : 'none'};

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 1s; /* Firefox < 16 */
      -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
          animation: fadein 1s;

        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
  }
`
export const SubTitle = styled.h3`
  color: ${p => p.visible ? 'rgba(131, 234, 241, 1)' : '#fff'};
`
export const Description = styled.div``

export const ImageContainer = styled.div`
  position: relative;
`