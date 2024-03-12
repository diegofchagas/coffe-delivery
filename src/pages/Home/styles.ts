import styled from "styled-components";

export const ContainerHome = styled.main`
  margin-bottom:9.8rem;

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
    margin-top:3rem;
  }
`;
