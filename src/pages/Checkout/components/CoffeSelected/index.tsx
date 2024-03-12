import { useContext } from 'react'
import { CardCoffeSelection } from '../CardCoffeSelection'
import { ConfirmOrder } from '../ConfirmOrder'
import { CoffeSelectedContainer } from './style'
import { CartContext } from '../../../../contexts/CartContext'

export const CoffeSelected = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <CoffeSelectedContainer>   
      <h3>Cafés selecionados</h3>
      <div>
        {cartItems.map(item => 
        <CardCoffeSelection key={item.id} coffee={item}/>
          )}
        <ConfirmOrder/>
      </div>
    </CoffeSelectedContainer>
  )
}
