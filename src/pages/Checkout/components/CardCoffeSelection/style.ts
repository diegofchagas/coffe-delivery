import styled from 'styled-components';

export const CoffeSelectContainer = styled.div`
  background-color:${({theme})=> theme['base-card']};
  display:flex;
  justify-content:space-between;
  align-items: flex-start;
  align-self: stretch;
  padding:8px 4px;
  margin-bottom:1rem;
  gap:1rem;
  position: relative;

  &::after{
    content:"";
    width:368px;
    height:1px;
    border-bottom: 1px solid ${({theme})=> theme['base-button']};
    position: absolute;
    top:60px;
    margin-block:1.5rem;
  }

  img{
    width:4rem;
    height:4rem;
  }

  strong{
    font-size:1rem;
    color:${({theme})=> theme['base-text']};
    font-weight:700;
    line-height:130%;
  }
`;

export const ButtonsContainer = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
gap:8px;

.types-buttons{
  display:flex;
  gap:8px;
}


.type-coffe{
    font-size:1rem;
    line-height:130%;
    color:${({theme})=> theme['base-subtitle']};
    font-weight:500;
  }

  button{
    background-color:${({theme})=> theme['base-button']};
    font-size:.75rem;
    line-height: 160%;
    border:none;
    border-radius:6px;
    display:flex;
    align-items:center;
    padding:0px 8px;
    gap:4px;
    cursor: pointer;
  }

`;
