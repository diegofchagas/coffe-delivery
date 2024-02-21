import styled from 'styled-components';

export const ChekoutContainer = styled.section`
  display:grid;
  grid-template-columns: 2fr 1fr;
  gap:2rem;
  margin-top:2.5rem;
`;



export const CoffeSelected = styled.div`
h3{
  font-size:1.125rem;
  font-weight:700;
  line-height:130%;
  font-family: "Baloo 2", sans-serif;
  margin-bottom:.938rem;
}
`;

export const SelectContainer = styled.div`
width:28rem;
background-color:${({theme})=> theme['base-card']};
padding: 2.5rem;
border-radius: 6px;
border-radius: 6px 44px;
`
export const Footer = styled.div`
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
gap:1rem;

.value{
  text-align:right;
  font-size:.875rem;
  line-height:130%;
  color:${({theme})=> theme['base-text']};
  font-weight: 400;
}

strong, strong.value{
  font-size:1.25rem;
  color:${({theme})=> theme['base-subtitle']};
  font-weight:700;
  line-height:130%;
}


`

export const ConfirmOrder = styled.button`
  grid-column:1 / -1;
  width:100%;
  border:none;
  background-color:${({theme})=> theme.yellow};
  border-radius:6px;
  padding:12px 8px;
  color:${({theme})=> theme.white};
  font-size:.875rem;
  font-weight:700;
  line-height:160%;
  text-transform:uppercase;
  cursor: pointer;
  transition:background-color 1s;
  
  &:hover{
  background-color:${({theme})=> theme['yellow-dark']};
  }
`;


export const PaymentsContainer = styled.div`
background-color:${({theme})=> theme['base-card']};
padding:2.5rem;
border-radius: 6px;
margin-top:-4.5rem;

p{
  color:${({theme})=> theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  display:flex;
  align-items:center;
  gap:8px;
}

span{
  color:${({theme})=> theme['base-text']};
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  margin-left:1.8rem;
}

div{
  display:flex;
  gap:.75rem;
  margin-top:2rem;
}
`;


