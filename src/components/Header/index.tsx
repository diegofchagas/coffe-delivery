import logo from "../../assets/Logo.svg";
import carrinho from "../../assets/Cart.svg";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="" />
        <div>
          <span>Barbacena</span>
          <img src={carrinho} alt="" />
        </div>
      </nav>
    </HeaderContainer>
  );
};
