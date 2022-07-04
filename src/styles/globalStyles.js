import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
  #root {
    font-family: Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 
    'Segoe UI Symbol', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    font-size: 16px;
  }
  html, body, #app, #app>div {
  height: 100%
}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 a{
  text-decoration: none;
  &:visited{
    color: transparent;
  }
 }
`;

export default GlobalStyles;
