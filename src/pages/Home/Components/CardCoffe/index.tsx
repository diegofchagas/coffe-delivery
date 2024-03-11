import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CardContainer, CardFooter, CarrinhoButton } from "./style";
import { QuantityButton } from "../../../../components/QuantityButton";
import { formatMoney } from "../../../../utils/formatMoney";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export interface CoffeTypes {
  id: number;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

interface CardCoffeProps {
  coffes: CoffeTypes;
}

export const CardCoffe = ({ coffes }: CardCoffeProps) => {
  const [ quantity, setQuantity] = useState(1);

  const { addCoffeeToCart } = useContext(CartContext);

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleDecrement() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleToCart() {
    const coffeeToAdd = {
      ...coffes,
      quantity
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = formatMoney(coffes.price);

  return (
    <CardContainer>
      <img src={coffes.image} alt={coffes.name} />
      <div style={{ display: "flex", gap: ".625rem" }}>
        {coffes.type.map((type) => (
          <span className="types">{type}</span>
        ))}
      </div>
      <strong>{coffes.name}</strong>
      <p>{coffes.description}</p>
      <CardFooter>
        <small className="price">
          R$ <strong>{formattedPrice}</strong>
        </small>
        <QuantityButton
        onIncrement={handleIncrement}
        onDecrement ={handleDecrement}
        quantity={quantity}
        />
        <CarrinhoButton onClick={handleToCart}>
          <ShoppingCartSimple size={22} weight="fill" color="white" />
        </CarrinhoButton>
      </CardFooter>
    </CardContainer>
  );
};
