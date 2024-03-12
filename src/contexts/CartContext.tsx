import { ReactNode, createContext, useState } from 'react'
import { CoffeTypes } from '../pages/Home/Components/CardCoffe';

export interface CartItem extends CoffeTypes{
  quantity:number
}

interface CartContextType{
  cartItems:CartItem[];
  cartCoffesQuantity:number,
  totalValueCoffes:number,
  addCoffeeToCart: (coffee:CartItem) => void;
  changeCartItemQuantity: (cartItemId:number, type:"increment" | "decrement")=> void;
  removeCartItem: (cartItemId:number)=> void;
}


interface CartContextProviderProps{
  children:ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCoffesQuantity = cartItems.length;
  

  const totalValueCoffes = cartItems.reduce((total,cartItem)=> { return total + cartItem.price * cartItem.quantity},0)
  

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

  function changeCartItemQuantity(cartItemId:number, type: "increment" | "decrement"){
    // const newCart = cartItems.map(cartItem => {
    //   if (cartItem.id === cartItemId) {
    //     const quantity = type === "increment" ? cartItem.quantity + 1 : cartItem.quantity - 1;
    //     return { ...cartItem, quantity };
    //   }
    //   return cartItem;
    // });
  
    // setCartItems(newCart);
    const coffeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

    if(coffeExistsInCart >= 0){
      const newCartItems = cartItems.map((item,index)=> {
        if(index !== coffeExistsInCart){
          return item;
        }

        return{
          ...item,
          quantity:type === 'increment' ? item.quantity + 1 : item.quantity - 1
        }
        
      })
      setCartItems(newCartItems)
    }
  }

  function removeCartItem(cartItemId:number){
    const coffeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

    if(coffeExistsInCart >= 0){
      const newCartItems = cartItems.filter(cartItem => cartItem.id !== cartItemId)
      setCartItems(newCartItems)
    }  
  }
  console.log(cartItems)
  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart,cartCoffesQuantity,changeCartItemQuantity,removeCartItem,totalValueCoffes}}>
      {children}
    </CartContext.Provider>
  );
};
