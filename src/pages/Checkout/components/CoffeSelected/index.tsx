import { CardCoffeSelection } from '../CardCoffeSelection'
import { ConfirmOrder } from '../ConfirmOrder'
import { CoffeSelectedContainer } from './style'

export const CoffeSelected = () => {
  return (
    <CoffeSelectedContainer>   
      <h3>Cafés selecionados</h3>
      <div>
        <CardCoffeSelection/>
        <CardCoffeSelection/>
        <ConfirmOrder/>
      </div>
    </CoffeSelectedContainer>
  )
}
