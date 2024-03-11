import styled from "styled-components";

export const CoffeSelectedContainer = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    margin-bottom: 0.938rem;
  }

  > div {
    width: 28rem;
    background-color: ${({ theme }) => theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;
    border-radius: 6px 44px;
  }
`;
