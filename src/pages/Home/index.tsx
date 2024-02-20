import { About } from "../../components/About";
import { CardCoffe } from "./components/CardCoffe";
import {coffeTypes} from "../../DataCoffeTypes/coffesTypes"

import { ContainerHome } from "./styles";


export const Home = () => {
  return (
    <ContainerHome>
      <About />
      <h1>Nossos cafés</h1>

      <section className="teste">
      {coffeTypes.map(coffes => <CardCoffe coffes={coffes} /> )}
      <img src="../../assets/coffes/arabe.svg" alt="" />
      </section>
     
    </ContainerHome>
  );
};
