import {Bank,CreditCard,CurrencyDollar,Money,} from "@phosphor-icons/react";
import { PaymentsContainer } from './style'
import { ButtonComponent } from '../ButtonCard'
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export const PaymentMethodOptions = () => {
  const {selectedPayment, uptadedMethodPayment} = useContext(CartContext)

  return (
    <PaymentsContainer>
    <p>
      <CurrencyDollar size={22} color="#8047F8" />
      Pagamento
    </p>
    <span>
      O pagamento é feito na entrega. Escolha a forma que deseja pagar
    </span>
    <div>
      <ButtonComponent
        title=" Cartão de crédito"
        Icon={CreditCard}
        size={16}
        selected={selectedPayment === 'crédito'}
        onClick={()=> uptadedMethodPayment('crédito')}
      />
      <ButtonComponent 
      title=" Cartão de débito" 
      Icon={Bank} 
      size={16}
      selected={selectedPayment === 'débito'}
      onClick={()=> uptadedMethodPayment('débito')}
      />
      <ButtonComponent 
      title="dinheiro" 
      Icon={Money} 
      size={16}
      selected={selectedPayment === 'dinheiro'}
      onClick={()=> uptadedMethodPayment('dinheiro')}
      />
    </div>
  </PaymentsContainer>
  )
}
