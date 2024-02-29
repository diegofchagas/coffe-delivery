import styled from 'styled-components';

export const ContainerAbout = styled.section`
  margin-top:5rem;
  margin-bottom:9rem;
  display:grid;
  grid-template-columns: 2fr 1fr;
 
  
  img{
    grid-column:2;
  }
`;

export const Banner = styled.div`
display:flex;
flex-direction:column;
gap:1rem;

h1{
  color:${({theme})=> theme['base-title']};
  font-size:3rem;
  font-family: "Baloo 2", sans-serif;
  line-height:130%;
  font-weight: 800;
}

p{
  color:${({theme})=> theme['base-subtitle']};
  font-size:1.25rem;
  font-weight: 400;
  line-height:130%;
}

`;

export const InfoContainer = styled.div`
max-width:560px;
display:flex;
align-items:center;
gap:1rem;
flex-wrap:wrap;
margin-top:-4rem;



img{
  margin-top:-2rem;
}

span{
  color:${({theme})=> theme['base-text']};
  font-size:1rem;
  font-weight: 400;
  line-height: 130%;
  margin-bottom:2rem;
  
}
`;