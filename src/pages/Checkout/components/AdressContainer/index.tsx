import { MapPinLine } from "@phosphor-icons/react";
import { InputsContainer } from "./InputsContainer";
import {AdressContainer,FormContainer,} from "./style";

export const AdressContainerComponent =() => {
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
          <InputsContainer/>
        </FormContainer>
      </AdressContainer>
    );
  };
