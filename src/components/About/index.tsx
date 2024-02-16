import copo from "../../assets/copo-cafe.svg"
import carrinho from "../../assets/carrinho.svg"
import embalagem from "../../assets/embalagem.svg"
import relogio from "../../assets/relogio.svg"
import cafe from "../../assets/cafe.svg"

export const About = () => {
  return (
    <div>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>

      <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

      <img src={copo} alt="" />

      <div>
       <img src={carrinho} alt="" /> <span>Compra simples e segura</span>
       <img src={relogio} alt="" /> <span>Entrega rápida e rastreada</span>
        <img src={embalagem} alt="" /><span>Embalagem mantém o café intacto</span>
       <img src={cafe} alt="" /> <span>O café chega fresquinho até você</span>
      </div>
    </div>
  )
}
