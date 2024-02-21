import { AdressContainerComponent } from "./components/AdressContainer";
import { ButtonComponent } from "./components/ButtonCard";
import { CardCoffeSelection } from "./components/CardCoffeSelection";
import {
  ChekoutContainer,
  CoffeSelected,
  SelectContainer,
  Footer,
  ConfirmOrder,
  PaymentsContainer,
} from "./style";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
} from "@phosphor-icons/react";

export const Checkout = () => {
  return (
    <ChekoutContainer>
      <AdressContainerComponent/>
      <CoffeSelected>
        <h3>Cafés selecionados</h3>
        <SelectContainer>
          <CardCoffeSelection />
          <Footer>
            <span>Total de itens</span>
            <span className="value">R$ 29,70</span>
            <span>Entrega</span>
            <span className="value">R$ 3,50</span>
            <strong>Total</strong>
            <strong className="value">R$33,20</strong>
            <ConfirmOrder>Confirmar Pedido</ConfirmOrder>
          </Footer>
        </SelectContainer>
      </CoffeSelected>

      <PaymentsContainer>
        <p>
          <CurrencyDollar size={22} color="#8047F8" />
          Pagamento
        </p>
        <span>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </span>
        <div>
          <ButtonComponent title=" Cartão de crédito" Icon={CreditCard} size={16}/>
          <ButtonComponent title=" Cartão de débito" Icon={Bank} size={16}/>
          <ButtonComponent title=" dinheiro" Icon={Money} size={16}/>
        </div>
      </PaymentsContainer>
    </ChekoutContainer>
  );
};
