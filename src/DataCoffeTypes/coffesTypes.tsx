import tradicional from "../assets/coffes/expresso-tradicional.svg";
import americano from "../assets/coffes/expresso-americano.svg";
import cafeLeite from "../assets/coffes/cafe-com-leite.svg";
import cremoso from "../assets/coffes/expresso-cremoso.svg";
import gelado from "../assets/coffes/expresso-gelado.svg";
import late from "../assets/coffes/late.svg";
import capuccino from "../assets/coffes/capuccino.svg";
import macchiato from "../assets/coffes/macchiato.svg";
import mocaccino from "../assets/coffes/mocaccino.svg";
import chocolateQuente from "../assets/coffes/chocolate-quente.svg";
import cubano from "../assets/coffes/cubano.svg";
import havaiano from "../assets/coffes/havaiano.svg";
import arabe from "../assets/coffes/arabe.svg";
import irlandes from "../assets/coffes/irlandes.svg";

export const coffeTypes = [
  { id:1,
    image: tradicional,
    type: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price:9.9
  },
  { id:2,
    image: americano,
    type: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price:9.9
  },
  { id:3,
    image: cremoso,
    type: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price:9.9
  },
  { id:4,
    image: gelado,
    type: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price:9.9
  },

  { id:5,
    image: cafeLeite,
    type: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price:9.9
  },
  { id:6,
    image: late,
    type: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price:9.9
  },
  { id:7,
    image: capuccino,
    type: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price:9.9
  },
  { id:8,
    image: macchiato,
    type: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description:"Café expresso misturado com um pouco de leite quente e espuma",
    price:9.9
  },
  { id:9,
    image: mocaccino,
    type: ["Tradicional", "Com leite"],
    name: "Mocaccnino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price:9.9
  },
  { id:10,
    image: chocolateQuente,
    type: ["Especial", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price:9.9
  },
  { id:11,
    image: cubano,
    type: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price:9.9
  },
  { id:12,
    image: havaiano,
    type: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price:9.9
  },
  { id:13,
    image: arabe,
    type: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price:9.9
  },
  { id:14,
    image: irlandes,
    type: ["Especial", "Álcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price:9.9
  },
];
