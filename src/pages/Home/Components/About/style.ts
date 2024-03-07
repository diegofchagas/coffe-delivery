import styled from 'styled-components';
import aboutBackground from '../../../../assets/about-background.svg'


export const Container = styled.div`
  width:100%;
  background: ${() => `url(${aboutBackground}) no-repeat center,
  linear-gradient(0deg, #fff 0%, rgba(250, 250, 250, 0.2) 50%, #fafafa 100%)
  `};
  background-size:cover;
  margin-bottom:9rem;
`;

export const ContainerAbout = styled.section`
  width:100%;
  max-width:1120px;
  margin-right: auto;
  margin-left: auto;
  margin-top:5rem;
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
width:100%;
display:grid;
grid-template-columns: 1fr 1fr;
row-gap:1.25rem;
margin-top:-4.125rem;
`;