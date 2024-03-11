import { AdressContainerComponent } from '../AdressContainer'
import { PaymentMethodOptions } from '../PaymentMethodOptions'
import { CompleteOrderContainer } from './styte'

export const CompleteOrdeForm = () => {
  return (
    <CompleteOrderContainer>
      <AdressContainerComponent/>
      <PaymentMethodOptions/>
    </CompleteOrderContainer>
  )
}
