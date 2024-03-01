import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 16rem;
  padding: .625rem 1.25rem;
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  img {
    margin-top: -2rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  .types {
    background-color: ${({ theme }) => theme["yellow-light"]};
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme["yellow-dark"]};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme["base-label"]};
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-text"]};
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    padding-right: 18px;
  }
`;

export const CarrinhoButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme["purle-dark"]};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
`;
