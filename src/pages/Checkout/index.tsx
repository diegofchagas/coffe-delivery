import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {z} from 'zod'

import axios from "axios";

import { zipCodeMask } from "../../utils/zipCodeMask";
import { CoffeSelected } from "./components/CoffeSelected";
import { CompleteOrdeForm } from "./components/CompleteOrderForm";

import {ChekoutContainer} from "./style";
import { CartContext } from "../../contexts/CartContext";

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
      street: field.address.street,
      number: field.address.number,
      complement: field.address.complement,
      district: field.address.district,
      city: field.address.city,
      stateOf: field.address.stateOf,
    },
  }));

export type registerUserFormData = z.infer<typeof registerUserFormSchema>;

export const Checkout = () => {
  const {cleanCart} = useContext(CartContext)
  const navigate = useNavigate();

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

  const newRegisterUserAdress = (data: registerUserFormData) => {
    navigate('/success',{
      state: data
    })
    cleanCart()
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
    <FormProvider {...registerAddressUser}>
      <ChekoutContainer className="container-basic" onSubmit={handleSubmit(newRegisterUserAdress)}>
        <CompleteOrdeForm/>
        <CoffeSelected/>
      </ChekoutContainer>
      </FormProvider>
  );
};
