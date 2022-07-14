import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family:'Roboto', sans-serif ;
    
    

}

html{
    display: flex;
    justify-content: center;
    background-color: silver;
    width: 100vw
}

body {
    width: 1400px;
    display: flex;   
    justify-content: center;
    
}



`;

export default GlobalStyle;
