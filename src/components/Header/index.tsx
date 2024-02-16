import logo from "../../assets/Logo.svg";
import carrinho from "../../assets/Cart.svg";
import localizacao from "../../assets/localização.svg";
import { HeaderContainer, LocalizacaoContainer, NavContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <NavContainer>
        <LocalizacaoContainer>
          <img src={localizacao} alt="" />
          <span>Barbacena, MG</span>
        </LocalizacaoContainer>
        <img src={carrinho} alt="" />
      </NavContainer>
    </HeaderContainer>
  );
};
