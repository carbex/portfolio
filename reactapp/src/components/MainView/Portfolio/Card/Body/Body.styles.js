import styled from '@emotion/styled'

// Colors kir
const mainColor = 'rgba(131, 234, 241, 1)';

export const Container = styled.div`
  border-top: 1px solid ${mainColor};
  padding: 10px;
  margin-bottom: 40px;
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

  @media screen and (min-width: 992px) {
      grid-column: span 3;
  }
  @media screen and (min-width: 576px) and (max-width: 992px) {
      grid-column: span 2;
  }
  @media screen and (max-width: 576px) {
      grid-column: span 1;
  }
`
export const SubTitle = styled.h3``
export const Paragraph = styled.p``