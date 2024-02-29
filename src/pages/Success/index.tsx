//import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import location from "../../assets/localização-success.svg";
import timer from "../../assets/relogio.svg";
import money from "../../assets/money.svg";
import deliveryman from "../../assets/Illustration.svg";
import {
  DataDeliveryClient,
  DataDeliveryContainer,
  GridContainer,
  SuccessContainer,
} from "./style";

export const Success = () => {
  return (
    
    <SuccessContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

      <GridContainer>
        <DataDeliveryContainer>
          <DataDeliveryClient>
            <img src={location} alt="" />
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </DataDeliveryClient>
          <DataDeliveryClient>
            <img src={timer} alt="" />
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>{" "}
            </p>
          </DataDeliveryClient>
          <DataDeliveryClient>
            <img src={money} alt="" />
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </DataDeliveryClient>
        </DataDeliveryContainer>

        <img src={deliveryman} alt="" />
      </GridContainer>
    </SuccessContainer>
  );
};
