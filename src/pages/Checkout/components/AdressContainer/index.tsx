import {MapPinLine} from "@phosphor-icons/react";

import {AdressContainer,FormContainer,InputsContainer,CepInput,StateInput,StreetInput,NumberInput,ComplementInput, DistrictInput, CityInput} from './style'

export const AdressContainerComponent = () => {
  return (
    <AdressContainer>
    <h3>Complete seu pedido</h3>
    <FormContainer>
      <header>
        <p>
          <MapPinLine size={22} color="#C47F17" />
          Endereço de Entrega
        </p>
        <span>Informe o endereço onde deseja receber seu pedido</span>
      </header>
      <InputsContainer>
        <CepInput type="number" placeholder="CEP" />
        <StreetInput type="text" placeholder="Rua" />
        <div>
          <NumberInput type="number" placeholder="Número" />
          <ComplementInput type="text" placeholder="Complemento" />
        </div>
        <div>
          <DistrictInput type="text" placeholder="Bairro" />
          <CityInput type="text" placeholder="Cidade" />
          <StateInput type="text" placeholder="UF" />
        </div>
      </InputsContainer>
    </FormContainer>
  </AdressContainer>
  )
}
