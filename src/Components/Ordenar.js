import React from "react";
import styles from "./Ordenar.module.css"
import { AppContext } from "../Context/AppContext";

const Ordenar = () => {
  const { ordem, setNovaOrdem } = React.useContext(AppContext)

  function orgPreco() {
    setNovaOrdem(
      ordem.sort((a, b) => a.price - b.price));
  }

  function orgScore() {
    setNovaOrdem(
      ordem.sort((a, b) => a.score - b.score));
  }

  function orgAZ() {
    setNovaOrdem(
      ordem.sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1));
  }

  return (
    <div className={styles.headerLista}>
      <h2>Lista de Produtos</h2>
      <p>Ordenar por: </p>
      <button className={styles.btnOrg + " btn"} onClick={orgPreco}>
        Preço
      </button>
      <button className={styles.btnOrg + " btn"} onClick={orgScore}>
        Popularidade (Score)
      </button>
      <button className={styles.btnOrg + " btn"} onClick={orgAZ}>
        Ordem Alfabética
      </button>
    </div>
  );
};

export default Ordenar;
