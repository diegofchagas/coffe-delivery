import styled from 'styled-components';

export const CompleteOrderContainer = styled.div`
  width:40rem;
  display:flex;
  flex-direction:column;
  gap: .75rem;
  
  @media (max-width:900px) {
    max-width: 35rem;
  }
`;
