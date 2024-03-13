import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  padding: 1.5rem 0rem;
  width:100%;
  position:relative;
  img#bg{
    position: absolute;
    top: 0;
    left: 0;
    max-height: 500px;
    width: 100vw;
    object-fit: cover;
  }
  margin-bottom:8rem;
  background: no-repeat center,
  linear-gradient(180deg, #fff 0%, rgba(250, 250, 250, 0.2) 50%, #fafafa 100%);
`;

export const ContainerAbout = styled.section`
  width:100%;
  max-width:1120px;
  margin-right: auto;
  margin-left: auto;
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
margin-top:-4rem;
`;