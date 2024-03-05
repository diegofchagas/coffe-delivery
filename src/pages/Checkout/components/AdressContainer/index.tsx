import { MapPinLine } from "@phosphor-icons/react";
import {
  /*UseFormRegister, FieldValues,*/ useFormContext,
} from "react-hook-form";

import {
  AdressContainer,
  FormContainer,
  InputsContainer,
  CepInput,
  StateInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  DistrictInput,
  CityInput,
} from "./style";

// interface AdressContainerComponentProps {
//   register: UseFormRegister<FieldValues>;
// }

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

export const AdressContainerComponent =
  (/*{register}: AdressContainerComponentProps*/) => {
    const {
      register,
      formState: { errors },
    } = useFormContext<FormErrors>();

    return (
      <AdressContainer>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <header>
            <p>
              <MapPinLine size={22} color="#C47F17" />
              Endereço de Entrega
            </p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </header>
          <InputsContainer>
            <CepInput
              type="text"
              placeholder="CEP"
              {...register("address.zipCode")}
              maxLength={9}
            />
            {errors.address?.zipCode?.message && (
              <span className="error"> {errors.address.zipCode.message}</span>
            )}

            <StreetInput
              type="text"
              placeholder="Rua"
              {...register("address.street")}
            />
            <div>
              <NumberInput
                type="text"
                placeholder="Número"
                {...register("address.number")}
              />
              <ComplementInput
                type="text"
                placeholder="Complemento"
                {...register("address.complement")}
              />
            </div>
            <div>
              <DistrictInput
                type="text"
                placeholder="Bairro"
                {...register("address.district")}
              />
              <CityInput
                type="text"
                placeholder="Cidade"
                {...register("address.city")}
              />
              <StateInput
                type="text"
                placeholder="UF"
                {...register("address.stateOf")}
              />
            </div>
          </InputsContainer>
        </FormContainer>
      </AdressContainer>
    );
  };
