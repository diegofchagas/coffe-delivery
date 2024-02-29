import copo from "../../../../assets/copo-cafe.svg";
import carrinho from "../../../../assets/carrinho.svg";
import embalagem from "../../../../assets/embalagem.svg";
import relogio from "../../../../assets/relogio.svg";
import cafe from "../../../../assets/cafe.svg";
import { Banner, ContainerAbout, InfoContainer } from "./style";

export const About = () => {
  return (
    <ContainerAbout>
      <Banner>
        <h1>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </p>
      </Banner>
      <img src={copo} alt="" />
      <InfoContainer>
        <img src={carrinho} alt="" /> <span>Compra simples e segura</span>
        <img src={embalagem} alt="" /> <span>Embalagem mantém o café intacto</span>
        <img src={relogio} alt="" /> <span>Entrega rápida e rastreada</span>
        <img src={cafe} alt="" /> <span>O café chega fresquinho até você</span>
      </InfoContainer>
    </ContainerAbout>
  );
};
