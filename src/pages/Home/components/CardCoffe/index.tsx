import { ShoppingCartSimple,Plus, Minus } from "@phosphor-icons/react";
import { AmountContainer, CardContainer, CarrinhoButton, FooterContainer } from "./style";

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
          <AmountContainer>
            <button>
            <Minus size={14} weight="bold" />
            </button>
            <span className="quantity">2</span>
            <button>
            <Plus size={14} weight="bold" />
            </button>
          </AmountContainer>
          <CarrinhoButton>
          <ShoppingCartSimple size={22} weight="fill" color="white"  />
          </CarrinhoButton>
          </FooterContainer>
        </CardContainer>
  );
};
