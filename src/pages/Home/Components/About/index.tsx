import copo from "../../../../assets/copo-cafe.svg";
import bg from "../../../../assets/about-background.svg"
import { Banner, Container, ContainerAbout, InfoContainer } from "./style";
import { TextWithIcon } from "../../../../components/TextWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";


export const About = () => {
  return (
    <Container>
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
          <TextWithIcon
            iconBg="#C47F17"
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
          />
          <TextWithIcon
            iconBg="#574F4D"
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
          />
          <TextWithIcon
            iconBg="#DBAC2C"
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
          />
          <TextWithIcon
            iconBg="#8047F8"
            icon={<Coffee weight="fill" />}
            text="O café chega fresquinho até você"
          />
        </InfoContainer>
      </ContainerAbout>
      <img src={bg} id="bg" alt="" />
    </Container>
  );
};
