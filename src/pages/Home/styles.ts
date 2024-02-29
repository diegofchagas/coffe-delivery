import styled from "styled-components";

export const ContainerHome = styled.main`
  margin-left: 2rem;

  h2{
  font-family: "Baloo 2", sans-serif;
  font-size:2rem;
  font-weight:800;
  line-height:130%;
  }

  .cards-coffes-types {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
