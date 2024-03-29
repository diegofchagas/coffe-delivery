import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family: "Roboto", sans-serif;
  //font-family: "Baloo 2", sans-serif;
  background-color:${({theme})=> theme["base-background"]};
  color:${({theme})=> theme["base-text"]};
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
}

button,input{
  font-family: "Roboto", sans-serif;
}

@media (max-width:768px) {
  html{
    font-size: 87.5%;
  }
}
`;
