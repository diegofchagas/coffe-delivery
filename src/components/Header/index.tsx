import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import {
  HeaderButton,
  HeaderContainer,
  NavContainer,
} from "./style";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <HeaderContainer>
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
          <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
          </NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};
