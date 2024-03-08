import styled from 'styled-components';

export const InputStyle = styled.input`
  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-input"]};
  border-radius: 4px;
  font-size: 0.875rem;
  line-height: 130%;
  padding: 0.75rem;
  color: ${({ theme }) => theme["base-text"]};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme["yellow-dark"]};
  }

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-label"]};
    line-height: 130%;
  }
  
`;
