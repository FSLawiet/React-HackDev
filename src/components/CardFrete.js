import React from "react";
import "./CardFrete.css";

function CardFrete({ key, id, nome, preco, previsao, handleFormaEnvioChange }) {
  return (
    <label htmlFor={"envio_frete_" + id} key={key}>
      <div className="card_envio">
        <input
          type="radio"
          name="envio_frete"
          id={"envio_frete_" + id}
          value={id}
          onChange={handleFormaEnvioChange}
        />
        <p>{nome}</p>
        <p className="envio_preco">
          {parseFloat(preco) !== 0
            ? `R$ ${parseFloat(preco).toFixed(2)}`
            : "Grátis"}
        </p>
        <p className="envio_previsao">
          {parseInt(previsao) > 1
            ? `Previsão: até ${parseInt(previsao)} dias úteis`
            : ""}{" "}
        </p>
      </div>
    </label>
  );
}

export default CardFrete;
