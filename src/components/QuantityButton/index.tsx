import { Plus, Minus } from "@phosphor-icons/react";
import { AmountContainer, Button } from "./style";

interface QuantityButtonProps{
  onIncrement: () => void;
  onDecrement: () => void;
  quantity:number
}

export const QuantityButton = ({onIncrement,onDecrement,quantity}:QuantityButtonProps) => {

  return (
    <AmountContainer>
      <Button type="button" disabled={quantity <= 1} onClick={onDecrement}>
        <Minus size={14} weight="bold" />
      </Button>
      <span className="quantity">{quantity}</span>
      <Button type="button" onClick={onIncrement}>
        <Plus size={14} weight="bold" />
      </Button>
    </AmountContainer>
  );
};
