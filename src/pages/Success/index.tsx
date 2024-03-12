import deliveryman from "../../assets/Illustration.svg";
import {DataDeliveryContainer,GridContainer,SuccessContainer,} from "./style";
import { TextWithIcon } from "../../components/TextWithIcon";
import { CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";
import { registerUserFormData } from "../Checkout";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

interface LocationType{
  state:registerUserFormData
}

export const Success = () => {
  const {selectedPayment} = useContext(CartContext)

  const {state} = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(()=>{
    if(!state){
      navigate("/");
    }
  },[navigate, state])

  if(!state) return <></>;

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
                Entrega em <strong>{state.address.street}, {state.address.number}</strong>{" "}
                <br />
                {state.address.district} - {state.address.city}, {state.address.stateOf}
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
                Pagamento na entrega <br /> <strong>{selectedPayment}</strong>
              </p>
            }
          />
        </DataDeliveryContainer>
        <img src={deliveryman} alt="" />
      </GridContainer>
    </SuccessContainer>
  );
};
