import { AdressContainerComponent } from "./components/AdressContainer";
import { ButtonComponent } from "./components/ButtonCard";
import { CardCoffeSelection } from "./components/CardCoffeSelection";

import {Bank,CreditCard,CurrencyDollar,Money,} from "@phosphor-icons/react";
import {ChekoutContainer,CoffeSelected,SelectContainer,Footer,ConfirmOrder,PaymentsContainer,} from "./style";


import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {z} from 'zod'
import { useCallback, useEffect } from "react";
import axios from "axios";


const registerUserFormSchema = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Informe um número de CEP válido"),
      street: z.string().min(1, "Informe um nome válido"),
      number: z.string().min(1, "Informe um número válido"),
      complement: z.string(),
      district: z.string().min(1, "Informe nome de um bairro válido válido"),
      city: z.string().min(2, "Informe um nome de cidade válido"),
      stateOf: z.string().min(1, "Informe uma siglade cidade valida"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.zipCode,
      number: field.address.zipCode,
      complement: field.address.zipCode,
      district: field.address.zipCode,
      city: field.address.zipCode,
      stateOf: field.address.zipCode,
    },
  }));

type registerUserFormData = z.infer<typeof registerUserFormSchema>;

export const Checkout = () => {
  const registerAddressUser = useForm<registerUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
    defaultValues: {
      address: {
        zipCode: "",
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        stateOf: "",
      },
    },
  });

  const { handleSubmit, watch, setValue } = registerAddressUser;

  const zipCode = watch("address.zipCode");

  const zipCodeMask = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  };

  const newRegisterUserAdress = (data: registerUserFormData) => {
    console.log(data);
  };

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      console.log(data);

      registerAddressUser.reset({
        address: {
          zipCode: zipCodeMask(data.cep),
          street: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          stateOf: data.uf,
        },
      });
    },
    [registerAddressUser]
  );

  useEffect(() => {
    setValue("address.zipCode", zipCodeMask(zipCode));
    if (zipCode.length !== 9) return;
    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);

  return (
    <ChekoutContainer>
      <FormProvider {...registerAddressUser}>
        <AdressContainerComponent />
      </FormProvider>

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
            <ConfirmOrder
              type="submit"
              onClick={handleSubmit(newRegisterUserAdress)}
            >
              Confirmar Pedido
            </ConfirmOrder>
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
          <ButtonComponent
            title=" Cartão de crédito"
            Icon={CreditCard}
            size={16}
          />
          <ButtonComponent title=" Cartão de débito" Icon={Bank} size={16} />
          <ButtonComponent title=" dinheiro" Icon={Money} size={16} />
        </div>
      </PaymentsContainer>
    </ChekoutContainer>
  );
};
