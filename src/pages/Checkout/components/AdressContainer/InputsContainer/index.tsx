import {
  /*UseFormRegister, FieldValues,*/ useFormContext,
} from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { ContainerInputs } from "./styte";

interface FormErrors {
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
    formState: { errors },
  } = useFormContext<FormErrors>();

  return (
    <ContainerInputs>
      <Input placeholder="Cep" type="text" className="cep" {...register("address.zipCode")} />
      {errors.address?.zipCode?.message && (
        <span className="error"> {errors.address.zipCode.message}</span>
      )}
      <Input placeholder="Rua" type="text" className="street" {...register("address.street")} />
      <Input placeholder="Número" type="text" {...register("address.number")} />
      <Input placeholder="Complemento"type="text" className="complement"{...register("address.complement")}/>
      <Input placeholder="Bairro"type="text"{...register("address.district")}/>
      <Input placeholder="Cidade" type="text" {...register("address.city")} />
      <Input placeholder="UF" type="text" {...register("address.stateOf")} />
    </ContainerInputs>
  );
};
