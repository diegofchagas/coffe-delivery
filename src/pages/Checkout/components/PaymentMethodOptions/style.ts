import styled from 'styled-components';

export const PaymentsContainer = styled.div`
background-color:${({theme})=> theme['base-card']};
padding:2.5rem;
border-radius: 6px;

p{
  color:${({theme})=> theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  display:flex;
  align-items:center;
  gap:8px;
}

span{
  color:${({theme})=> theme['base-text']};
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  margin-left:1.8rem;
}

div{
  display:flex;
  gap:.75rem;
  margin-top:2rem;
}
`;
