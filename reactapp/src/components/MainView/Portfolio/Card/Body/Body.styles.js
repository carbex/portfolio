import styled from '@emotion/styled'

// Colors kit
const mainColor = 'rgba(131, 234, 241, 1)';

export const Container = styled.div`
  border-top: 1px solid ${mainColor};
  margin-bottom: 40px;
  padding: 20px 10px 10px 10px;
  overflow: hidden;
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

  @media screen and (min-width: 1025px) {
    grid-column: span 3;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 800px) {
    grid-column: span 1;
  }
`
export const SubTitle = styled.h3`
margin: 10px 0 10px;
`
export const Paragraph = styled.p`
  margin: 0 1rem 2rem 1rem;
`
export const Ul = styled.ul`
  padding: 0 2rem 0 2rem;
  margin-bottom: 2rem;
`
export const Link = styled.div`
  color: lightgrey;
  &:hover{
    color: ${mainColor}
  }
`