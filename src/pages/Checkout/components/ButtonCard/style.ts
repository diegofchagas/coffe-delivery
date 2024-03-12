import styled from 'styled-components';

interface ButtonStyleProps{
  selected: boolean
}

export const Button = styled.button<ButtonStyleProps>`
border:none;
background-color:${({theme, selected})=> selected ? theme['purple-light']: theme['base-button']};
border:1px solid ${({theme, selected})=> selected ? theme['purple'] : theme['base-button']};
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


&:hover{
  background-color:${({theme,selected})=> selected ? "" : theme['base-hover']};
}

svg{
  color:${({theme})=> theme.purple};
}
`;
