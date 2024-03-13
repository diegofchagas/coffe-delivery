import {
  /*UseFormRegister, FieldValues,*/ useFormContext,
} from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { ContainerInputs } from "./styte";

interface FormInputErrors {
  address?: {
    zipCode?: string;
    street?: string;
    number?: string;
    complement?: string;
    district?: string;
    city?: string;
    stateOf?: string;
  };
}

export const InputsContainer = () => {
  const {
    register,
    // formState: { errors },
  } = useFormContext<FormInputErrors>();

  return (
    <ContainerInputs>
      <Input placeholder="Cep" type="text" className="cep" {...register("address.zipCode")} />
      <Input placeholder="Rua" type="text" className="street" {...register("address.street")} />
      <Input placeholder="Número" type="text" {...register("address.number")} />
      <Input placeholder="Complemento"type="text" className="complement"{...register("address.complement")}/>
      <Input placeholder="Bairro"type="text"{...register("address.district")}/>
      <Input placeholder="Cidade" type="text" {...register("address.city")} />
      <Input placeholder="UF" type="text" {...register("address.stateOf")} />
    </ContainerInputs>
  );
};
