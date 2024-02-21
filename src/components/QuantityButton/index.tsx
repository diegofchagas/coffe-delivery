import {Plus, Minus } from "@phosphor-icons/react";
import { AmountContainer } from './style'

export const QuantityButton = () => {
  return (
    <AmountContainer>
            <button>
            <Minus size={14} weight="bold" />
            </button>
            <span className="quantity">2</span>
            <button>
            <Plus size={14} weight="bold" />
            </button>
          </AmountContainer>
  )
}
