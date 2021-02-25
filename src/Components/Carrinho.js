import React from "react";
import { AppContext } from "../Context/AppContext";

const Carrinho = () => {
  const { carrinho, setPaginaCarrinho} = React.useContext(AppContext)
  const [frete, setFrete] = React.useState(0);

  const total = 0;

  React.useEffect(() => {
    if (total < 250) {
      setFrete(carrinho * 10);
    } else {
      setFrete(0);
    }
  }, [carrinho]);

  return (
    <div className="modalContainer">
      <div className="modal">
        <button className="modalBotaoFechar" onClick={() => setPaginaCarrinho(false)}>X</button>
        <div className="modalProdutosNoCarrinho">
          <h1>Seus Produtos</h1>
          {carrinho > 0 ? 'Produtos comprados' : 'Seu carrinho está vazio'}
        </div>
        {carrinho > 0 ? (
          <div className="modalValorPagar">
          <p>
            <span>Frete: </span>
            {frete.toLocaleString("Pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>SubTotal: Soma dos Produtos</p>
          <p>Total: Soma dos produtos com frete</p>
          <button className="btn">Finalizar Compra</button>
        </div>        
        ) : ''}
        
      </div>
    </div>
  );
};

export default Carrinho;
