import styled from 'styled-components';

export const AmountContainer = styled.div`
background-color:${({theme})=> theme["base-button"]};
padding:.5rem;
border-radius:6px;


display:flex;
justify-content:center;
align-items:center;
gap:4px;


.quantity{
  font-size:1rem;
  line-height:130%;
  color:${({theme})=> theme["base-title"]};
}

`;

export const Button = styled.button`
border:none;
background-color:transparent;
border-radius: 6px;
color:${({theme})=> theme.purple};
cursor: pointer;
`;