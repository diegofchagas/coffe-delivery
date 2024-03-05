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
      <img src={logo} alt="" />

      <NavContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Barbacena, MG
          </HeaderButton>
        <HeaderButton variant="yellow">
          <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
      </NavContainer>
    </HeaderContainer>
  );
};
