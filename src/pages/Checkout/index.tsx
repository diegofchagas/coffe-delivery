import {ChekoutContainer} from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {z} from 'zod'
import { useCallback, useEffect } from "react";
import axios from "axios";
import { zipCodeMask } from "../../utils/zipCodeMask";
import { CoffeSelected } from "./components/CoffeSelected";
import { CompleteOrdeForm } from "./components/CompleteOrderForm";


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
    <FormProvider {...registerAddressUser}>
      <ChekoutContainer>
        <CompleteOrdeForm/>
        <CoffeSelected />
      </ChekoutContainer>
    </FormProvider>
  );
};
