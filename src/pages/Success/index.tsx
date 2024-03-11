import deliveryman from "../../assets/Illustration.svg";
import {DataDeliveryContainer,GridContainer,SuccessContainer,} from "./style";
import { TextWithIcon } from "../../components/TextWithIcon";
import { CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";

export const Success = () => {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <GridContainer>
        <DataDeliveryContainer>
          <TextWithIcon
            icon={<MapPin />}
            iconBg="#8047F8"
            text={
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
          />

          <TextWithIcon
            icon={<Timer />}
            iconBg="#DBAC2C"
            text={
              <p>
                Previsão de entrega <br /> <strong>20 min - 30min</strong>
              </p>
            }
          />
          <TextWithIcon
            icon={<CurrencyDollar />}
            iconBg="#C47F17"
            text={
              <p>
                Pagamento na entrega <br /> <strong>Cartão de crédito</strong>
              </p>
            }
          />
        </DataDeliveryContainer>
        <img src={deliveryman} alt="" />
      </GridContainer>
    </SuccessContainer>
  );
};
