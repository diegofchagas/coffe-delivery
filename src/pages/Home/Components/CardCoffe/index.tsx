import { ShoppingCartSimple } from "@phosphor-icons/react";
import {CardContainer, CarrinhoButton, FooterContainer } from "./style";
import { QuantityButton } from "../../../../components/QuantityButton";

interface CoffeTypes {
  image: string;
  type: string[];
  name: string;
  description: string;
}

interface CardCoffeProps {
  coffes: CoffeTypes;
}

export const CardCoffe = ({ coffes }: CardCoffeProps) => {

  return (
        <CardContainer>
          <img  src={coffes.image} alt={coffes.name} />
          <div style={{display: 'flex', gap: '.625rem'}}>
          {coffes.type.map(type =><span className="types">{type}</span>)}
          </div>
          <strong>{coffes.name}</strong>
          <p>
          {coffes.description} 
          </p>
          <FooterContainer>
          <small className="price">R$ <strong>9,90</strong></small>
          <QuantityButton/>
          <CarrinhoButton>
          <ShoppingCartSimple size={22} weight="fill" color="white"  />
          </CarrinhoButton>
          </FooterContainer>
        </CardContainer>
  );
};
