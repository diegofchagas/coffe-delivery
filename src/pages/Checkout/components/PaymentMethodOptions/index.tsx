import {Bank,CreditCard,CurrencyDollar,Money,} from "@phosphor-icons/react";
import { PaymentsContainer } from './style'
import { ButtonComponent } from '../ButtonCard'

export const PaymentMethodOptions = () => {
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
      />
      <ButtonComponent 
      title=" Cartão de débito" 
      Icon={Bank} 
      size={16} 
      />
      <ButtonComponent 
      title=" dinheiro" 
      Icon={Money} 
      size={16} />
    </div>
  </PaymentsContainer>
  )
}
