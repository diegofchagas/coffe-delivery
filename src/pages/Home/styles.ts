import styled from "styled-components";

export const ContainerHome = styled.main`
  margin-bottom:9.8rem;
  margin-inline: 3rem;


  h2{
  font-family: "Baloo 2", sans-serif;
  font-size:2rem;
  font-weight:800;
  line-height:130%;
  }

  .cards-coffes-types {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap:2rem;
    row-gap:1.5rem;
    margin-top:1rem;
  }

  @media (max-width:1000px) {
    .cards-coffes-types{
      grid-template-columns: repeat(3, 1fr);
    } 
  }

  @media (max-width:768px) {
    .cards-coffes-types{
      grid-template-columns: repeat(2, 1fr);
    } 
  }

  @media (max-width:500px) {
    .cards-coffes-types{
      grid-template-columns: 1fr;
    } 
  }
`;
