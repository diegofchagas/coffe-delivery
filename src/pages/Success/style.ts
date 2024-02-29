import styled from 'styled-components';

export const SuccessContainer = styled.div`
margin-left:2rem;

h2{
  color:${({theme})=> theme['yellow-dark']};
  font-family: "Baloo 2", sans-serif;
  font-size:2rem;
  font-weight:800;
  line-height:130%;
}

> p{
  font-size:1.25rem;
  color:${({theme})=> theme['base-subtitle']};
  line-height:130%;
}
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: 2fr 1fr;
  margin-top:2.5rem;
  color:${({theme})=> theme['base-text']};
  line-height:130%;
`;

export const DataDeliveryContainer = styled.div`
max-width:33.5rem;
border-radius: 6px 36px;
border:1px solid ${({theme})=> theme.yellow};
padding:2.5rem;
display:flex;
flex-direction:column;
align-items: flex-start;
gap:2rem;
`;

export const DataDeliveryClient = styled.div`
display:flex;
align-items:center;
gap: 0.75rem;
`;