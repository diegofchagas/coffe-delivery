import styled from 'styled-components';

export const Button = styled.button`
border:none;
background-color:${({theme})=> theme['base-button']};
border-radius:6px;
padding:1rem;
display:flex;
align-items:center;
gap:.75rem;
color:${({theme})=> theme['base-text']};
font-size:.75rem;
font-weight:400;
line-height:160%;
text-transform:uppercase;
cursor: pointer;
flex:1;
transition: background-color 1s;

&:hover{
  background-color:${({theme})=> theme['base-hover']};
}

svg{
  color:${({theme})=> theme.purple};
}
`;
