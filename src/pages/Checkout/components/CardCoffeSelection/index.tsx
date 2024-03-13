import { QuantityButton } from "../../../../components/QuantityButton";

import { Trash } from "@phosphor-icons/react";
import { ButtonsContainer, CoffeSelectContainer } from "./style";
import { CartContext, CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useContext } from "react";

interface CoffeeCartCardProps{
  coffee:CartItem
}

export const CardCoffeSelection = ({coffee}:CoffeeCartCardProps) => {
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal);

  const {changeCartItemQuantity,removeCartItem} = useContext(CartContext)

  function handleIncrement(){
    changeCartItemQuantity(coffee.id , 'increment')
  }

  function handleDecrement(){
    changeCartItemQuantity(coffee.id, 'decrement')
  }

  return (
    <>
      <CoffeSelectContainer>
        <img src={coffee.image} alt="" />
        <ButtonsContainer>
        <span className="type-coffe">{coffee.name}</span>
        <div className="types-buttons">
        <QuantityButton 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        quantity={coffee.quantity}
        />
        <button onClick={() =>removeCartItem(coffee.id)}>
          <Trash size={16} color="#8047F8"/>
          REMOVER
        </button>
        </div>
        </ButtonsContainer>
        <strong>R$ {formattedPrice}</strong>
      </CoffeSelectContainer>
    </>
  );
};
