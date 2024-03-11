import { ShoppingCartSimple } from "@phosphor-icons/react";
import {CardContainer, CardFooter, CarrinhoButton } from "./style";
import { QuantityButton } from "../../../../components/QuantityButton";
import { formatMoney } from "../../../../utils/formatMoney";


export interface CoffeTypes {
  id:number,
  image: string;
  type: string[];
  name: string;
  description: string;
  price:number
}

interface CardCoffeProps {
  coffes: CoffeTypes;
}

export const CardCoffe = ({ coffes }: CardCoffeProps) => {
 const formattedPrice = formatMoney(coffes.price)

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
          <CardFooter>
          <small className="price">R$ <strong>{formattedPrice}</strong></small>
          <QuantityButton/>
          <CarrinhoButton>
          <ShoppingCartSimple size={22} weight="fill" color="white"  />
          </CarrinhoButton>
          </CardFooter>
        </CardContainer>
  );
};
