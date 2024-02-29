import { Plus, Minus } from "@phosphor-icons/react";
import { AmountContainer, Button } from "./style";

export const QuantityButton = () => {
  return (
    <AmountContainer>
      <Button>
        <Minus size={14} weight="bold" />
      </Button>
      <span className="quantity">2</span>
      <Button>
        <Plus size={14} weight="bold" />
      </Button>
    </AmountContainer>
  );
};
