import styled from 'styled-components';

export const AmountContainer = styled.div`
background-color:${({theme})=> theme["base-button"]};
padding:8px;
border-radius:6px;

display:flex;
justify-content:center;
align-items:center;

button{
border:none;
background-color:transparent;
border-radius: 6px;
color:${({theme})=> theme.purple};
cursor: pointer;
}

.quantity{
  font-size:1rem;
  line-height:130%;
  color:${({theme})=> theme["base-title"]};
}

`