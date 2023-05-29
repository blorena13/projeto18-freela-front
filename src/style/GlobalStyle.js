import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
input {
    font-size: 20px;
    border-radius: 50px;
    border: none;
    outline: none;
    width: calc(100% - 30px);
    padding: 12px;
    margin: 1px;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    } 
}



`;

export default GlobalStyle;