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
background:${({theme})=> theme['base-background']};
max-width:33.5rem;
border-radius: 6px 36px;
padding:2.5rem;
display:flex;
flex-direction:column;
align-items: flex-start;
gap:2rem;
position: relative;

&::before{
content:"";
position: absolute;
inset:-1px;
z-index:-1;
border-radius: 7px 37px;
background:linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
}
`;

export const DataDeliveryClient = styled.div`
display:flex;
align-items:center;
gap: 0.75rem;
`;