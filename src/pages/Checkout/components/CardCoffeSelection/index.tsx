import tradicional from "../../../../assets/coffes/expresso-tradicional.svg";
import latte from "../../../../assets/coffes/late.svg";

import { QuantityButton } from "../../../../components/QuantityButton";

import { Trash } from "@phosphor-icons/react";
import { ButtonsContainer, CoffeSelectContainer } from "./style";

export const CardCoffeSelection = () => {
  return (
    <>
      <CoffeSelectContainer>
        <img src={tradicional} alt="" />
        <ButtonsContainer>
        <span className="type-coffe">Expresso Tradicional</span>
        <div className="types-buttons">
        <QuantityButton />
        <button>
          <Trash size={16} color="#8047F8"/>
          REMOVER
        </button>
        </div>
        </ButtonsContainer>
        <strong>R$ 9,90</strong>
      </CoffeSelectContainer>
      <CoffeSelectContainer>
        <img src={latte} alt="" />
        <ButtonsContainer>
        <span className="type-coffe">Latte</span>
        <div className="types-buttons">
        <QuantityButton />
        <button>
          <Trash size={16} color="#8047F8"/>
          REMOVER
        </button>
        </div>
        </ButtonsContainer>
        <strong>R$ 9,90</strong>
      </CoffeSelectContainer>
    </>
  );
};
