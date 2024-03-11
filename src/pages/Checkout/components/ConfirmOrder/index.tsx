import { Button } from "../../../../components/Button"
import { ConfirmOrderContainer } from "./styles"

export const ConfirmOrder = () => {
  return (
    <ConfirmOrderContainer>
      <div>
        <span>Total de itens</span>
        <span>R$9,90</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$3,50</span>
      </div>
      <div>
        <span>Total</span>
        <span>R$29,90</span>
      </div>
     <Button text="Confirmar Pedido"/>
    </ConfirmOrderContainer>
  )
}
