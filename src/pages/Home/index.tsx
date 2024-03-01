import { About } from "./Components/About";
import { CardCoffe } from "./Components/CardCoffe";
import { coffeTypes } from "../../DataCoffeTypes/coffesTypes";

import { ContainerHome } from "./styles";

export const Home = () => {
  return (
    <ContainerHome>
      <About />
      <h2>Nossos cafés</h2>
      <section className="cards-coffes-types">
        {coffeTypes.map((coffes) => (
          <CardCoffe coffes={coffes} />
        ))}
      </section>
    </ContainerHome>
  );
};
