import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import {
  HeaderButton,
  HeaderContainer,
  NavContainer,
} from "./style";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const {cartCoffesQuantity} =  useContext(CartContext)
  return (
    <HeaderContainer className="container-basic">
      <NavLink to="/">
      <img src={logo} alt="" />
      </NavLink>
      
      <NavContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Barbacena, MG
          </HeaderButton>
          <NavLink to="/checkout">
        <HeaderButton variant="yellow">
          {cartCoffesQuantity >=  1 && (<span>{cartCoffesQuantity}</span>)}
          <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
          </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};
