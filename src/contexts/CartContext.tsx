import { ReactNode, createContext, useState } from 'react'
import { CoffeTypes } from '../pages/Home/Components/CardCoffe';

export interface CartItem extends CoffeTypes{
  quantity:number
}

interface CartContextType{
  cartItems:CartItem[];
  addCoffeeToCart: (coffee:CartItem) => void;
  cartCoffesQuantity:number
}

interface CartContextProviderProps{
  children:ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCoffesQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const itemExistsCart = cartItems.findIndex((item) => item.id === coffee.id);

    if (itemExistsCart < 0) {
      setCartItems([...cartItems, { ...coffee, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item, index) =>
          index !== itemExistsCart
            ? item
            : { ...item, quantity: item.quantity + coffee.quantity }
        )
      );
    }
  }
  console.log(cartItems)
  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart,cartCoffesQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
