import styled from "styled-components";

export const AdressContainer = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
    margin-bottom: 0.938rem;
  }
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  header span {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    margin-left: 1.8rem;
  }

  .error {
    color: ${({ theme }) => theme["yellow-dark"]};
    font-size: 0.7rem;
    text-align: initial;
    margin-top: -0.8rem;
    display: block;
  }

  @media (max-width:900px) {
    padding:2rem;
    gap:1.5rem;
  }
`;
