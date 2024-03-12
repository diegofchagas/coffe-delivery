import { useContext } from "react"
import { Button } from "../../../../components/Button"
import { ConfirmOrderContainer } from "./styles"
import { CartContext } from "../../../../contexts/CartContext"
import { formatMoney } from "../../../../utils/formatMoney"



const DELIVERY_PRICE = 3.50;

export const ConfirmOrder = () => {
  const {totalValueCoffes, cartCoffesQuantity} = useContext(CartContext);
  const totalValues = DELIVERY_PRICE + totalValueCoffes

  const cartTotal = formatMoney(totalValueCoffes)
  const totalDelivery = formatMoney(DELIVERY_PRICE)
  const total = formatMoney(totalValues)
  console.log(total)

 
  return (
    <ConfirmOrderContainer>
      <div>
        <span>Total de itens</span>
        <span>R${cartTotal}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R${totalDelivery}</span>
      </div>
      <div>
        <span>Total</span>
        <span>R${total}</span>
      </div>
     <Button text="Confirmar Pedido" disabled={cartCoffesQuantity <= 0}/>
    </ConfirmOrderContainer>
  )
}
