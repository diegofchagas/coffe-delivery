import styled from 'styled-components';

export const ButtonContainer = styled.button`
padding:.75rem 2.8rem;
color:${({theme})=> theme.white};
font-weight:700;
background:${({theme})=> theme.yellow};
font-size: .875rem;
border:none;
border-radius:6px;
text-transform:uppercase;
transition:.3s;
line-height:130%;
cursor: pointer;

&:disabled{
  opacity:0.7;
  cursor: not-allowed;
}

&:not(:disabled):hover{
  background:${({theme})=> theme['yellow-dark']};
}
`;
