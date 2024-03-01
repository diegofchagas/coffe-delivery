import styled from 'styled-components';

export const AdressContainer = styled.div`

h3{
  font-size:1.125rem;
  font-weight:700;
  line-height:130%;
  font-family: "Baloo 2", sans-serif;
  margin-bottom:.938rem;
}
`

export const FormContainer = styled.form`
background-color:${({theme})=> theme['base-card']};
padding:2.5rem;
border-radius: 6px;

display:flex;
flex-direction:column;
gap:2rem;

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
`;

export const InputsContainer = styled.div`
display:flex;
flex-direction:column;
gap:1rem;

 div:nth-child(3){
 display:flex;
 gap: .75rem;
}

div:nth-child(4){
  display:flex;
  gap: .75rem;
}
`;

export const BaseInput = styled.input`
  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-input']};
  border-radius:4px;
  font-size: .875rem;
  line-height:130%;
  padding: .75rem;
  color: ${({ theme }) => theme['base-text']};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  &::placeholder {
    font-size: .875rem;
    color: ${({ theme }) => theme['base-label']};
    line-height: 130%;
  }
`;

export const CepInput = styled(BaseInput)`
width:12.5rem;
`;

export const StreetInput = styled(BaseInput)`
flex:1;
`;

export const NumberInput = styled(BaseInput)`
width:12.5rem;
`;

export const ComplementInput = styled(BaseInput)`
flex:1 0 0;
`;

export const DistrictInput = styled(BaseInput)`
width:12.5rem;
`;


export const CityInput = styled(BaseInput)`
flex:1 0 0;
`;

export const StateInput = styled(BaseInput)`
width: 3.75rem;
`;