import styled from 'styled-components';

export const HeaderContainer = styled.header`
padding:2rem;
display:flex;
justify-content:space-between;
`;

export const NavContainer = styled.div`
  display:flex;
  align-items:center;
  gap:12px;
`;

export const LocalizacaoContainer = styled.div`
  background-color:${({theme})=> theme['purple-light']};
  border-radius: 6px;
  padding:8px;
  display:flex;
  align-items:center;
  gap:4px;

  span{
    font-size:.875rem;
    line-height:130%;
    color:${({theme})=> theme['purle-dark']};
    font-weight: 400;
    
  }
`
;